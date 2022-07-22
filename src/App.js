import React, { Component } from "react";
import "./styles.css";

export default class App extends Component {
  state = {
    numero: 0
  };

  add = () => {
    if (this.state.numero < 10) {
      this.setState({
        numero: this.state.numero + 1
      });
    }
  };

  remove = () => {
    if (this.state.numero > 0) {
      this.setState({
        numero: this.state.numero - 1
      });
    }
  };

  render() {
    return (
      <div className="master">
        <button onClick={this.remove} className="btnOne">
          -
        </button>
        <h1>{this.state.numero}</h1>
        <button onClick={this.add} className="btnTwo">
          +
        </button>
      </div>
    );
  }
}
