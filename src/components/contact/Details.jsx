'use client';
import React from 'react';
import { motion } from 'framer-motion';

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3,
            delayChildren: 0.2,
        },
    },
};

const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
};

export default function Details() {
    return (
        <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="flex w-full custom-bg-2 border border-amethyst-neon p-12 rounded-lg max-w-md flex-col space-y-6"
        >
            <motion.div variants={item} className="w-full">
                <h3 className="text-lg font-semibold text-amethyst-neon">Phone</h3>
                <p className="text-foreground">+1 234 567 890</p>
            </motion.div>

            <motion.div variants={item} className="w-full">
                <h3 className="text-lg font-semibold text-amethyst-neon">Email</h3>
                <p className="text-foreground">your.email@example.com</p>
            </motion.div>

            <motion.div variants={item} className="w-full">
                <h3 className="text-lg font-semibold text-amethyst-neon">About Me</h3>
                <p className="text-foreground leading-relaxed">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quibusdam maiores praesentium velit quis ratione quam nihil, magni aliquid architecto, fuga pariatur? Eius necessitatibus minus nobis ad pariatur facere dignissimos?
                </p>
            </motion.div>
        </motion.div>
    );
}
