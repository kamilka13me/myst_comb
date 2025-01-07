'use client';
import { motion } from 'framer-motion';

const images = ['/projector.png', '/projector.png', '/projector.png'];

export default function Carousel() {
  return (
    <div className="relative flex w-full justify-between">
      {images.map((src, index) => (
        <motion.img
          key={index}
          src={src}
          alt={`Slide ${index}`}
          className="absolute object-cover"
          initial={{ x: '-100vw' }}
          animate={{ x: '100vw' }}
          transition={{
            duration: 5, // Тривалість руху одного зображення
            ease: 'linear',
            repeat: Infinity,
            repeatType: 'loop',
            delay: index * 1.5, // Відтермінування для кожного зображення
          }}
        />
      ))}
    </div>
  );
}
