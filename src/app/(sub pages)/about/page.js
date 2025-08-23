import Image from "next/image";
import bg from "../../../../public/background/projects-background.png";
import AboutDetails from "@/components/about";

export default function About() {
  return (
    <main>
      <Image
        priority
        sizes="100vw"
        src={bg}
        alt="background-image"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-50"
      />

      {/* <div className="relative w-full h-screen flex flex-col items-center justify-center">
        <div className="absolute flex flex-col items-center text-center top-[60%] left-1/2 -translate-y-1/2 -translate-x-1/2">
          <h1 className="font-bold text-9xl text-accent">Muhammad Abdullah</h1>
          <p className="font-light text-foreground text-ls">
            Meet the wizard behind this portfolio
          </p>
        </div>
      </div> */}
      {/* HEADLINE */}
        <div className="z-50 pt-8 text-center">
          <h1
            className="text-transparent text-[3rem] font-extrabold uppercase leading-tight md:text-[3.5rem] text-glow-stroke-neon"
            style={{
              // textShadow: "0 0 10px #fcf699, 0 0 20px #fcf699, 0 0 40px #fcf699"
            }}
          >
            Muhammad Abdullah
          </h1>
          <h2 className="text-amethyst-neon mt-1 text-[1rem] font-semibold uppercase leading-snug md:text-[1.6rem]">
            Software Developer
          </h2>
        </div>

      <AboutDetails />
    </main>
  );
}
