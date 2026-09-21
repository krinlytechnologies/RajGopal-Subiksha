import { invitationImages } from "@/data/images";
import { closing } from "@/data/invitation";
import { ParallaxImage } from "../ui/ParallaxImage";
import { Reveal } from "../ui/Reveal";
import { BotanicalDivider } from "../ui/BotanicalDivider";

export function Closing() {
  return (
    <section className="relative flex min-h-[90vh] w-full items-center overflow-hidden bg-brown">
      <ParallaxImage
        src={invitationImages.closing.src}
        alt={invitationImages.closing.alt}
        className="absolute inset-0"
        strength={22}
        scrim="full"
        sizes="100vw"
      />

      <div className="text-shadow-soft relative z-10 mx-auto flex w-full max-w-2xl flex-col items-center px-6 py-24 text-center">
        <Reveal>
          <p className="font-display text-5xl text-ivory sm:text-6xl md:text-7xl">{closing.title}</p>
        </Reveal>

        <Reveal delay={0.15} className="mt-9">
          <BotanicalDivider tone="ivory" />
        </Reveal>

        <Reveal delay={0.25} className="mt-9 space-y-2 font-body text-base leading-relaxed text-ivory/85 sm:text-lg">
          {closing.lines.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </Reveal>

        <Reveal delay={0.4} className="mt-11">
          <p className="font-body text-sm uppercase tracking-[0.25em] text-ivory/70">
            {closing.signOffLabel}
          </p>
          <p className="mt-3 font-script text-4xl text-ivory sm:text-5xl">{closing.names}</p>
        </Reveal>

        <Reveal delay={0.55} className="mt-14">
          <p className="font-display text-base italic text-ivory/75">
            {closing.final} <span aria-hidden="true">♡</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
