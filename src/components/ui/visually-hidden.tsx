"use client"

import React from "react";

const VisuallyHidden: React.FC<React.HTMLAttributes<HTMLSpanElement>> = ({ children, ...props }) => {
  return (
    <span
      style={{
        position: "absolute",
        width: "1px",
        height: "1px",
        padding: "0",
        margin: "-1px",
        overflow: "hidden",
        clip: "rect(0, 0, 0, 0)",
        border: "0",
        whiteSpace: "nowrap",
      }}
      {...props}
    >
      {children}
    </span>
  );
};

export { VisuallyHidden }; 