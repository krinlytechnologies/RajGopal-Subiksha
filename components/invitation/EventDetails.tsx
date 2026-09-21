import { invitationImages } from "@/data/images";
import { eventDetails, eventDetailsSection } from "@/data/invitation";
import { ParallaxImage } from "../ui/ParallaxImage";
import { Reveal, RevealGroup, RevealItem } from "../ui/Reveal";
import { BotanicalDivider } from "../ui/BotanicalDivider";
import { ArrowRightIcon } from "../ui/Icon";

export function EventDetails() {
  return (
    <section id="details" className="bg-ivory">
      <div className="relative mx-auto aspect-[2/3] w-full max-w-2xl overflow-hidden sm:aspect-[3/4] lg:aspect-[16/10] lg:max-w-6xl">
        <ParallaxImage
          src={invitationImages.eventDetails.src}
          alt={invitationImages.eventDetails.alt}
          className="absolute inset-0"
          strength={20}
          scrim="none"
          sizes="100vw"
        />
        {/* Soft paper-toned glow: keeps the dark text readable regardless of the
            dappled leaf shadows the photo casts across the archway wall. */}
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_65%_55%_at_50%_50%,rgba(249,242,230,0.65),rgba(249,242,230,0)_72%)]"
          aria-hidden="true"
        />

        <div className="absolute inset-0 flex items-center justify-center px-6">
          <RevealGroup className="flex max-w-sm flex-col items-center text-center" stagger={0.12}>
            <RevealItem as="p" className="font-display text-sm uppercase tracking-[0.35em] text-brown/80">
              {eventDetailsSection.eyebrow}
            </RevealItem>

            <RevealItem as="div" className="mt-6">
              <BotanicalDivider />
            </RevealItem>

            <RevealItem as="p" className="mt-7 font-display text-lg italic text-brown-soft">
              {eventDetails.day}
            </RevealItem>
            <RevealItem as="h2" className="mt-1 font-display text-4xl text-brown sm:text-5xl">
              {eventDetails.date}
            </RevealItem>

            <RevealItem as="p" className="mt-4 font-body text-sm uppercase tracking-[0.25em] text-brown-soft sm:text-base">
              {eventDetails.time}
            </RevealItem>

            <RevealItem as="p" className="mt-6 font-display text-xl text-brown sm:text-2xl">
              {eventDetails.venue}
            </RevealItem>

            <RevealItem as="div" className="mt-8">
              <a
                href={eventDetails.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring group inline-flex items-center gap-2 border-b border-brown/40 pb-1 font-body text-xs uppercase tracking-[0.25em] text-brown transition-colors hover:border-terracotta hover:text-terracotta"
              >
                {eventDetailsSection.ctaLabel}
                <ArrowRightIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </a>
            </RevealItem>
          </RevealGroup>
        </div>
      </div>

      <div className="mx-auto max-w-2xl px-5 py-20 sm:px-8 sm:py-24">
        <div className="grid grid-cols-1 divide-y divide-brown/10 sm:grid-cols-2 sm:divide-x sm:divide-y-0">
          {eventDetailsSection.notes.map((note, i) => (
            <Reveal
              key={note.label}
              delay={i * 0.1}
              className="px-4 py-8 text-center first:pt-0 sm:py-0"
            >
              <p className="font-display text-lg italic text-brown sm:text-xl">
                {note.label}
              </p>
              <p className="mt-2 font-body text-sm uppercase tracking-[0.15em] text-brown-soft">
                {note.value}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
