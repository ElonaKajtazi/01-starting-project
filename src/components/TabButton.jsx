import React from "react";

export default function TabButton({ children, isSelected, ...props }) {
  console.log("TABBUTON  COMPONENT RENDERING");

  return (
    <li>
      <button className={isSelected ? "active" : undefined} {...props}>
        {children}
      </button>
    </li>
  );
}
