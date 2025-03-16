"use client";
import { useState } from "react";

export default function HoverComponent() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        width: "200px",
        height: "100px",
        backgroundColor: isHovered ? "lightcoral" : "lightblue",
        textAlign: "center",
        lineHeight: "100px",
        cursor: "pointer",
        transition: "background-color 3s",
      }}
    >
      {isHovered ? "Hovered!" : "Hover over me"}
      <div
        style={{
          display: isHovered ? "block" : "none",
          width: "200px",
          height: "100px",
          textAlign: "center",
          lineHeight: "100px",
          cursor: "pointer",
          transition: "display 3s",
        }}
      >
        <h1>bhan bhosda</h1>
      </div>
    </div>
  );
}
