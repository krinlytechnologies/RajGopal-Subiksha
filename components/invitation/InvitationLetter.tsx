import { invitationImages } from "@/data/images";
import { ParallaxImage } from "../ui/ParallaxImage";
import { Reveal } from "../ui/Reveal";
import { BotanicalDivider } from "../ui/BotanicalDivider";

export function InvitationLetter() {
  return (
    <section className="bg-ivory">
      <div className="mx-auto max-w-4xl px-5 py-24 text-center sm:px-8 sm:py-32">
        <Reveal>
          <div className="relative mx-auto aspect-[2/3] w-full max-w-md overflow-hidden rounded-sm shadow-[0_30px_60px_-25px_rgba(58,42,31,0.45)] sm:max-w-lg">
            <ParallaxImage
              src={invitationImages.invitationLetter.src}
              alt={invitationImages.invitationLetter.alt}
              className="absolute inset-0"
              strength={24}
              sizes="(min-width: 640px) 32rem, 90vw"
            />
          </div>
        </Reveal>

        <Reveal delay={0.15} className="mt-10 flex justify-center">
          <BotanicalDivider />
        </Reveal>
      </div>
    </section>
  );
}
