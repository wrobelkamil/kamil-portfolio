import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import styles from '../styles/image-gallery.module.css';

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
    original: "/gallery/1 pr.png",
    thumbnail: "/gallery/1 pr.png",
  },
  {
    original: "/gallery/2 pr.png",
    thumbnail: "/gallery/2 pr.png",
  },
  {
    original: "/gallery/3 pr.png",
    thumbnail: "/gallery/3 pr.png",
  },
  // Add more images here
];

class MyGallery1 extends React.Component {
  render() {
    return (
      <div>
        <h2 className={styles.header}>3D environment design</h2>
        <ImageGallery
          items={images}
        />
      </div>
    );
  }
}

export default MyGallery1;
