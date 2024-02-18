"use client";
import React, { ChangeEvent, useState } from 'react';
import { storage } from '../../../../firebase/firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import {pdfToText} from 'pdf-ts';


import 'pdfjs-dist/web/pdf_viewer.css';

const FileUpload = () => {
  const [file, setFile] = useState<File | null>(null);
  // State to hold the uploaded file URL
  const [fileUrl, setFileUrl] = useState<string | null>(null);

  const onFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      setFile(files[0]);
    }
  };


  const onUpload = async () => {
    if (file) {
      const storageRef = ref(storage, `resumes/${file.name}`);
      await uploadBytes(storageRef, file).then(() => {
        // After the upload, fetch the URL
        getDownloadURL(storageRef)
          .then(async (url) => {
            setFileUrl(url); // Set the file URL in the state
            alert('Resume uploaded successfully!');
            // Convert the PDF to text
            const response = await fetch(url);
            const blob = await response.blob();
            const arrayBuffer = await blob.arrayBuffer();
            const uint8Array = new Uint8Array(arrayBuffer);
            const text = await pdfToText(uint8Array);
            console.log(text);

          })
          .catch((error) => {
            console.error("Error fetching file URL:", error);
            alert('Failed to get file URL.');
          });
      });
    }

  };


  return (
    <div>
      <input type="file" onChange={onFileChange} />
      <button onClick={onUpload}>Upload Resume</button>
      {/* Display the uploaded PDF */}
      {fileUrl && (
        <div>
          <h2>Uploaded Resume</h2>
          {/* Displaying PDF within an iframe; you could also use an object tag */}
          <iframe src={fileUrl} width="600" height="500" title="Resume"></iframe>
        </div>
      )}
    </div>
  );
};


export default FileUpload;
