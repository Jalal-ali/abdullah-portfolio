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
        <div className="relative flex flex-col items-center justify-center w-full h-[90vh] max-h-full overflow-hidden">
            <div className="relative w-full h-full flex items-center justify-center perspective-[1400px]">
                {cards.map((card, index) => {
                    const offset = index - activeIndex;
                    const absOffset = Math.abs(offset);
                    // rotation + depth look
                    const rotateY = offset * -30; // left/right tilt
                    const translateX = offset * 190; // horizontal placement
                    const translateZ = -absOffset * 10; // depth
                    const scale = offset === 0 ? 1 : 0.85; // center bigger

                    // NEW: tilt backward (like they're facing the center)
                    const rotateX = absOffset * 0; // adjust value (-5 to -15 looks good)

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
                            <div className="relative w-full h-full p-2 flex items-center justify-center rounded-lg border border-ember-neon bg-yellow-400/5 overflow-hidden backdrop-blur-md 
     shadow-[inset_0_4px_12px_rgba(251,191,36,0.35)] 
    before:absolute before:inset-0 before:rounded-lg before:border-2 before:border-yellow-400 before:shadow-[0_0_20px_6px_rgba(251,191,36,0.6)] before:pointer-events-none transition-shadow duration-500">
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
                            <div className="relative w-full text-center rounded-lg border border-ember-neon bg-yellow-400/10 backdrop-blur-md shadow-[inset_0_4px_12px_rgba(251,191,36,0.25)] 
    before:absolute before:inset-0 before:rounded-lg before:border before:border-yellow-400 before:shadow-[0_0_4px_5px_rgba(251,191,36,0.5)] before:pointer-events-none p-3">
                                <h3 className="text-center font-semibold text-[#FFB627] tracking-wide drop-shadow-md relative z-10">
                                    {card.title}
                                </h3>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Navigation */}
            <div className="flex gap-6 mt-6">
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
