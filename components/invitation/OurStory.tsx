import { invitationImages } from "@/data/images";
import { ourStory } from "@/data/invitation";
import { ParallaxImage } from "../ui/ParallaxImage";
import { Reveal } from "../ui/Reveal";
import { BotanicalDivider } from "../ui/BotanicalDivider";

export function OurStory() {
  return (
    <section id="our-story" className="relative overflow-hidden bg-ivory py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="lg:grid lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <Reveal className="relative aspect-[3/4] w-full overflow-hidden rounded-t-[9rem] shadow-[0_40px_80px_-28px_rgba(58,42,31,0.45)] lg:aspect-[4/5] lg:h-[42rem] lg:rounded-t-[13rem]">
            <ParallaxImage
              src={invitationImages.ourStory.src}
              alt={invitationImages.ourStory.alt}
              className="absolute inset-0 h-full w-full"
              strength={30}
              sizes="(min-width: 1024px) 55vw, 100vw"
            />
          </Reveal>

          <Reveal
            delay={0.15}
            className="relative z-10 mx-auto -mt-16 w-[calc(100%-2.5rem)] max-w-md bg-ivory/95 px-7 py-10 text-center shadow-[0_30px_65px_-28px_rgba(58,42,31,0.4)] sm:px-10 sm:py-12 lg:mx-0 lg:-ml-24 lg:mt-0 lg:w-auto lg:max-w-sm lg:text-left"
          >
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 select-none font-script text-8xl text-terracotta/15 lg:left-10 lg:top-[-2.75rem] lg:translate-x-0"
            >
              &amp;
            </span>
            <p className="relative font-display text-sm uppercase tracking-[0.3em] text-terracotta">
              {ourStory.title}
            </p>
            <h2 className="relative mt-5 font-display text-4xl leading-[1.12] text-brown sm:text-5xl">
              {ourStory.lines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h2>
            <div className="relative mt-7 flex justify-center lg:justify-start">
              <BotanicalDivider />
            </div>
            <div className="relative mt-7 space-y-4 font-body text-base leading-relaxed text-brown-soft">
              {ourStory.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
