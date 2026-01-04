import React, { useState } from "react";
import quotesData from "./quotes";
import "./App.css";

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextQuote = () => {
    setCurrentIndex((prev) => (prev + 1) % quotesData.length);
  };

  const prevQuote = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? quotesData.length - 1 : prev - 1
    );
  };

  const quote = quotesData[currentIndex];

  const bgColors = [
    "#8cc084",
    "#b7ebc3",
    "#ffb37e",
    "#7fa8d7",
    "#ff9ff3",
  ];

  return (
    <div
      className="app"
      style={{
        background: bgColors[currentIndex % bgColors.length],
      }}
    >
      <div className="card">
        <h1 className="title">💡 Quote Generator</h1>

        <p className="quote">"{quote.quote}"</p>

        <h3 className="author">— {quote.author}</h3>
        {quote.source && <small>{quote.source}</small>}

        <div className="button-group">
          <button onClick={prevQuote}>⬅ Prev</button>
          <button onClick={nextQuote}>Next ➡</button>
        </div>
      </div>
    </div>
  );
}
