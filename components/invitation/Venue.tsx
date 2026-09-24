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

      <div className="text-shadow-soft relative z-10 mx-auto w-full max-w-3xl px-4 text-center sm:px-6">
        <Reveal x={10} y={26} duration={0.9}>
          <h2 className="mx-auto max-w-[11ch] font-display text-[clamp(2.5rem,8vw,5rem)] leading-[0.96] tracking-[-0.04em] text-ivory sm:leading-[1.08] md:text-6xl">
            {venue.lines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h2>
          <div className="mt-6 flex justify-center sm:mt-8">
            <BotanicalDivider tone="ivory" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
