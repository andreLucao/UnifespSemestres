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
  const [excelData, setExcelData] = useState([]);
  const [wasClicked, setBtnClick] = useState(false);
  const [selectedElementId, setSelectedElementId] = useState(null);


  const handleElementClick = (id) => {
    setSelectedElementId(id);
    setBtnClick(true);
    // You can perform any action with the selectedElementId here
    // For example, you could fetch data related to this element
    // or update other parts of your application state
  };

  function buscarDisciplina(disciplina) {
    const diasDaSemana = excelData[0];
    const horarios = excelData[1];
    const docentes = excelData[2];

    const resultados = [];

    for (let i = 0; i < excelData.length; i++) {
      if (horarios[i] === disciplina) {
        const dia = diasDaSemana[i];
        const horario = horarios[i];
        const docente = docentes[i];

        resultados.push({ dia, horario, docente });
      }
    }

    return resultados.length > 0 ? resultados : 'Matéria não encontrada.';
  }



  // only fetching the data after clicking the show data button
  useEffect(() => {
    if (wasClicked) {
      setBtnClick(false);
      fetch('/api/read-excel')
        .then((response) => {
          return response.json();

        })
        .then((data) => {
          setExcelData(data);


        })
        .catch((error) => {
          console.error('Error fetching Excel data:', error); // Step 6: Error handling
        });
    }
  });

  useEffect(() => {
    if (excelData.length > 0 && selectedElementId) {
      let resultado = buscarDisciplina(selectedElementId);
      console.log(resultado);
    }
  }, [excelData, selectedElementId]);


  useEffect(() => {
    if (selectedElementId) {

      // This effect will run whenever selectedElementId changes
      // You can perform any side effects here, such as:
      // - Fetching data related to the selected element
      // - Updating other parts of your application state
      // - Triggering animations
      // - etc.
      console.log(`Selected element ID changed to: ${selectedElementId}`);
    }
  }, [selectedElementId]);

  const checkCourse = (event) => {
    setSelectedCourse(event.target.value);
  };

  const renderComponent = (value) => {
    switch (selectedCourse) {
      case 'ccomp':
        return <CCOMP onElementClick={handleElementClick} />;
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
    </div>);
}
