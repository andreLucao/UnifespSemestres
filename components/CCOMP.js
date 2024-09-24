'use client';

import React from "react";
import { useState } from "react";

export default function MyComponent() {
  const checkCourse = () => {
    // Define your checkCourse logic here
  };

return (
<div>
<div className="sticky top-0 h-14 z-10 bg-emerald-200 flex justify-center">
    <select id="dropdown" onChange={checkCourse}>
      <option value="0">Selecione o seu curso</option>
      <option value="1">ccomp</option>
      <option value="2">ecomp</option>
      <option value="3">biotec</option>
      <option value="4">engbio</option>
      <option value="5">matcomp</option>
      <option value="6">materias</option>
    </select>
    <button id="changeCourseBtn" className="bg-slate-300 h-10 flex justify-end">OK</button>
  </div>

  
<div className="flex">
  

  <div id='container' className=" relative top-0 h-auto w-36 p-4">
    <p className="pt-0 pl-6">Termo 1</p>
    <p id="termo" className="pt-36 pl-6">Termo 2</p>
    <p className="pt-36 pl-6">Termo 3</p>
    <p className="pt-36 pl-6">Termo 4</p>
    <p className="pt-36 pl-6">Termo 5</p>
    <p className="pt-36 pl-6">Termo 6</p>
    <p className="pt-36 pl-6">Termo 7</p>
    <p className="pt-36 pl-6">Termo 8</p>

  </div>

  <div  className="flex flex-col space-y-28 pl-3 pr-3 flex-1 ">
    <div id='container1' className="flex justify-between">
      <div id="S1-M1" className="bg-emerald-500 h-14 w-36 rounded-full flex items-center justify-center"></div>
      <div id="S1-M2" className="bg-emerald-500 h-14 w-36 rounded-full flex items-center justify-center"></div>
      <div id="S1-M3" className="bg-emerald-500 h-14 w-36 rounded-full flex items-center justify-center"></div>
      <div id="S1-M4" className="bg-emerald-500 h-14 w-36 rounded-full flex items-center justify-center"></div>
      <div id="S1-M5" className="bg-emerald-500 h-14 w-36 rounded-full flex items-center justify-center"></div>
      <div id="S1-M6" className="bg-emerald-500 h-14 w-36 rounded-full flex items-center justify-center"></div>
    </div>  

    <div id='container2' className="flex justify-between">
      <div id="S2-M1" className="bg-emerald-500 h-14 w-36 rounded-full flex items-center justify-center"></div>
      <div id="S2-M2" className="bg-emerald-500 h-14 w-36 rounded-full flex items-center justify-center"></div>
      <div id="S2-M3" className="bg-emerald-500 h-14 w-36 rounded-full flex items-center justify-center"></div>
      <div id="S2-M4" className="bg-emerald-500 h-14 w-36 rounded-full flex items-center justify-center"></div>
      <div id="S2-M5" className="bg-emerald-500 h-14 w-36 rounded-full flex items-center justify-center"></div>
      <div id="S2-M6" className="bg-emerald-500 h-14 w-36 rounded-full flex items-center justify-center"></div>
    </div>

    <div id='container3' className="flex justify-between">
      <div id="S3-M1" className="bg-emerald-500 h-14 w-36 rounded-full flex items-center justify-center"></div>
      <div id="S3-M2" className="bg-emerald-500 h-14 w-36 rounded-full flex items-center justify-center"></div>
      <div id="S3-M3" className="bg-emerald-500 h-14 w-36 rounded-full flex items-center justify-center"></div>
      <div id="S3-M4" className="bg-emerald-500 h-14 w-36 rounded-full flex items-center justify-center"></div>
      <div id="S3-M5" className="bg-emerald-500 h-14 w-36 rounded-full flex items-center justify-center"></div>
      <div id="S3-M6" className="bg-emerald-300 h-14 w-36 rounded-full flex items-center justify-center"></div>
    </div>

    <div id='container4' className="flex justify-between">
      <div id="S4-M1" className="bg-emerald-500 h-14 w-36 rounded-full flex items-center justify-center"></div>
      <div id="S4-M2" className="bg-emerald-500 h-14 w-36 rounded-full flex items-center justify-center"></div>
      <div id="S4-M3" className="bg-emerald-500 h-14 w-36 rounded-full flex items-center justify-center"></div>
      <div id="S4-M4" className="bg-emerald-500 h-14 w-36 rounded-full flex items-center justify-center"></div>
      <div id="S4-M5" className="bg-emerald-500 h-14 w-36 rounded-full flex items-center justify-center"></div>
      <div id="S4-M6" className="bg-emerald-300 h-14 w-36 rounded-full flex items-center justify-center"></div>
    </div>

    <div id='container5' className="flex justify-between">
      <div id="S5-M1" className="bg-emerald-500 h-14 w-36 rounded-full flex items-center justify-center"></div>
      <div id="S5-M2" className="bg-emerald-500 h-14 w-36 rounded-full flex items-center justify-center"></div>
      <div id="S5-M3" className="bg-emerald-500 h-14 w-36 rounded-full flex items-center justify-center"></div>
      <div id="S5-M4" className="bg-emerald-500 h-14 w-36 rounded-full flex items-center justify-center"></div>
      <div id="S5-M5" className="bg-emerald-500 h-14 w-36 rounded-full flex items-center justify-center"></div>
      <div id="S5-M6" className="bg-emerald-300 h-14 w-36 rounded-full flex items-center justify-center"></div>
    </div>

    <div id='container6' className="flex justify-between">
      <div id="S6-M1" className="bg-emerald-500 h-14 w-36 rounded-full flex items-center justify-center"></div>
      <div id="S6-M2" className="bg-emerald-500 h-14 w-36 rounded-full flex items-center justify-center"></div>
      <div id="S6-M3" className="bg-emerald-500 h-14 w-36 rounded-full flex items-center justify-center"></div>
      <div id="S6-M4" className="bg-emerald-500 h-14 w-36 rounded-full flex items-center justify-center"></div>
      <div id="S6-M5" className="bg-emerald-500 h-14 w-36 rounded-full flex items-center justify-center"></div>
      <div id="S6-M6" className="bg-emerald-300 h-14 w-36 rounded-full flex items-center justify-center"></div>
    </div>

    <div id='container7' className="flex justify-between">
      <div id="S7-M1" className="bg-emerald-500 h-14 w-36 rounded-full flex items-center justify-center"></div>
      <div id="S7-M2" className="bg-emerald-500 h-14 w-36 rounded-full flex items-center justify-center"></div>
      <div id="S7-M3" className="bg-emerald-300 h-14 w-36 rounded-full flex items-center justify-center"></div>
      <div id="S7-M4" className="bg-emerald-300 h-14 w-36 rounded-full flex items-center justify-center"></div>
      <div id="S7-M5" className="bg-emerald-300 h-14 w-36 rounded-full flex items-center justify-center"></div>
      <div id="S7-M6" className="bg-emerald-300 h-14 w-36 rounded-full flex items-center justify-center"></div>
    </div>

    <div id='container8' className="flex justify-between">
      <div id="S8-M1" className="bg-emerald-500 h-14 w-36 rounded-full flex items-center justify-center"></div>
      <div id="S8-M2" className="bg-emerald-300 h-14 w-36 rounded-full flex items-center justify-center"></div>
      <div id="S8-M3" className="bg-emerald-300 h-14 w-36 rounded-full flex items-center justify-center"></div>
      <div id="S8-M4" className="bg-emerald-300 h-14 w-36 rounded-full flex items-center justify-center"></div>
      <div id="S8-M5" className="bg-emerald-300 h-14 w-36 rounded-full flex items-center justify-center"></div>
      <div id="S8-M6" className="bg-emerald-300 h-14 w-36 rounded-full flex items-center justify-center"></div>
    </div>
  </div>
</div>

</div>
  
);

}
