import React from "react";

export default function TabButton({ children, onSelect, isSelected }) {
  console.log("TABBUTON  COMPONENT RENDERING");

  return (
    <li>
      <button className={isSelected ? "active" : undefined} onClick={onSelect}>
        {children}
      </button>
    </li>
  );
}
