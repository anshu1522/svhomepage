import React from "react";
import './Styles/ToggleSwitch.css'
function ToggleSwitch() {
  return (
    <span className="toggleOuter">
      <label className="toggle">
        <input type="checkbox" />
        <span className="slider"></span>
        <span className="labels" data-on="English" data-off="Hindi"></span>
      </label>
    </span>
  );
}

export default ToggleSwitch;
