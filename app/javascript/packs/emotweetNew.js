import React from "react";
import ReactDOM from "react-dom";
import EmotweetNew from "../components/emotweetNew";
import "../application/styles/application";

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(<EmotweetNew />, document.getElementById("app"));
});
