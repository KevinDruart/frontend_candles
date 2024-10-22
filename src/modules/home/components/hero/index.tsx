'use client';
import React, { useState, useEffect } from 'react';

const Hero = () => {
  const slides = [
    {
      image: '/path/to/image1.jpg', // Remplacez par le chemin de votre image
      title: 'Bougies Parfumées',
      description: 'Découvrez notre collection de bougies parfumées aux senteurs envoûtantes, parfaites pour créer une ambiance relaxante.',
      link: '#',
    },
    {
      image: '/path/to/image2.jpg', // Remplacez par le chemin de votre image
      title: 'Bougies Artisanales',
      description: 'Nos bougies artisanales sont fabriquées à la main avec des ingrédients de qualité pour une expérience unique.',
      link: '#',
    },
    {
      image: '/path/to/image3.jpg', // Remplacez par le chemin de votre image
      title: 'Bougies Écologiques',
      description: 'Faites un geste pour la planète avec nos bougies écologiques, conçues à partir de matériaux durables.',
      link: '#',
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000); // Change de slide toutes les 5 secondes

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-white bg-opacity-80 flex flex-col items-center justify-center text-center px-6 md:px-12">
            <h1 className="text-4xl md:text-5xl font-light tracking-wide text-[#3b1b00] mb-4">
              {slide.title}
            </h1>
            <p className="text-md md:text-lg text-[#3b1b00] opacity-80 mb-8">
              {slide.description}
            </p>
            <a
              href={slide.link}
              className="inline-block px-8 py-3 bg-[#3b1b00] text-white rounded-full hover:bg-[#f5d6c3] hover:text-[#3b1b00] transition"
            >
              Découvrir
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Hero;
