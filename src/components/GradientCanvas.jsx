// src/components/GradientCanvas.jsx
import React, { useState, useRef } from 'react';

const GradientCanvas = ({ gradientPoints, onPointChange, canvasRef }) => {
  const internalRef = useRef(null);
  
  return (
    <div className="w-full h-96 relative border-2 border-gray-300 rounded-lg">
      <div
        ref={(el) => {
          // Use the ref passed from the parent component
          internalRef.current = el;
          if (canvasRef) canvasRef.current = el;
        }}
        className="absolute inset-0"
        style={{
          background: `linear-gradient(to right, ${gradientPoints
            .map((p) => `${p.color} ${p.position * 100}%`)
            .join(', ')})`
        }}
      >
        {gradientPoints.map((point, index) => (
          <div
            key={index}
            draggable
            onDrag={(e) => handleDrag(index, e)}
            style={{
              position: 'absolute',
              left: `${point.position * 100}%`,
              top: '50%',
              transform: 'translate(-50%, -50%)',
              backgroundColor: point.color,
              width: '20px',
              height: '20px',
              borderRadius: '50%',
              cursor: 'pointer'
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default GradientCanvas;
