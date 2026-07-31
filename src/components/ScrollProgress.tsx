import { useEffect, useState } from "react";

const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        setProgress(max > 0 ? (window.scrollY / max) * 100 : 0);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[70] h-[2px] bg-transparent" aria-hidden="true">
      <div
        className="h-full bg-foreground origin-left"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

export default ScrollProgress;
