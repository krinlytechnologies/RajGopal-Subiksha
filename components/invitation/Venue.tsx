import { invitationImages } from "@/data/images";
import { venue } from "@/data/invitation";
import { ParallaxImage } from "../ui/ParallaxImage";
import { Reveal } from "../ui/Reveal";
import { BotanicalDivider } from "../ui/BotanicalDivider";

export function Venue() {
  return (
    <section className="relative flex min-h-[75vh] w-full items-start overflow-hidden bg-brown pt-28 sm:min-h-[88vh] sm:pt-36">
      <ParallaxImage
        src={invitationImages.venue.src}
        alt={invitationImages.venue.alt}
        className="absolute inset-0"
        strength={26}
        scrim="none"
        sizes="100vw"
      />
      {/* Top-heavy vignette: keeps the heading legible while leaving the
          arch, lanterns and aisle below it unobstructed. */}
      <div
        className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(58,42,31,0.62)_0%,rgba(58,42,31,0.18)_32%,rgba(58,42,31,0)_55%)]"
        aria-hidden="true"
      />

      <div className="text-shadow-soft relative z-10 mx-auto w-full max-w-2xl px-6 text-center">
        <Reveal>
          <h2 className="font-display text-3xl leading-[1.2] text-ivory sm:text-4xl md:text-5xl">
            {venue.lines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h2>
          <div className="mt-7 flex justify-center">
            <BotanicalDivider tone="ivory" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
