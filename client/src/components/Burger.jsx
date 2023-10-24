import React from "react";
import "../styles/burger.scss";

export default function Burger() {
  return (
    <div>
      <input type="checkbox" id="menu_checkbox" />
      <label for="menu_checkbox">
        <div></div>
        <div></div>
        <div></div>
      </label>
    </div>
  );
}
