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
      <button onClick={() => setShowExcelData(!showExcelData)}>
        {showExcelData ? 'Hide Table' : 'Show Table'}
      </button>

      {showExcelData && (
        <div>
          <h1>Excel Data</h1>
          <ul>
            {excelData.map((row, index) => (
              <li key={index}>{JSON.stringify(row)}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="sticky top-0 h-14 z-10 bg-emerald-200 flex justify-center">
        <select id="dropdown" onChange={checkCourse}>
          <option value="Selecione o seu curso">Selecione o seu curso</option>
          <option value="ccomp">ccomp</option>
          <option value="ecomp">ecomp</option>
          <option value="biotec">biotec</option>
          <option value="engbio">engbio</option>
          <option value="matcomp">matcomp</option>
          <option value="engmat">materias</option>
        </select>
        <button id="changeCourseBtn" className="bg-slate-300 h-10 flex justify-end">OK</button>
      </div>
      
      <div className="mt-4">
        {renderComponent()}
      </div>
    </div>
  );
}
