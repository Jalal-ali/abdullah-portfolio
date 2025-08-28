'use client';

import React from 'react';
import Link from 'next/link';
import {
  Github,
  Home,
  Linkedin,
  Notebook,
  Palette,
  Phone,
  User,
  Briefcase,
} from 'lucide-react';

const getIcon = (icon) => {
  switch (icon) {
    case 'about':
      return <User className="h-auto w-full md:w-[2.5rem] lg:w-[2rem]" strokeWidth={1.5} />;
    case 'projects':
      return <Palette className="h-auto w-full md:w-[2.5rem] lg:w-[2rem]" strokeWidth={1.5} />;
    case 'qualifications':
      return <Briefcase className="h-auto w-full md:w-[2.5rem] lg:w-[2rem]" strokeWidth={1.5} />;
    case 'contact':
      return <Phone className="h-auto w-full md:w-[2.5rem] lg:w-[2rem]" strokeWidth={1.5} />;
    case 'github':
      return <Github className="h-auto w-full md:w-[2.5rem] lg:w-[2rem]" strokeWidth={1.5} />;
    case 'linkedin':
      return <Linkedin className="h-auto w-full md:w-[2.5rem] lg:w-[2rem]" strokeWidth={1.5} />;
    case 'resume':
      return <Notebook className="h-auto w-full md:w-[2.5rem] lg:w-[2rem]" strokeWidth={1.5} />;
    default:
      return <Home className="h-auto w-full md:w-[2.5rem] lg:w-[2rem]" strokeWidth={1.5} />;
  }
};

const NavButton = ({ x, y, label, link, icon, newTab }) => {
  return (
    <div
      className="absolute z-50 cursor-pointer mx-auto"
      style={{ transform: `translate(${x}px, ${y}px)` }}
    >
     <Link
  href={link}
  target={newTab ? "_blank" : "_self"}
  aria-label={label}
  name={label}
  className="group custom-bg flex items-center justify-center rounded-full text-foreground transition-colors duration-300 bg-ember-neon/20"
>
  <span className="relative flex flex-col items-center h-14 md:h-[4.5rem] lg:h-[4rem] w-14 md:w-[4.5rem] lg:w-[4rem] p-4 text-ember-neon">
    {/* Icon */}
    <span className="text-lg text-ember-neon shadow-lg">
      {getIcon(icon)}
    </span>

    <span className="peer absolute left-0 top-0 h-full w-full bg-transparent" />

    {/* Label (hidden until hover) */}
    <span className="mt-4 rounded-md px-2 py-1 text-sm md:text-md text-ember-neon shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      {label}
    </span>
  </span>
</Link>

    </div>
  );
};

export default NavButton;
