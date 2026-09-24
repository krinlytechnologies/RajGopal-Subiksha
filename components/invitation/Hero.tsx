import { invitationImages } from "@/data/images";
import { hero } from "@/data/invitation";
import { ParallaxImage } from "../ui/ParallaxImage";
import { Reveal } from "../ui/Reveal";
import { ChevronDownIcon } from "../ui/Icon";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex h-[100svh] min-h-[640px] w-full items-end overflow-hidden bg-brown"
    >
      <ParallaxImage
        src={invitationImages.hero.src}
        alt={invitationImages.hero.alt}
        className="absolute inset-0"
        priority
        strength={26}
        scrim="none"
        sizes="100vw"
      />
      {/* Vignette scrim: keeps the bottom-anchored, left-aligned headline
          legible regardless of what the photo shows at that spot. */}
      <div
        className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(58,42,31,0.6)_0%,rgba(58,42,31,0.18)_26%,rgba(58,42,31,0)_42%,rgba(58,42,31,0)_58%,rgba(58,42,31,0.35)_75%,rgba(58,42,31,0.78)_100%),linear-gradient(to_right,rgba(58,42,31,0.55),rgba(58,42,31,0.05)_60%)]"
        aria-hidden="true"
      />

      <div className="text-shadow-soft relative z-10 flex w-full flex-1 flex-col justify-between px-5 pb-10 pt-32 sm:px-10 sm:pb-14 sm:pt-40">
        <Reveal
          as="h1"
          y={28}
          duration={0.9}
          className="max-w-none whitespace-nowrap font-display text-[2.15rem] leading-[1.05] text-ivory sm:text-[3rem] md:text-[4rem]"
        >
          {hero.names}
        </Reveal>

        <Reveal delay={0.3} className="mt-14 flex items-center gap-3 self-center sm:self-start">
          <span className="font-body text-xs uppercase tracking-[0.3em] text-ivory/75">
            {hero.scrollCue}
          </span>
          <ChevronDownIcon className="h-4 w-4 animate-drift text-ivory/75 motion-reduce:animate-none" />
        </Reveal>
      </div>
    </section>
  );
}
