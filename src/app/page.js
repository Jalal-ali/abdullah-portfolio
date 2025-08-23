import Image from 'next/image';
import bg from '../../public/background/Homebackground-2.png';
import laptop from '../../public/background/laptop3.png';
import Navigation from '@/components/navigation';
import FullScreenLoader from '@/components/FullScreenLoader';

export default function Home() {
  return (
    <>
      <FullScreenLoader />
      <main className="relative flex min-h-screen overflow-hidden flex-col items-center">
        {/* full-screen, semi-opaque bg image */}
        <Image
          priority
          src={bg}
          alt="background"
          fill
          sizes="100vw"
          className="-z-50 object-cover object-center opacity-100 mx-auto"
        />

        {/* HEADLINE */}
        <div className="z-50 pt-8 text-center">
          <h1
            className="text-transparent text-[2rem] font-extrabold uppercase leading-tight md:text-[3rem] text-glow-stroke-neon"
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
        <div className="relative z-10 flex w-full flex-1 items-center justify-center">
          {/* Wrapper for laptop + rings */}
          <div className="relative flex items-center justify-center">
            {/* Laptop */}
            <Image
              priority
              src={laptop}
              alt="laptop"
              className="
        relative z-20 object-contain animate-float-laptop
        transition-transform duration-300 ease-in-out hover:scale-110
        w-1/2 md:w-[20rem] lg:w-[24rem] mb-12
      "
            />

            {/* glowing borderline under laptop */}
            <div
              className="
        absolute mt-16
        h-[160px] w-[160px] sm:h-[220px] sm:w-[220px] md:h-[300px] md:w-[300px] lg:h-[380px] lg:w-[380px]
        rounded-full border border-ember-neon animate-ripple-neon
      "
              style={{ transform: "perspective(600px) rotateX(80deg)" }}
            />

            <div
              className="
        absolute mt-16
        h-[220px] w-[220px] sm:h-[300px] sm:w-[300px] md:h-[400px] md:w-[400px] lg:h-[500px] lg:w-[500px]
        rounded-full border border-ember-neon animate-ripple-neon
      "
              style={{ transform: "perspective(600px) rotateX(80deg)" }}
            />

            <div
              className="
        absolute mt-16
        h-[320px] w-[320px] sm:h-[480px] sm:w-[480px] md:h-[600px] md:w-[600px] lg:h-[740px] lg:w-[740px]
        rounded-full border border-ember-neon animate-ripple-neon
      "
              style={{ transform: "perspective(600px) rotateX(80deg)" }}
            />
          </div>

          {/* navigation buttons */}
          <Navigation />
        </div>

      </main>
    </>
  );
}
