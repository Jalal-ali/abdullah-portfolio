"use client"
import React from 'react'
import Image from "next/image";
import bg from "../../../../public/background/projects-background.png";
import Carousel from '@/components/qualifications/Carousel'

const page = () => {
    return (
        <>
            
               {/* HEADLINE */}
        <div className="z-50 pt-8 text-center">
          <h1
            className="text-transparent text-[2rem] font-extrabold uppercase leading-tight md:text-[3rem] text-glow-stroke-neon"
            style={{
              // textShadow: "0 0 10px #fcf699, 0 0 20px #fcf699, 0 0 40px #fcf699"
            }}
          >
            QUALIFICATION
          </h1>
          <h2 className="text-amethyst-neon mt-1 text-[1rem] font-semibold  leading-snug md:text-[1.6rem]">
            -accomplishments-
          </h2>
        </div>
                <Image
                    priority
                    sizes="100vw"
                    src={bg}
                    alt="background-image"
                    className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-30 blur-[2px] bg-black"
                />
                <Carousel />
            
        </>
    )
}

export default page