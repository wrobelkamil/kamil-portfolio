import React from 'react';
import styles from '../styles/image-gallery.module.css';
import ImageGallery from 'react-image-gallery';



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
        <h2 className={styles.header}>brand visual identity</h2>
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
