'use client';

import React, {useState} from "react";
import CCOMP from "./CCOMP"


export default function Controller() {

  const [selectedCourse, setSelectedCourse] = useState(null);

  const checkCourse = (event) => {
    setSelectedCourse(event.target.value);
  };

  function renderComponent(value) {

    //change the returns values
    switch (selectedCourse) {
      case 'ccomp':
        return <CCOMP />
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
  }


  return (
    <div>
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
