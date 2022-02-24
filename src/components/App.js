import React, { Component, useState } from "react";
import "../styles/App.css";

const App = ({ slides }) => {
  const [index, setIndex] = useState(0);

  const handlePrev = () => {
    if (index === 0) {
      return;
    }
    setIndex(index - 1);
  };

  const handleNext = () => {
    if (index === slides.length - 1) {
      return;
    }
    setIndex(index + 1);
  };

  const handleRestart = () => {
    setIndex(0);
  };

  return (
    <>
      <div className="App">
        <div id="slide">
          <h1 data-testid="title">{slides[index].title}</h1>
          <p data-testid="text">{slides[index].text}</p>
          <div id="navigation">
            {index === 0 ? (
              <button
                type="button"
                disabled
                data-testid="button-prev"
                onClick={handlePrev}
              >
                Previous
              </button>
            ) : (
              <button
                type="button"
                data-testid="button-prev"
                onClick={handlePrev}
              >
                Previous
              </button>
            )}
            {index === 0 ? (
              <button
                type="button"
                disabled
                data-testid="button-restart"
                onClick={handleRestart}
              >
                Restart
              </button>
            ) : (
              <button
                type="button"
                data-testid="button-restart"
                onClick={handleRestart}
              >
                Restart
              </button>
            )}
            {index === slides.length - 1 ? (
              <button
                type="button"
                disabled
                data-testid="button-next"
                onClick={handleNext}
              >
                Next
              </button>
            ) : (
              <button
                type="button"
                data-testid="button-next"
                onClick={handleNext}
              >
                Next
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
