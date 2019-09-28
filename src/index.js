import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sentence: " ",
      word: " ",
      count: 0,
      occurrence: null,
      array: []
    };
  }

  inputHandler = event => {
    const { sentence, word, array } = this.state;
    array.push(sentence);
    var sen = array[Math.floor(Math.random() * array.length)];
    var sSplit = sen.split(" ");
    this.setState({ count: sSplit.length });
    var cntr = 0;
    for (let i = 0; i < sSplit.length; i++) {
      if (sSplit[i] === word) {
        cntr += 1;
      }
    }
    this.setState({ occurrence: cntr });
  };

  render() {
    const { sentence, word, count, occurrence } = this.state;
    return (
      <div>
        <h1 style={{ color: "green", fontFamily: "cursive" }}>
          Word & Sentence Counter
        </h1>
        <div style={{ color: "green", fontFamily: "cursive" }}>Sentence: </div>
        <br />
        <input
          style={{ border: "solid black", height: "30px" }}
          placeholder="input sentence here..."
          onChange={event => this.setState({ sentence: event.target.value })}
        />
        <br />
        &nbsp; &nbsp; <br />
        <div style={{ color: "green", fontFamily: "cursive" }}>Word: </div>
        <br />
        <input
          style={{ border: "solid black", height: "30px" }}
          placeholder="input words here..."
          onChange={event => this.setState({ word: event.target.value })}
        />
        <br />
        <br />
        <br />
        <div>
          <button
            style={{
              color: "blue",
              backgroundColor: "orange",
              border: "solid black",
              hover: true
            }}
            onClick={event => this.inputHandler(event)}
          >
            Count
          </button>
        </div>
        <div>
          <br />
          <br />
          Inputed text:{sentence}
        </div>
        <div />
        words:{count}
        <div>
          word occurrence:{word} : {occurrence}
        </div>
      </div>
    );
  }
}
export default App;

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
