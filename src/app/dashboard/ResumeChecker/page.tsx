"use client";
// src/FileUpload.tsx

import React, { ChangeEvent, useState } from 'react';
import { storage } from '../../../../firebase/firebase';
import { ref, uploadBytes } from 'firebase/storage';

const FileUpload = () => {
  const [file, setFile] = useState<File | null>(null);

  const onFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      setFile(files[0]);
    }
  };

  const onUpload = async () => {
    if (file) {
      const storageRef = ref(storage, `resumes/${file.name}`);
      await uploadBytes(storageRef, file);
      alert('Resume uploaded successfully!');
      // Here you would also call a function to convert the PDF to JSON
    }
  };

  return (
    <div>
      <input type="file" onChange={onFileChange} />
      <button onClick={onUpload}>Upload Resume</button>
    </div>
  );
};

export default FileUpload;
