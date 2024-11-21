'use client'
import { useState } from "react";

export default function Dropdown({ options, selected, setSelected }) {
  const toggleOption = (option) => {
    if (selected.includes(option)) {
      setSelected(selected.filter((item) => item !== option));
    } else {
      setSelected([...selected, option]);
    }
  };

  return (
    <div className="mt-4">
      <h3 className="text-xl font-bold mb-4">Select Response Options:</h3>
      <div className="flex gap-10 mb-4">
        {options.map((option) => (
          <label key={option}>
            <input
              type="checkbox"
              checked={selected.includes(option)}
              onChange={() => toggleOption(option)}
            />
            {option}
          </label>
        ))}
      </div>
    </div>
  );
}
