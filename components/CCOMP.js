import { useState, useEffect } from 'react';

const HoverEffectComponent = ({ onElementClick }) => {
  // State to track which group is hovered
  const [hoveredGroup, setHoveredGroup] = useState(null);

  // Define the groups and their elements
  const groups = [
    { id: 'group1', elements: ['S1-M1', 'S1-M2', 'S1-M3', 'S1-M4', 'S1-M5', 'S1-M6'] },
    { id: 'group2', elements: ['S2-M1', 'S2-M2', 'S2-M3', 'S2-M4', 'S2-M5', 'S2-M6'] },
    { id: 'group3', elements: ['S3-M1', 'S3-M2', 'S3-M3', 'S3-M4', 'S3-M5', 'S3-M6'] },
    { id: 'group4', elements: ['S4-M1', 'S4-M2', 'S4-M3', 'S4-M4', 'S4-M5', 'S4-M6'] },
    { id: 'group5', elements: ['S5-M1', 'S5-M2', 'S5-M3', 'S5-M4', 'S5-M5', 'S5-M6'] },
    { id: 'group6', elements: ['S6-M1', 'S6-M2', 'S6-M3', 'S6-M4', 'S6-M5', 'S6-M6'] },
    { id: 'group7', elements: ['S7-M1', 'S7-M2', 'S7-M3', 'S7-M4', 'S7-M5', 'S7-M6'] },
    { id: 'group8', elements: ['S8-M1', 'S8-M2', 'S8-M3', 'S8-M4', 'S8-M5', 'S8-M6'] },
  ];

  // Function to handle mouse enter on an element
  const handleMouseEnter = (groupId) => {
    setHoveredGroup(groupId);
  };

  // Function to handle mouse leave on an element
  const handleMouseLeave = () => {
    setHoveredGroup(null); // Reset when no group is hovered
  };

  useEffect(() => {
    // Iterate over all groups and attach event listeners to elements
    groups.forEach((group) => {
      group.elements.forEach((elementId) => {
        const element = document.getElementById(elementId);

        if (element) {
          element.addEventListener('mouseenter', () => handleMouseEnter(group.id));
          element.addEventListener('mouseleave', handleMouseLeave);
        }
      });
    });

    // Clean up event listeners on component unmount
    return () => {
      groups.forEach((group) => {
        group.elements.forEach((elementId) => {
          const element = document.getElementById(elementId);
          if (element) {
            element.removeEventListener('mouseenter', () => handleMouseEnter(group.id));
            element.removeEventListener('mouseleave', handleMouseLeave);
          }
        });
      });
    };
  }, []);

  useEffect(() => {
    // Iterate over groups and apply the hover effect based on the hoveredGroup
    groups.forEach((group) => {
      group.elements.forEach((elementId) => {
        const element = document.getElementById(elementId);
        if (element) {
          if (hoveredGroup === group.id) {
            // Darken the elements of the hovered group
            element.classList.add('bg-emerald-700');
          } else {
            // Remove darkening from elements of other groups
            element.classList.remove('bg-emerald-700');
          }
        }
      });
    });
  }, [hoveredGroup]);

  return (
    <div className="flex">
      <div id='container' className="relative top-0 h-auto w-36 p-4">
        <p className="pt-0 pl-6">Termo 1</p>
        <p className="pt-36 pl-6">Termo 2</p>
        <p className="pt-36 pl-6">Termo 3</p>
        <p className="pt-36 pl-6">Termo 4</p>
        <p className="pt-36 pl-6">Termo 5</p>
        <p className="pt-36 pl-6">Termo 6</p>
        <p className="pt-36 pl-6">Termo 7</p>
        <p className="pt-36 pl-6">Termo 8</p>
      </div>

      <div className="flex flex-col space-y-28 pl-3 pr-3 flex-1">
        <div id='container1' className="flex justify-between">
          <div
            id="calculo em uma variavel"
            className="bg-emerald-500 h-14 w-36 rounded-full flex items-center justify-center"
            onClick={() => onElementClick('Matemática Geral')}
          >CUV</div>
          <div id="S1-M2" className="bg-emerald-500 h-14 w-36 rounded-full flex items-center justify-center">QG</div>
          <div id="S1-M3" className="bg-emerald-500 h-14 w-36 rounded-full flex items-center justify-center">LP</div>
          <div id="S1-M4" className="bg-emerald-500 h-14 w-36 rounded-full flex items-center justify-center">FBM</div>
          <div id="S1-M5" className="bg-emerald-500 h-14 w-36 rounded-full flex items-center justify-center">CTS</div>
          <div id="S1-M6" className="bg-emerald-500 h-14 w-36 rounded-full flex items-center justify-center">LAB-MAT</div>
        </div>

        <div id='container2' className="flex justify-between">
          <div id="S2-M1" className="bg-emerald-500 h-14 w-36 rounded-full flex items-center justify-center">SEDO</div>
          <div id="S2-M2" className="bg-emerald-500 h-14 w-36 rounded-full flex items-center justify-center">GA</div>
          <div id="S2-M3" className="bg-emerald-500 h-14 w-36 rounded-full flex items-center justify-center">AED1</div>
          <div id="S2-M4" className="bg-emerald-500 h-14 w-36 rounded-full flex items-center justify-center">CTSA</div>
          <div id="S2-M5" className="bg-emerald-500 h-14 w-36 rounded-full flex items-center justify-center">FEMEC</div>
          <div id="S2-M6" className="bg-emerald-500 h-14 w-36 rounded-full flex items-center justify-center">MD</div>
        </div>

        <div id='container3' className="flex justify-between">
          <div id="S3-M1" className="bg-emerald-500 h-14 w-36 rounded-full flex items-center justify-center">CVV</div>
          <div id="S3-M2" className="bg-emerald-500 h-14 w-36 rounded-full flex items-center justify-center">PROB-E</div>
          <div id="S3-M3" className="bg-emerald-500 h-14 w-36 rounded-full flex items-center justify-center">AL</div>
          <div id="S3-M4" className="bg-emerald-500 h-14 w-36 rounded-full flex items-center justify-center">AED2</div>
          <div id="S3-M5" className="bg-emerald-500 h-14 w-36 rounded-full flex items-center justify-center">CD</div>
          <div id="S3-M6" className="bg-emerald-300 h-14 w-36 rounded-full flex items-center justify-center">ELETIVA</div>
        </div>

        <div id='container4' className="flex justify-between">
          <div id="S4-M1" className="bg-emerald-500 h-14 w-36 rounded-full flex items-center justify-center">CN</div>
          <div id="S4-M2" className="bg-emerald-500 h-14 w-36 rounded-full flex items-center justify-center">POO</div>
          <div id="S4-M3" className="bg-emerald-500 h-14 w-36 rounded-full flex items-center justify-center">BD</div>
          <div id="S4-M4" className="bg-emerald-500 h-14 w-36 rounded-full flex items-center justify-center">PAA</div>
          <div id="S4-M5" className="bg-emerald-500 h-14 w-36 rounded-full flex items-center justify-center">AOC</div>
          <div id="S4-M6" className="bg-emerald-300 h-14 w-36 rounded-full flex items-center justify-center">ELETIVA</div>
        </div>

        <div id='container5' className="flex justify-between">
          <div id="S5-M1" className="bg-emerald-500 h-14 w-36 rounded-full flex items-center justify-center">PROO</div>
          <div id="S5-M2" className="bg-emerald-500 h-14 w-36 rounded-full flex items-center justify-center">IA</div>
          <div id="S5-M3" className="bg-emerald-500 h-14 w-36 rounded-full flex items-center justify-center">SO</div>
          <div id="S5-M4" className="bg-emerald-500 h-14 w-36 rounded-full flex items-center justify-center">TG</div>
          <div id="S5-M5" className="bg-emerald-500 h-14 w-36 rounded-full flex items-center justify-center">LFA</div>
          <div id="S5-M6" className="bg-emerald-300 h-14 w-36 rounded-full flex items-center justify-center">ELETIVA</div>
        </div>

        <div id='container6' className="flex justify-between">
          <div id="S6-M1" className="bg-emerald-500 h-14 w-36 rounded-full flex items-center justify-center">ES</div>
          <div id="S6-M2" className="bg-emerald-500 h-14 w-36 rounded-full flex items-center justify-center">CG</div>
          <div id="S6-M3" className="bg-emerald-500 h-14 w-36 rounded-full flex items-center justify-center">PCD</div>
          <div id="S6-M4" className="bg-emerald-500 h-14 w-36 rounded-full flex items-center justify-center">RC</div>
          <div id="S6-M5" className="bg-emerald-500 h-14 w-36 rounded-full flex items-center justify-center">COMP</div>
          <div id="S6-M6" className="bg-emerald-300 h-14 w-36 rounded-full flex items-center justify-center">ELETIVA</div>
        </div>

        <div id='container7' className="flex justify-between">
          <div id="S7-M1" className="bg-emerald-500 h-14 w-36 rounded-full flex items-center justify-center">TCC1</div>
          <div id="S7-M2" className="bg-emerald-500 h-14 w-36 rounded-full flex items-center justify-center">IHC</div>
          <div id="S7-M3" className="bg-emerald-300 h-14 w-36 rounded-full flex items-center justify-center">ELETIVA</div>
          <div id="S7-M4" className="bg-emerald-300 h-14 w-36 rounded-full flex items-center justify-center">ELETIVA</div>
          <div id="S7-M5" className="bg-emerald-300 h-14 w-36 rounded-full flex items-center justify-center">ELETIVA</div>
          <div id="S7-M6" className="bg-emerald-300 h-14 w-36 rounded-full flex items-center justify-center">ELETIVA</div>
        </div>

        <div id='container8' className="flex justify-between">
          <div id="S8-M1" className="bg-emerald-500 h-14 w-36 rounded-full flex items-center justify-center">TCC2</div>
          <div id="S8-M2" className="bg-emerald-300 h-14 w-36 rounded-full flex items-center justify-center">ELETIVA</div>
          <div id="S8-M3" className="bg-emerald-300 h-14 w-36 rounded-full flex items-center justify-center">ELETIVA</div>
          <div id="S8-M4" className="bg-emerald-300 h-14 w-36 rounded-full flex items-center justify-center">ELETIVA</div>
          <div id="S8-M5" className="bg-emerald-300 h-14 w-36 rounded-full flex items-center justify-center">ELETIVA</div>
          <div id="S8-M6" className="bg-emerald-300 h-14 w-36 rounded-full flex items-center justify-center">ELETIVA</div>
        </div>
      </div>
    </div>
  );
};

export default HoverEffectComponent;
