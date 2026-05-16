type Props = {
  label?: string;
  tint?: string;
  className?: string;
};

/** Sized grey/tinted placeholder shown when an image slot has no file yet. */
export default function Placeholder({ label, tint, className = '' }: Props) {
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden ${className}`}
      style={{
        background: tint
          ? `linear-gradient(135deg, ${tint}33, ${tint}14)`
          : 'linear-gradient(135deg, hsl(35 14% 90%), hsl(35 14% 95%))',
      }}
      aria-hidden="true"
    >
      <span
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            'repeating-linear-gradient(45deg, transparent 0 11px, rgba(0,0,0,.04) 11px 22px)',
        }}
      />
      {label && (
        <span className="relative text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-muted-foreground/70">
          {label}
        </span>
      )}
    </div>
  );
}
