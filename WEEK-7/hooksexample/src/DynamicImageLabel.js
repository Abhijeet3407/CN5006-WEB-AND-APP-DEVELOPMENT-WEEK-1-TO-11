import React, { useState } from "react";
import Happy from "./happy.png";
import Like from "./like.png";
import Sad from "./Sad.png";

function DynamicImageLabel() {
  const [input, setInput] = useState("");
  const [image, setImage] = useState("");

  const handleInputChange = (e) => {
    const value = e.target.value.toLowerCase();
    setInput(value);

    if (value === "happy") {
      setImage(Happy);
    } else if (value === "like") {
      setImage(Like);
    } else if (value === "sad") {
      setImage(Sad);
    } else {
      setImage("");
    }
  };

  return (
    <div className="App">
      <h1>Dynamic Image Label</h1>
      <label>
        Type "Happy", "Like", or "Sad":
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="Enter a word"
          style={{ marginLeft: "10px", padding: "5px" }}
        />
      </label>
      <div style={{ marginTop: "20px" }}>
        {image && (
          <img
            src={image}
            alt={input}
            style={{ width: "100px", height: "100px" }}
          />
        )}
      </div>
    </div>
  );
}

export default DynamicImageLabel;
