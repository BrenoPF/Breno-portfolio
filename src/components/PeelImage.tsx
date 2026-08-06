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
      className={`relative overflow-hidden ${className}`}
      style={{ "--peel-x": "50%", "peel-y": "50%" } as React.CSSProperties}
    >
      {/* Camada colorida revelada por baixo */}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover scale-[1.08]"
      />

      {/* Camada "papel" que descasca seguindo o cursor */}
      <div
        className="absolute inset-0 bg-secondary/95 pointer-events-none transition-[mask-size] duration-100 ease-out"
        style={{
          maskImage: `radial-gradient(circle at var(--peel-x) var(--peel-y), transparent 0%, transparent 12%, black 45%)`,
          WebkitMaskImage: `radial-gradient(circle at var(--peel-x) var(--peel-y), transparent 0%, transparent 12%, black 45%)`,
          maskSize: "0% 0%",
        }}
      />

      {/* Borda sutil do círculo de revelação */}
      <div
        className="absolute inset-0 pointer-events-none opacity-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle at var(--peel-x) var(--peel-y), transparent 0%, transparent 13%, hsl(var(--foreground) / 0.12) 14%, transparent 16%)`,
        }}
      />
    </div>
  );
};

export default PeelImage;
