import { invitationImages } from "@/data/images";
import { babyShowerIntro } from "@/data/invitation";
import { ParallaxImage } from "../ui/ParallaxImage";
import { Reveal } from "../ui/Reveal";
import { BotanicalDivider } from "../ui/BotanicalDivider";

export function BabyShowerIntro() {
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-4xl px-5 pt-24 text-center sm:px-8 sm:pt-32">
        <Reveal>
          <p className="font-display text-lg italic text-brown-soft sm:text-xl">
            {babyShowerIntro.kicker}
          </p>
          <h2 className="mt-1 font-display text-5xl text-brown sm:text-6xl md:text-7xl">
            {babyShowerIntro.title}
          </h2>
          <div className="mt-7 flex justify-center">
            <BotanicalDivider />
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.15} className="mt-16 sm:mt-20">
        <div className="relative mx-auto aspect-[2/3] w-full max-w-lg overflow-hidden sm:max-w-xl">
          <ParallaxImage
            src={invitationImages.babyShowerIntro.src}
            alt={invitationImages.babyShowerIntro.alt}
            className="absolute inset-0"
            strength={30}
            sizes="(min-width: 640px) 42rem, 100vw"
          />
        </div>
      </Reveal>
    </section>
  );
}
