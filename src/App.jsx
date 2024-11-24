// src/App.jsx
import React, { useState, useRef } from 'react';
import Navbar from './components/Navbar'
import GradientCanvas from './components/GradientCanvas';
import Sidebar from './components/Sidebar';
import ColorSwatches from './components/ColorSwatches';
import DownloadButton from './components/DownloadButton';

const App = () => {
  const [gradientPoints, setGradientPoints] = useState([
    { color: '#FF5733', position: 0 },
    { color: '#33FF57', position: 1 }
  ]);
  const [gradientType, setGradientType] = useState('linear');
  const [warpType, setWarpType] = useState('none');
  const [dimensions, setDimensions] = useState({ width: 400, height: 400 });
  const [warpSettings, setWarpSettings] = useState({ intensity: 50, size: 50, noise: 0 });
  const canvasRef = useRef(null); // Reference to the canvas for capturing

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
      color: `#${Math.floor(Math.random() * 16777215).toString(16)}`
    }));
    setGradientPoints(newPoints);
  };

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
        colors={gradientPoints.map((p) => p.color)}
      />
      <main className="flex-1 p-8">
        <GradientCanvas
          gradientPoints={gradientPoints}
          onPointChange={handlePointChange}
          canvasRef={canvasRef} // Pass the ref here
        />
        <ColorSwatches colors={gradientPoints.map((p) => p.color)} />
        <DownloadButton canvasRef={canvasRef} /> {/* Add Download Button */}
      </main>
    </div>
  );
};

export default App;
