import React, { Component } from "react";

class Cronometro extends Component {
  constructor() {
    super();
    
    this.state = {
      minutes: "00",
      seconds: "00",
      disabled: false,
    };
  }

  counterOn = () => {
  const { minutes, seconds } = this.state;
  const minute = Number(minutes);
  const second = Number(seconds);
    if (second < 1) {
      this.setState({
        minutes: minute === 0 ? 0 : minute - 1,
        seconds: second + 59,
      })
    } else {
      this.setState({
        seconds: second - 1,
      })
    }
  }

  counter = () => {
    this.setState({
      disabled: true,
    });
    const interval =  setInterval(() => {
      this.counterOn();
    }, 1000);
    setInterval(() => {
      const { minutes, seconds } = this.state;
      if(minutes === 0 && seconds === 0) {
        clearInterval(interval);
        this.setState({
          minutes: "00",
          seconds: "00",
          disabled: false,
        })
      }
    }, 1000)
  }
  
  increase = () => {
    const { minutes } = this.state;
    this.setState({
      minutes: minutes < 59 ? `${parseInt(minutes) + 1}` : "00",
    })
  }
  
  decrease = () => {
    const { minutes } = this.state;
    if (minutes > 0) {
      this.setState({
        minutes: minutes > 1 ? `${parseInt(minutes) - 1}` : "00",
      });
    };
  };
  
  reset = () => {
    this.setState({
      minutes: "00",
      seconds: "00",
      counting: false,
    })
  }

  render() {
    const { minutes, seconds, disabled } = this.state;
    return (
      <div>
        <h2>{`${minutes}:${seconds}`}</h2>
        <button disabled={ disabled } onClick={ this.increase }>+</button>
        <button disabled={ disabled } onClick={ this.decrease }>-</button>
        <button disabled={ disabled } onClick={ this.counter }>Start</button>
        <button>Stop</button>
        <button onClick={ this.reset }>Reset</button>
      </div>
    )
  }
};

export default Cronometro;