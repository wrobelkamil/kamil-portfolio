import React from 'react';
import ImageGallery from 'react-image-gallery';
import styles from '../styles/image-gallery.module.css';


const images = [
  {
    original: "/gallery2/1.png",
    thumbnail: "/gallery2/1.png",
  },
  {
    original: "/gallery2/mockup1.png",
    thumbnail: "/gallery2/mockup1.png",
  },
  {
    original: "/gallery2/mockup4.png",
    thumbnail: "/gallery2/mockup4.png",
  },
  {
    original: "/gallery2/mockup3.png",
    thumbnail: "/gallery2/mockup3.png",
  },
  {
    original: "/gallery2/mockup2.png",
    thumbnail: "/gallery2/mockup2.png",
  },
  // Add more images here
];

class MyGallery1 extends React.Component {
  render() {
    return (
      <div>
        <h2 className={styles.header}>AI generated images</h2>
        <ImageGallery
          items={images}
        />
      </div>
    );
  }
}

export default MyGallery1;
