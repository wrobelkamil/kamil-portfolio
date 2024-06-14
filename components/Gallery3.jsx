import React from 'react';
import styles from '../styles/image-gallery.module.css';
import ImageGallery from 'react-image-gallery';



const images = [
  {
    original: "/gallery3/box-1.png",
    thumbnail: "/gallery3/box-1.png",
  },
  {
    original: "/gallery3/box-2.png",
    thumbnail: "/gallery3/box-2.png",
  },
  {
    original: "/gallery3/box-3.png",
    thumbnail: "/gallery3/box-3.png",
  },
  {
    original: "/gallery3/box-4.png",
    thumbnail: "/gallery3/box-4.png",
  },
  {
    original: "/gallery3/box-5.png",
    thumbnail: "/gallery3/box-5.png",
  }
  // Add more images here
];

class MyGallery1 extends React.Component {
  render() {
    return (
      <div>
        <h2 className={styles.header}>packaging design</h2>
        <ImageGallery
          items={images}
        />
      </div>
    );
  }
  _renderCustomControls() {
    return <a href='' className='image-gallery-custom-action' onClick={this._customAction.bind(this)}/>
  }
}

export default MyGallery1;
