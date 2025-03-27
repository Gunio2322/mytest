import React, { useEffect, useState } from 'react';
import Uppy from '@uppy/core';
import Webcam from '@uppy/webcam';
import { Dashboard } from '@uppy/react';
import { ProgressBar } from '@uppy/react';
import XHRUpload from '@uppy/xhr-upload';
import '@uppy/core/dist/style.css';


import '@uppy/core/dist/style.min.css';
import '@uppy/dashboard/dist/style.min.css';
import '@uppy/webcam/dist/style.min.css';

export default function UppyApp() {
	// IMPORTANT: passing an initializer function to prevent Uppy from being reinstantiated on every render.
	const [uppy] = useState(() => new Uppy().use(XHRUpload, {
		endpoint: 'http://localhost:3001/public',

		formData: true,
		fieldName: 'image',
		
	}));

	return (
		<>
			 <Dashboard uppy={uppy} />
			 {/* <ProgressBar uppy={uppy} />  */}
		</>

	)
}