import { invitationImages } from "@/data/images";
import { dreams } from "@/data/invitation";
import { ParallaxImage } from "../ui/ParallaxImage";
import { Reveal } from "../ui/Reveal";

export function Dreams() {
  return (
    <section className="relative flex min-h-[70vh] w-full items-center overflow-hidden bg-brown sm:min-h-[85vh]">
      <ParallaxImage
        src={invitationImages.dreams.src}
        alt={invitationImages.dreams.alt}
        className="absolute inset-0"
        strength={30}
        scrim="bottom"
        sizes="100vw"
      />

      <div className="text-shadow-soft relative z-10 mx-auto w-full max-w-3xl px-6 py-20 text-center sm:py-28">
        <Reveal duration={1}>
          <p className="font-display text-3xl italic leading-relaxed text-ivory sm:text-4xl md:text-5xl">
            {dreams.lines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
