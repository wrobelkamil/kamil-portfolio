import React from 'react';
import styles from '../styles/image-gallery.module.css';
import ImageGallery from 'react-image-gallery';



const images = [
  {
    original: "/gallery4/clo-1.png",
    thumbnail: "/gallery4/clo-1.png",
  },
  {
    original: "/gallery4/clo-2.png",
    thumbnail: "/gallery4/clo-2.png",
  },
  {
    original: "/gallery4/clo-3.png",
    thumbnail: "/gallery4/clo-3.png",
  }
  // Add more images here
];

class MyGallery1 extends React.Component {
  render() {
    return (
      <div>
        <h2 className={styles.header}>clothes design</h2>
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
