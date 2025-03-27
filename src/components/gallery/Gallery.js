import ImageGallery from 'react-image-gallery';
import { images } from './data/gallery-image';
import './styles/index.css';

function Gallery() {
  return (
    <div className="app">
      <div className="image-gallery-wrapper">
        <ImageGallery items={images} />
      </div>
    </div>
  );
}

export default Gallery;