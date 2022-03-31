import React, { Component } from "react";

export default class Cronometro extends Component {
  render() {
    return (
      <div>
        <h2>00:00:00</h2>
        <button>+</button>
          <button>-</button>
        <button>Start</button>
        <button>Stop</button>
        <button>Reset</button>
      </div>
    )
  }
};
