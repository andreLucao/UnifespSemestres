'use client';


import React, { useState, useEffect } from "react";
import CCOMP from "./CCOMP";
import BIOTEC from "./BIOTEC";
import MATCOMP from "./MATCOMP";
import ENGMAT from "./ENGMAT";
import ENGBIO from "./ENGBIO";
import ECOMP from "./ECOMP";

export default function Controller() {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [showExcelData, setShowExcelData] = useState(false);
  const [excelData, setExcelData] = useState([]);

  // Fetch the excel data when `showExcelData` is set to true
  useEffect(() => {
    if (showExcelData) {
      console.log('Fetching Excel data...'); // Step 1: Fetch initiated
  
      fetch('/api/read-excel')
        .then((response) => {
          console.log(response.json)
          return response.json();
          
        })
        .then((data) => {
          console.log('Data parsed:', data); // Step 3: Data parsed
          setExcelData(data); // Step 4: State updated
          console.log('Excel data set in state.'); // Step 5: Confirm state update
        })
        .catch((error) => {
          console.error('Error fetching Excel data:', error); // Step 6: Error handling
        });
    }
  }, [showExcelData]);
  

  const checkCourse = (event) => {
    setSelectedCourse(event.target.value);
  };

  const renderComponent = (value) => {
    switch (selectedCourse) {
      case 'ccomp':
        return <CCOMP />;
      case 'ecomp':
        return <ECOMP />;
      case 'biotec':
        return <BIOTEC />;
      case 'engbio':
        return <ENGBIO />;
      case 'matcomp':
        return <MATCOMP />;
      case 'engmat':
        return <ENGMAT />;
      default:
        return 'Escolha um curso!';
    }
  };

  return (
    <div>
      <button 
        onClick={() => setShowExcelData(!showExcelData)} 
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
      >
        {showExcelData ? 'Hide Table' : 'Show Table'}
      </button>

      {showExcelData && (
        <div className="mb-8">
          <h1 className="text-2xl font-bold mb-4">Excel Data</h1>
          <ul className="list-disc pl-5">
            {excelData.map((row, index) => (
              <li key={index} className="mb-2">{JSON.stringify(row)}</li>
            ))}
          </ul>
        </div>
      )}

<header className="sticky top-0 z-10 bg-green-700 text-white shadow-md">
  <div className="container mx-auto px-4 py-3">
    <div className="flex flex-col items-center mb-4">
      <div className="flex items-center w-full justify-center mb-2 relative">
        <img src="/public/logo.webp" alt="Logo" className="w-10 h-10 absolute left-0" />
        <h1 className="text-xl font-bold">NOME DO SITE</h1>
      </div>
      <div className="flex justify-between w-full">
        <div className="w-24"></div> {/* Spacer */}
        <h1 className="text-lg font-semibold">SOBRE NOS</h1>
      </div>
    </div>

    <div className="flex items-center justify-center space-x-4">
      <select 
        id="dropdown" 
        onChange={checkCourse} 
        className="bg-green-700 border border-green-500 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
      >
        <option value="Selecione o seu curso">Selecione o seu curso</option>
        <option value="ccomp">ccomp</option>
        <option value="ecomp">ecomp</option>
        <option value="biotec">biotec</option>
        <option value="engbio">engbio</option>
        <option value="matcomp">matcomp</option>
        <option value="engmat">materias</option>
      </select>
      
      <select className="bg-green-700 border border-green-500 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400">
        <option>Selecione o semestre</option>
      </select>
      
      <button 
        id="changeCourseBtn" 
        className="bg-white text-green-700 px-4 py-2 rounded font-semibold hover:bg-green-100 transition-colors"
      >
        OK
      </button>
    </div>
  </div>
</header>


      
      <div className="mt-4">
        {renderComponent()}
      </div>
    </div>  );
}
