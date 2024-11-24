// src/components/Sidebar.jsx
import React, { useState } from 'react';

const Sidebar = ({
  gradientType,
  setGradientType,
  warpType,
  setWarpType,
  dimensions,
  setDimensions,
  warpSettings,
  setWarpSettings,
  addColor,
  randomizeColors,
  colors
}) => {
  const handleWarpChange = (key, value) => {
    setWarpSettings({ ...warpSettings, [key]: value });
  };

  return (
    <div className="w-64 p-4 bg-gray-200 border-r border-gray-300">
      <h2 className="text-lg font-bold mb-4">Controls</h2>
      <div className="mb-4">
        <label className="block font-medium">Gradient Type</label>
        <select
          value={gradientType}
          onChange={(e) => setGradientType(e.target.value)}
          className="w-full p-2 border rounded-md"
        >
          <option value="linear">Linear</option>
          <option value="radial">Radial</option>
          <option value="conic">Conic</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block font-medium">Warp Method</label>
        <select
          value={warpType}
          onChange={(e) => setWarpType(e.target.value)}
          className="w-full p-2 border rounded-md"
        >
          <option value="none">None</option>
          <option value="sine">Sine Wave</option>
          <option value="circular">Circular</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block font-medium">Width</label>
        <input
          type="number"
          value={dimensions.width}
          onChange={(e) => setDimensions({ ...dimensions, width: e.target.value })}
          className="w-full p-2 border rounded-md"
        />
      </div>

      <div className="mb-4">
        <label className="block font-medium">Height</label>
        <input
          type="number"
          value={dimensions.height}
          onChange={(e) => setDimensions({ ...dimensions, height: e.target.value })}
          className="w-full p-2 border rounded-md"
        />
      </div>

      <div className="mb-4">
        <label className="block font-medium">Warp Intensity</label>
        <input
          type="range"
          min="0"
          max="100"
          value={warpSettings.intensity}
          onChange={(e) => handleWarpChange('intensity', e.target.value)}
          className="w-full"
        />
      </div>

      <div className="mb-4">
        <label className="block font-medium">Warp Size</label>
        <input
          type="range"
          min="0"
          max="100"
          value={warpSettings.size}
          onChange={(e) => handleWarpChange('size', e.target.value)}
          className="w-full"
        />
      </div>

      <div className="mb-4">
        <label className="block font-medium">Noise Level</label>
        <input
          type="range"
          min="0"
          max="100"
          value={warpSettings.noise}
          onChange={(e) => handleWarpChange('noise', e.target.value)}
          className="w-full"
        />
      </div>

      <div className="flex space-x-2 mb-4">
        <button onClick={addColor} className="bg-blue-500 text-white px-4 py-2 rounded-md">
          Add Color
        </button>
        <button onClick={randomizeColors} className="bg-green-500 text-white px-4 py-2 rounded-md">
          Randomize Colors
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
