import { invitationImages } from "@/data/images";
import { welcome } from "@/data/invitation";
import { ParallaxImage } from "../ui/ParallaxImage";
import { Reveal } from "../ui/Reveal";
import { BotanicalDivider } from "../ui/BotanicalDivider";

export function Welcome() {
  return (
    <section className="relative flex min-h-[85vh] w-full items-center overflow-hidden bg-brown sm:min-h-screen">
      <ParallaxImage
        src={invitationImages.welcome.src}
        alt={invitationImages.welcome.alt}
        className="absolute inset-0"
        strength={34}
        scrim="full"
        sizes="100vw"
      />

      <div className="text-shadow-soft relative z-10 mx-auto flex w-full max-w-2xl flex-col items-center px-4 py-24 text-center sm:px-6 sm:py-36">
        <Reveal delay={0.12} y={18} duration={0.7} className="-mt-3 mb-4 sm:-mt-6 sm:mb-6">
          <p className="font-display text-[0.72rem] uppercase tracking-[0.18em] text-ivory drop-shadow-[0_2px_8px_rgba(58,42,31,0.55)] sm:text-base sm:tracking-[0.22em]">
            {welcome.names}
          </p>
        </Reveal>
        <Reveal x={12} y={28} duration={0.9}>
          <h2 className="mx-auto max-w-[12ch] font-display text-[clamp(2.7rem,9vw,5rem)] leading-[0.9] tracking-[-0.04em] text-ivory sm:leading-[1.02] md:text-6xl">
            {welcome.lines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h2>
        </Reveal>
        <Reveal delay={0.18} y={18} duration={0.7} className="mt-6 sm:mt-8">
          <BotanicalDivider tone="ivory" />
        </Reveal>
      </div>
    </section>
  );
}
