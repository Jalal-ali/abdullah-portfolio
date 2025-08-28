'use client';

import { BtnList } from '@/app/data';
import NavButton from './NavButton';
import React, { useEffect, useState } from 'react';

const Navigation = () => {
  const angleIncrement = 360 / BtnList.length;

  const [rotation, setRotation] = useState(0);
  const [radius, setRadius] = useState(200); // default desktop
  const [multiplier, setMultiplier] = useState({ x: 2, y: 1.2 });

  // ✅ Resize listener to update values based on screen size
  useEffect(() => {
    const updateSize = () => {
      const width = window.innerWidth;

      if (width < 640) {
        // Mobile
        setRadius(80);
        setMultiplier({ x: 1.6, y: 1.6 });
      } else if (width < 1024) {
        // Tablet
        setRadius(130);
        setMultiplier({ x: 1.8, y: 1.4 });
      } else {
        // Desktop
        setRadius(65);
        setMultiplier({ x: 4, y: 1.9 });
      }
    };

    updateSize(); // run on mount
    window.addEventListener('resize', updateSize);

    return () => window.removeEventListener('resize', updateSize);
  }, []);

  // ✅ Smooth infinite rotation
  useEffect(() => {
    let frame;
    const animate = () => {
      setRotation((prev) => (prev + 0.15) % 360);
      frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div className="fixed flex h-1/2 w-full items-center justify-center mx-auto">
      <div
        className="relative flex w-max items-center justify-center mx-auto"
        style={{
          // transform: 'rotateX(40deg)',
          // transformStyle: 'preserve-3d',
        }}
      >
        {BtnList.map((btn, index) => {
          const angleDeg = index * angleIncrement + rotation;
          const angleRad = (angleDeg * Math.PI) / 180; // ✅ fixed denominator

          const x = radius * Math.cos(angleRad) * multiplier.x;
          const y = radius * Math.sin(angleRad) * multiplier.y;

          return (
            <NavButton
              key={btn.label}
              x={x}
              y={y}
              {...btn}
              style={{
                transform: `translate3d(${x}px, ${y}px, 0)`,
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Navigation;
