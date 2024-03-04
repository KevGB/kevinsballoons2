import React from "react";
import "./waveDivider.css";

export const WaveDivider = () => {
  return (
    <div className="divider-container">
      {
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#03a5b6"
            fillOpacity="1"
            d="M0,265 
        C240,345 480,175 720,265 
        C960,345 1200,175 1440,265 
        L1440 330 L0 330 Z"
          />
        </svg>
      }
    </div>
  );
};

export default WaveDivider;
