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
          data-testid="button-prev"
          disabled={selectedIndex === 0}
          onClick={() => {
            setDisabled(false);
            setSelectedIndex(selectedIndex - 1);
          }}
        >
          Prev
        </button>

        <button
          data-testid="button-next"
          disabled={selectedIndex === slides.length - 1}
          onClick={() => {
            setDisabled(false);
            setSelectedIndex(selectedIndex + 1);
          }}
        >
          Next
        </button>

        <button
          data-testid="button-restart"
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
