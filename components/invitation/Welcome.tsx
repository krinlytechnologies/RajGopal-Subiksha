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

      <div className="text-shadow-soft relative z-10 mx-auto flex w-full max-w-2xl flex-col items-center px-6 py-28 text-center sm:py-36">
        <Reveal>
          <h2 className="font-display text-4xl leading-[1.15] text-ivory sm:text-5xl md:text-6xl">
            {welcome.lines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h2>
        </Reveal>
        <Reveal delay={0.2} className="mt-8">
          <BotanicalDivider tone="ivory" />
        </Reveal>
        <Reveal delay={0.3} className="mt-8">
          <p className="font-display text-sm uppercase tracking-[0.35em] text-ivory/85 sm:text-base">
            {welcome.names}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
