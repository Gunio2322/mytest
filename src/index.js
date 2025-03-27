import React from 'react';
import ReactDOM from 'react-dom/client';

import UppyApp from './components/uppy/UppyApp';
import Gallery from './components/gallery/Gallery';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UppyApp />
    <Gallery />
  </React.StrictMode>
);