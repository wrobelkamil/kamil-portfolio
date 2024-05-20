import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

const Gallery = () => {
  const images = [
    {
      original: "/gallery/1.png",
      thumbnail: "/gallery/1.png",
    },
    {
      original: "/gallery/2.png",
      thumbnail: "/gallery/2.png",
    },
    {
      original: "/gallery/3.png",
      thumbnail: "/gallery/3.png",
    },
    {
      original: "/gallery/4.png",
      thumbnail: "/gallery/4.png",
    },
    {
      original: "/gallery/5.png",
      thumbnail: "/gallery/5.png",
    },
    // Dodaj więcej zdjęć tutaj
  ];

  return <ImageGallery items={images} />;
};

export default Gallery;
