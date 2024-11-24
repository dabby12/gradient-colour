// src/App.jsx

import React, { useState, useMemo } from 'react';
import Navbar from './Navbar'
import GradientCanvas from './GradientCanvas'
import Sidebar from './Sidebar'
import ColorSwatches from './ColorSwatches'

const App = () => {
  const [gradientPoints, setGradientPoints] = useState([
    { color: '#FF5733', position: 0 },
    { color: '#33FF57', position: 1 }
  ]);
  const [gradientType, setGradientType] = useState('linear');
  const [warpType, setWarpType] = useState('none');
  const [dimensions, setDimensions] = useState({ width: 400, height: 400 });
  const [warpSettings, setWarpSettings] = useState({ intensity: 50, size: 50, noise: 0 });

  const handlePointChange = (index, newPoint) => {
    const newPoints = [...gradientPoints];
    newPoints[index] = newPoint;
    setGradientPoints(newPoints);
  };

  const addColor = () => {
    setGradientPoints([...gradientPoints, { color: '#000000', position: 0.5 }]);
  };

  const randomizeColors = () => {
    const newPoints = gradientPoints.map((point) => ({
      ...point,
      color: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
    }));
    setGradientPoints(newPoints);
  };

  const colors = useMemo(() => gradientPoints.map((p) => p.color), [gradientPoints]);

  return (
    <div className="flex">
      <Sidebar
        gradientType={gradientType}
        setGradientType={setGradientType}
        warpType={warpType}
        setWarpType={setWarpType}
        dimensions={dimensions}
        setDimensions={setDimensions}
        warpSettings={warpSettings}
        setWarpSettings={setWarpSettings}
        addColor={addColor}
        randomizeColors={randomizeColors}
        colors={colors}
      />
      <main className="flex-1 p-8">
        <GradientCanvas gradientPoints={gradientPoints} onPointChange={handlePointChange} />
        <ColorSwatches colors={colors} />
      </main>
    </div>
  );
};

export default App;