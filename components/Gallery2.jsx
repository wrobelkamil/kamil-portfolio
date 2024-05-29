import React from 'react';
import ImageGallery from 'react-image-gallery';
import styles from '../styles/image-gallery.module.css';


const images = [
  {
    original: "/gallery/2.png",
    thumbnail: "/gallery/2.png",
  },
  {
    original: "/gallery/1.png",
    thumbnail: "/gallery/1.png",
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
  // Add more images here
];

class MyGallery1 extends React.Component {
  render() {
    return (
      <div>
        <h2 className={styles.header}>Galeria 2</h2>
        <ImageGallery
          items={images}
        />
      </div>
    );
  }
}

export default MyGallery1;
