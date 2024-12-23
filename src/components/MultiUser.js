import React, { useState } from 'react';
import * as XLSX from 'xlsx';
import { db } from '../firebase'; 
import { collection, doc, writeBatch } from 'firebase/firestore';

const EmployeeSearchWithUpload = () => {
  const [file, setFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      alert("Please select a file first");
      return;
    }

    const reader = new FileReader();
    reader.onload = async (event) => {
      const data = new Uint8Array(event.target.result);
      const workbook = XLSX.read(data, { type: 'array' });
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      const jsonData = XLSX.utils.sheet_to_json(worksheet);

      try {
        const batch = writeBatch(db);
        const collectionRef = collection(db, 'Emp_info'); 

        jsonData.forEach((row) => {
          const docRef = doc(collectionRef);
          batch.set(docRef, row);
        });

        await batch.commit();
        setUploadStatus('File uploaded successfully');
      } catch (error) {
        console.error("Error uploading file:", error);
        setUploadStatus(`Error uploading file: ${error.message}`);
      }
    };
    reader.readAsArrayBuffer(file);
  };

  return (
    <div className="container mx-auto mt-5 md:ml-16">
      {/* File Upload Section */}
      <div className="bg-white p-4 shadow-md rounded-lg max-w-md mx-auto">
        <h3 className="text-2xl font-bold mb-4 text-center">Upload Excel File</h3>
        <input
          type="file"
          accept=".xlsx, .xls"
          onChange={handleFileChange}
          className="mb-4"
        />
        <button
          onClick={handleUpload}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full focus:outline-none focus:shadow-outline"
        >
          Upload
        </button>
        {uploadStatus && <p className="mt-2 text-green-600">{uploadStatus}</p>}
      </div>
    </div>
  );
};

export default EmployeeSearchWithUpload;
