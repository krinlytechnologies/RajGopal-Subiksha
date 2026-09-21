import { HeartIcon } from "./Icon";

type BotanicalDividerProps = {
  className?: string;
  tone?: "brown" | "gold" | "ivory";
};

const toneClass: Record<NonNullable<BotanicalDividerProps["tone"]>, string> = {
  brown: "text-brown-soft/60",
  gold: "text-gold",
  ivory: "text-ivory/70",
};

export function BotanicalDivider({ className = "", tone = "brown" }: BotanicalDividerProps) {
  return (
    <div
      className={`flex items-center justify-center gap-3 ${toneClass[tone]} ${className}`}
      aria-hidden="true"
    >
      <span className="h-px w-10 bg-current opacity-60 sm:w-14" />
      <HeartIcon className="h-3 w-3" />
      <span className="h-px w-10 bg-current opacity-60 sm:w-14" />
    </div>
  );
}
