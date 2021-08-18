import React from "react";
import "./styles.css";
import { useState } from "react";

const stateDB = {
  Karnataka: [
    { name: "Udupi", rating: "4/5" },
    { name: "Shimoga", rating: "3.5/5" }
  ],

  TamilNadu: [
    {
      name: "Kodaikanal",
      rating: "5/5"
    },
    {
      name: "Ooty",
      rating: "4.5/5"
    }
  ],
  Maharastra: [
    {
      name: "Lonavala",
      rating: "4/5"
    },
    {
      name: "khandala",
      rating: "5/5"
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("Karnataka");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1> Travel Recommendation </h1>
      <p style={{ fontSize: "smaller" }}>
        {" "}
        Checkout my favorite Places. Select a State to get started{" "}
      </p>

      <div>
        {Object.keys(stateDB).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {stateDB[selectedGenre].map((genre) => (
            <li
              key={genre.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {genre.name} </div>
              <div style={{ fontSize: "smaller" }}> {genre.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
