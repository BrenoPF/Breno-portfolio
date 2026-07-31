interface MarqueeProps {
  items: string[];
  className?: string;
}

const Marquee = ({ items, className = "" }: MarqueeProps) => {
  const row = [...items, ...items];

  return (
    <div className={`group relative overflow-hidden border-y border-foreground/20 py-4 ${className}`}>
      <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
        {row.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex items-center gap-8 px-8 font-display uppercase text-sm tracking-[0.2em] whitespace-nowrap"
          >
            {item}
            <span className="inline-block h-1.5 w-1.5 rotate-45 bg-foreground/50" />
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
