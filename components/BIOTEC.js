import { useEffect, useState, useRef } from 'react';

const LineDrawingComponent = () => {
  const [positions, setPositions] = useState([]);
  const containerRef = useRef(null);  // Ref for the container

  // Elements you want to connect
  const elementIds = ['S1-M1', 'S1-M2', 'S1-M3', 'S1-M4', 'S1-M5', 'S1-M6'];

  // Function to calculate element positions relative to the container
  const calculatePositions = () => {
    const containerRect = containerRef.current.getBoundingClientRect();
    const newPositions = elementIds.map((id) => {
      const element = document.getElementById(id);
      if (!element) return null;
      const rect = element.getBoundingClientRect();
      return {
        x: rect.left + rect.width / 2 - containerRect.left,  // Relative to container
        y: rect.top + rect.height / 2 - containerRect.top,   // Relative to container
      };
    }).filter(Boolean);  // Filter out null values
    setPositions(newPositions);
  };

  useEffect(() => {
    calculatePositions(); // Calculate initial positions
    window.addEventListener('resize', calculatePositions); // Recalculate on window resize
    return () => {
      window.removeEventListener('resize', calculatePositions);
    };
  }, []);

  return (
    <div ref={containerRef} style={{ position: 'relative', height: '500px', border: '1px solid black', margin: '20px' }}>
      {/* Your Elements */}
      <div id="S1-M1" className="bg-emerald-500 h-14 w-36 rounded-full absolute" style={{ top: '50px', left: '50px' }}></div>
      <div id="S1-M2" className="bg-emerald-500 h-14 w-36 rounded-full absolute" style={{ top: '50px', left: '200px' }}></div>
      <div id="S1-M3" className="bg-emerald-500 h-14 w-36 rounded-full absolute" style={{ top: '50px', left: '350px' }}></div>
      <div id="S1-M4" className="bg-emerald-500 h-14 w-36 rounded-full absolute" style={{ top: '150px', left: '50px' }}></div>
      <div id="S1-M5" className="bg-emerald-500 h-14 w-36 rounded-full absolute" style={{ top: '150px', left: '200px' }}></div>
      <div id="S1-M6" className="bg-emerald-500 h-14 w-36 rounded-full absolute" style={{ top: '150px', left: '350px' }}></div>

      {/* SVG for drawing lines */}
      <svg
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
      >
        {positions.length > 1 &&
          positions.map((pos, index) => {
            if (index === positions.length - 1) return null; // No line from last element
            const nextPos = positions[index + 1];
            return (
              <line
                key={index}
                x1={pos.x}
                y1={pos.y}
                x2={nextPos.x}
                y2={nextPos.y}
                stroke="black"
                strokeWidth="2"
              />
            );
          })}
      </svg>
    </div>
  );
};

export default LineDrawingComponent;
