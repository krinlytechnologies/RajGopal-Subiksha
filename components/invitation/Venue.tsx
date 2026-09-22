import { invitationImages } from "@/data/images";
import { venue } from "@/data/invitation";
import { ParallaxImage } from "../ui/ParallaxImage";
import { Reveal } from "../ui/Reveal";
import { BotanicalDivider } from "../ui/BotanicalDivider";

export function Venue() {
  return (
    <section className="relative flex min-h-[75vh] w-full items-center overflow-hidden bg-brown sm:min-h-[88vh]">
      <ParallaxImage
        src={invitationImages.venue.src}
        alt={invitationImages.venue.alt}
        className="absolute inset-0"
        strength={26}
        scrim="none"
        sizes="100vw"
      />
      {/* Center-weighted vignette: keeps the heading legible wherever it sits
          while leaving the palms, lanterns and aisle at the edges untouched. */}
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_65%_50%_at_50%_50%,rgba(58,42,31,0.55),rgba(58,42,31,0)_72%)]"
        aria-hidden="true"
      />

      <div className="text-shadow-soft relative z-10 mx-auto w-full max-w-3xl px-6 text-center">
        <Reveal>
          <h2 className="font-display text-4xl leading-[1.2] text-ivory sm:text-5xl md:text-6xl">
            {venue.lines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h2>
          <div className="mt-8 flex justify-center">
            <BotanicalDivider tone="ivory" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
