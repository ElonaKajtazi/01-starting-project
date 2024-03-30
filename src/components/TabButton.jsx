import React from "react";

export default function TabButton({ children, onSelect }) {
    console.log("TABBUTON  COMPONENT RENDERING");

  return (
    <li>
      <button onClick={onSelect}>{children}</button>
    </li>
  );
}
