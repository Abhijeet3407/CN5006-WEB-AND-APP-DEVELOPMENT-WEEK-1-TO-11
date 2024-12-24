import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Hook_ControlledButtonState from "./Counter";
import EmojeeCounter from "./EmojiCounter";
import reportWebVitals from "./reportWebVitals";
import DynamicImageLabel from "./DynamicImageLabel"; 

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Hook_ControlledButtonState />
    <EmojeeCounter pic="Love" />
    <EmojeeCounter pic="Like" />
    <EmojeeCounter pic="Sad" />

    {/* Task 3: Dynamic Image Label Component */}
    <DynamicImageLabel />

  </React.StrictMode>
);

reportWebVitals();
