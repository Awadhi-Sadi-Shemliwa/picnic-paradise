// components/CustomButton.jsx
import React from "react";

const CustomButton = ({ children, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors ${className}`}
    >
      {children}
    </button>
  );
};

export default CustomButton;