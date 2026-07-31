import { ElementType, ReactNode } from "react";
import { useReveal } from "@/hooks/use-reveal";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: ElementType;
  variant?: "up" | "clip";
}

const Reveal = ({ children, delay = 0, className, as, variant = "up" }: RevealProps) => {
  const Comp = (as ?? "div") as ElementType;
  const { ref, inView } = useReveal<HTMLDivElement>();

  const base = variant === "clip" ? "clip-reveal" : "reveal";
  const active = variant === "clip" ? "clip-reveal-in" : "reveal-in";

  return (
    <Comp
      ref={ref}
      className={cn(base, inView && active, className)}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Comp>
  );
};

export default Reveal;
