import React, { useState } from "react";

const Carousel3D = () => {
    const cards = [
        {
            id: 1,
            title: "Certificate of Completion",
            img: "https://marketplace.canva.com/EAGTnx__MrY/1/0/1131w/canva-black-gold-modern-workshop-completion-certificate-TLZbgjF3mN0.jpg"
        },
        {
            id: 2,
            title: "Certificate of Completion",
            img: "https://marketplace.canva.com/EAGTnx__MrY/1/0/1131w/canva-black-gold-modern-workshop-completion-certificate-TLZbgjF3mN0.jpg"
        },
        {
            id: 3,
            title: "Certificate of Completion",
            img: "https://marketplace.canva.com/EAGTnx__MrY/1/0/1131w/canva-black-gold-modern-workshop-completion-certificate-TLZbgjF3mN0.jpg"
        },
        {
            id: 4,
            title: "Certificate of Completion",
            img: "https://marketplace.canva.com/EAGTnx__MrY/1/0/1131w/canva-black-gold-modern-workshop-completion-certificate-TLZbgjF3mN0.jpg"
        },
        {
            id: 5,
            title: "Certificate of Completion",
            img: "https://marketplace.canva.com/EAGTnx__MrY/1/0/1131w/canva-black-gold-modern-workshop-completion-certificate-TLZbgjF3mN0.jpg"
        },
    ];

    const [activeIndex, setActiveIndex] = useState(2);

    const nextSlide = () => {
        setActiveIndex((prev) => (prev + 1) % cards.length);
    };

    const prevSlide = () => {
        setActiveIndex((prev) => (prev === 0 ? cards.length - 1 : prev - 1));
    };

    return (
        <div className="relative flex flex-col items-center justify-center w-full  max-h-full overflow-hidden">
            <div className="relative w-full -full flex items-center justify-center perspective-[1400px] h-[74vh]">
                {cards.map((card, index) => {
                    const offset = index - activeIndex;
                    const absOffset = Math.abs(offset);

                    // Base transforms
                    const translateX = offset * 190;
                    const translateZ = -absOffset * 10;
                    const scale = offset === 0 ? 1 : 0.85;

                    // Tilt inward depending on side
                    const rotateY = offset * -30 + (offset > 0 ? 10 : offset < 0 ? -10 : 0);
                    const rotateX = absOffset * 0; // you can experiment with a small backward tilt too
                    return (
                        <div
                            key={card.id}
                            className="absolute w-auto h-full py-6 text-white rounded-2xl sh flex flex-col space-y-5 items-center justify-between text-xl font-bold transition-all duration-700"
                            style={{
                                transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) rotateX(${rotateX}deg) scale(${scale})`,
                                zIndex: 10 - absOffset,
                                opacity: 1 - absOffset * 0.2,
                                filter: `brightness(${1 - absOffset * 0.2})`,
                            }}
                        >
                            {/* Main Image Box */}
                            <div className="relative w-full h-full p-[0.3rem] flex items-center justify-center rounded-lg 
   border border-[#ffb627] bg-yellow-400/5 backdrop-blur-md
    shadow-[inset_0_4px_15px_rgba(255,182,39,0.35)]
    before:content-[''] before:absolute before:inset-0 before:rounded-lg before:border before:border-[#ffc27b] 
    before:shadow-[0_0_0px_orangered,0_0_3px_orangered,0_0_10px_#ffb627]
    before:pointer-events-none transition-shadow duration-500">
                                <img
                                    src={card.img}
                                    alt="img"
                                    className="w-full h-full object-cover rounded-lg"
                                    style={{
                                        filter: "sepia(70%) saturate(310%) hue-rotate(3deg) brightness(78%)"
                                    }}
                                />
                                {/* Optional glowing overlay effect */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-yellow-400/10 via-transparent to-yellow-500/5 rounded-lg mix-blend-overlay pointer-events-none"></div>
                            </div>


                            {/* Title Box */}
                            <div className="relative w-full text-center rounded-lg border border-[#ffb627] bg-transparent backdrop-blur-md 
    before:absolute before:inset-0 before:rounded-lg before:border before:border-[#ffc27b] before:shadow-[0_0_5px_#ffb627,0_0_3px_orangered,0_0_5px_#ffb627] 
    before:pointer-events-none shadow-[inset_0_4px_15px_rgba(255,182,39,0.25)] p-3">

                                <h3 className="text-center text-lg font-semibold text-[#FFB627] tracking-wide relative z-10 
      drop-shadow-[0_0_5px_#ffb627]">
                                    {card.title}
                                </h3>
                            </div>

                        </div>
                    );
                })}
            </div>

            {/* Navigation */}
            <div className="flex gap-6 mt-16">
                <button
                    onClick={prevSlide}
                    className="px-4 py-2 border border-ember-neon bg-yellow-400/10 backdrop-blur-md  text-white rounded-lg hover:shadow-[inset_0_4px_12px_rgba(251,191,36,0.25)]"
                >
                    Prev
                </button>
                <button
                    onClick={nextSlide}
                    className="px-4 py-2 rounded-lg border border-ember-neon bg-yellow-400/10 backdrop-blur-md  text-white hover:shadow-[inset_0_4px_12px_rgba(251,191,36,0.25)]"
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default Carousel3D;
