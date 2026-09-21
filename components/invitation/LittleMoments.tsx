import { invitationImages } from "@/data/images";
import { littleMoments } from "@/data/invitation";
import { ParallaxImage } from "../ui/ParallaxImage";
import { Reveal } from "../ui/Reveal";

export function LittleMoments() {
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-3xl px-5 py-24 text-center sm:px-8 sm:py-32">
        <Reveal>
          <p className="font-script text-4xl text-terracotta sm:text-5xl">
            {littleMoments.title} <span aria-hidden="true">♡</span>
          </p>
        </Reveal>

        <Reveal delay={0.15} className="mt-14 sm:mt-16">
          <div className="relative mx-auto aspect-[2/3] w-full max-w-sm overflow-hidden rounded-sm shadow-[0_25px_50px_-25px_rgba(58,42,31,0.4)]">
            <ParallaxImage
              src={invitationImages.littleMoments.src}
              alt={invitationImages.littleMoments.alt}
              className="absolute inset-0"
              strength={22}
              sizes="(min-width: 640px) 24rem, 90vw"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
