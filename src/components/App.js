import React, { useState } from "react";
import "../styles/App.css";

const App = (props) => {
  let { slides } = props;

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [disabled, setDisabled] = useState(true);

  return (
    <>
      <div>
        <h1>{slides[selectedIndex].title}</h1>
        <p>{slides[selectedIndex].text}</p>
      </div>
      <div>
        <button
          disabled={selectedIndex === 0}
          onClick={() => {
            setDisabled(false);
            setSelectedIndex(selectedIndex - 1);
          }}
        >
          Prev
        </button>

        <button
          disabled={selectedIndex === slides.lenght - 1}
          onClick={() => {
            setDisabled(false);
            setSelectedIndex(selectedIndex + 1);
          }}
        >
          Next
        </button>

        <button
          disabled={disabled}
          onClick={() => {
            setDisabled(true);
            setSelectedIndex(0);
          }}
        >
          Restart
        </button>
      </div>
    </>
  );
};

export default App;
