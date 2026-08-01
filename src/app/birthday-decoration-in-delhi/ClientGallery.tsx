'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface GalleryImage {
  src: string;
  alt: string;
  title: string;
}

interface ClientGalleryProps {
  images: GalleryImage[];
}

export default function ClientGallery({ images }: ClientGalleryProps) {
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  const showNextImage = () => {
    setActiveImageIndex(prev => (prev === null ? null : (prev + 1) % images.length));
  };

  const showPrevImage = () => {
    setActiveImageIndex(prev => (prev === null ? null : (prev - 1 + images.length) % images.length));
  };

  const closeLightbox = () => {
    setActiveImageIndex(null);
  };

  useEffect(() => {
    if (activeImageIndex === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') showNextImage();
      else if (e.key === 'ArrowLeft') showPrevImage();
      else if (e.key === 'Escape') closeLightbox();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeImageIndex, images.length]);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 not-prose">
        {images.map((img, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => setActiveImageIndex(idx)}
            className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#ff5722] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 group cursor-zoom-in"
            aria-label={`Open lightbox for ${img.alt}`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              title={img.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              loading="lazy"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </button>
        ))}
      </div>

      {activeImageIndex !== null && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex flex-col justify-center items-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Image gallery lightbox"
        >
          <button type="button" onClick={closeLightbox} className="absolute top-6 right-6 text-white hover:text-[#ff5722] p-2 focus:outline-none focus:ring-2 focus:ring-[#ff5722] rounded-full transition-colors text-3xl font-bold z-10" aria-label="Close lightbox">✕</button>
          <button type="button" onClick={showPrevImage} className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-[#ff5722] p-3 focus:outline-none focus:ring-2 focus:ring-[#ff5722] rounded-full transition-colors text-3xl md:text-5xl font-bold z-10" aria-label="Previous image">‹</button>
          
          <div className="relative max-w-5xl max-h-[85vh] w-full h-full flex items-center justify-center">
            <Image 
              src={images[activeImageIndex].src} 
              alt={images[activeImageIndex].alt} 
              title={images[activeImageIndex].title} 
              width={1200} 
              height={900} 
              loading="lazy" 
              className="object-contain max-h-[80vh] w-auto h-auto rounded-lg" 
            />
          </div>

          <div className="text-white text-center mt-4 max-w-2xl px-4 z-10">
            <p className="text-base sm:text-lg font-medium">{images[activeImageIndex].alt}</p>
            <p className="text-xs sm:text-sm text-gray-400 mt-1">Image {activeImageIndex + 1} of {images.length}</p>
          </div>

          <button type="button" onClick={showNextImage} className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-[#ff5722] p-3 focus:outline-none focus:ring-2 focus:ring-[#ff5722] rounded-full transition-colors text-3xl md:text-5xl font-bold z-10" aria-label="Next image">›</button>
        </div>
      )}
    </>
  );
}
