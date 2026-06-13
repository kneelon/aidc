'use client';

import { useState } from 'react';
import Image from 'next/image';

const Portfolio = () => {
  // Creating an array for the 21 portfolio images
  const images = Array.from({ length: 21 }, (_, i) => `${i + 1}.webp`);

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-primary font-bold text-lg tracking-wider uppercase mb-2">Our Portfolio</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
            Showcasing Our Work
          </h3>
          <div className="w-20 h-1.5 bg-secondary mx-auto mt-4 rounded-full"></div>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            Take a look at some of our completed projects for subdivisions and electric corporations across the region.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((img, index) => (
            <div
              key={index}
              className="relative aspect-square overflow-hidden rounded-xl cursor-pointer group"
              onClick={() => setSelectedImage(img)}
            >
              <Image
                src={`/assets/${img}`}
                alt={`AIDC Project ${index + 1}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white font-bold border-2 border-white px-4 py-2 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform">
                  View Project
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox placeholder/simple implementation */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative w-full max-w-4xl max-h-[80vh] aspect-square">
            <Image
              src={`/assets/${selectedImage}`}
              alt="Project detail"
              fill
              className="object-contain"
            />
            <button
              className="absolute top-4 right-4 text-white text-4xl hover:text-secondary"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
