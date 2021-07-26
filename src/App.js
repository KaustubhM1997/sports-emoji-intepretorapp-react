import "./styles.css";
import React from "react";
import { useState } from "react";

var sportsDictionary = {
  "🏏": "cricket",
  "️⚽": "soccer",
  "🏑": "hockey",
  "🏀": "basketball",
  "🏉": "rugby",
  "🏸": "badminton"
};

var sportsWeKnow = Object.keys(sportsDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function sportInputHandler(event) {
    //processing
    var userInput = event.target.value;

    var meaning = sportsDictionary[userInput];

    // console.log(meaning);

    if (meaning === undefined) {
      meaning = "we don't have this in our database";
    }

    setMeaning(meaning); //React call to show output
  }

  function sportClickHandler(sport) {
    //processing
    var meaning = sportsDictionary[sport];
    setMeaning(meaning); //React call to show output
  }

  return (
    <div className="App">
      <h1>Let's Play!</h1>

      <input
        placeholder="Put your emoji here to know what they mean"
        onChange={sportInputHandler}
      ></input>

      <h2> {meaning} </h2>
      {/* Actual output set by React using useState */}

      <h3>The Sports We Know</h3>
      {sportsWeKnow.map(function (sport) {
        return (
          <span
            onClick={() => sportClickHandler(sport)}
            style={{ fontSize: "3rem", padding: "0.5rem", cursor: "pointer" }}
            key={sport}
          >
            {" "}
            {sport}{" "}
          </span>
        );
      })}

      <footer className="footer">
        <hr></hr>
        <div className="footer-header">Find me on Social Media</div>

        <ul className="list-non-bullet">
          <li className="list-item-inline">
            {" "}
            <a
              target="_blank"
              rel="noreferrer"
              className="link footer-symbol"
              href="https://www.linkedin.com/in/kaustubh-manglurkar-871ba0167/"
            >
              <i class="fab fa-linkedin-in"></i>
            </a>
          </li>
          <li className="list-item-inline">
            {" "}
            <a
              target="_blank"
              rel="noreferrer"
              className="link footer-symbol"
              href="https://github.com/KaustubhM1997?tab=repositories"
            >
              <i class="fab fa-github"></i>
            </a>
          </li>
          <li className="list-item-inline">
            {" "}
            <a
              target="_blank"
              rel="noreferrer"
              className="link footer-symbol"
              href="https://twitter.com/KaustubhManglu1"
            >
              <i class="fab fa-twitter"></i>
            </a>
          </li>
          <li className="list-item-inline">
            {" "}
            <a
              target="_blank"
              rel="noreferrer"
              className="link footer-symbol"
              href="https://dev.to/kaustubhmanglu1/create-your-first-cli-app-4c1p"
            >
              <i class="fab fa-dev"></i>
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}
