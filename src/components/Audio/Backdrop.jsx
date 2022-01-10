import React, { useEffect } from "react";

const Backdrop = ({ activeColor, trackIndex, isPlaying }) => {
    const actColor = "#00aeb0"

  useEffect(() => {
    document.documentElement.style.setProperty(actColor, activeColor);
  }, [trackIndex, activeColor]);

  return <div className={`color-backdrop ${isPlaying ? "playing" : "idle"}`} />;
};

export default Backdrop;
