import { invitationImages } from "@/data/images";
import { welcome } from "@/data/invitation";
import { ParallaxImage } from "../ui/ParallaxImage";
import { Reveal } from "../ui/Reveal";

export function Welcome() {
  return (
    <section className="relative flex min-h-[85vh] w-full items-center overflow-hidden bg-brown sm:min-h-screen">
      <ParallaxImage
        src={invitationImages.welcome.src}
        alt={invitationImages.welcome.alt}
        className="absolute inset-0"  
        strength={34}
        scrim="full"
        sizes="100vw"
      />

      <div className="text-shadow-soft relative z-10 mx-auto flex w-full max-w-2xl flex-col items-center px-4 pt-2 text-center sm:px-6 sm:pt-2">
        <Reveal x={2} y={2} duration={0.9}>
          <h2 className="mx-auto max-w-[11ch] -translate-y-4 font-display text-[clamp(3rem,8vw,7rem)] leading-[0.68] tracking-[-0.05em] text-ivory sm:leading-[0.78] md:text-[6.2rem]">
            {welcome.lines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h2>
        </Reveal>
      </div>
    </section>
  );
}
