import { useRef, useCallback } from "react";

interface PeelImageProps {
  src: string;
  alt: string;
  className?: string;
}

const PeelImage = ({ src, alt, className = "" }: PeelImageProps) => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const el = wrapperRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    el.style.setProperty("--peel-x", `${x}%`);
    el.style.setProperty("--peel-y", `${y}%`);
  }, []);

  return (
    <div
      ref={wrapperRef}
      onMouseMove={handleMove}
      className={`group relative overflow-hidden ${className}`}
      style={{ "--peel-x": "50%", "--peel-y": "50%" } as React.CSSProperties}
    >
      {/* Camada colorida revelada por baixo */}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover scale-[1.06] transition-transform duration-700 ease-out group-hover:scale-100"
      />

      {/* Camada "papel" que descasca seguindo o cursor */}
      <div
        className="absolute inset-0 bg-secondary/95 pointer-events-none transition-[mask-size] duration-500 ease-out"
        style={{
          maskImage: "radial-gradient(circle, transparent 0%, black 100%)",
          WebkitMaskImage: "radial-gradient(circle, transparent 0%, black 100%)",
          maskPosition: "var(--peel-x) var(--peel-y)",
          WebkitMaskPosition: "var(--peel-x) var(--peel-y)",
          maskSize: "0% 0%",
          WebkitMaskSize: "0% 0%",
          maskRepeat: "no-repeat",
          WebkitMaskRepeat: "no-repeat",
        }}
      />

      {/* Borda do círculo de revelação no hover */}
      <div
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle at var(--peel-x) var(--peel-y), transparent 0%, transparent 42%, hsl(var(--foreground) / 0.15) 44%, transparent 46%)`,
        }}
      />
    </div>
  );
};

export default PeelImage;
