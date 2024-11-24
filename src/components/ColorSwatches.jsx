// src/components/ColorSwatches.jsx
import React from 'react';

const ColorSwatches = ({ colors, onReorder }) => {
  // Implement drag-and-drop reorder functionality here

  return (
    <div className="flex space-x-2 mt-4">
      {colors.map((color, index) => (
        <div
          key={index}
          className="w-8 h-8 rounded-md"
          style={{ backgroundColor: color }}
        ></div>
      ))}
    </div>
  );
};

export default ColorSwatches;
