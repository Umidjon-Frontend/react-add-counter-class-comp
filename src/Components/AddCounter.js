import React, { Component } from "react";
import "./AddCounter.css";

class AddCounter extends Component {
  state = {
    counter: [],
  };

  addCounters = () => {
    let count = this.state.counter;
    count.push(0);
    this.setState({
      counter: count,
    });
  };

  countFunc = (index, incr) => {
    let count = this.state.counter;
    count[index] = count[index] + incr;

    this.setState({
      counter: count,
    });
  };

  render() {
    return (
      <div className="counter-container">
        <div className="counter-box">
          <div className="counter-btn">
            <button className="btn" onClick={this.addCounters}>
              Add Counter
            </button>
          </div>
          <div className="counter-lists">
            {this.state.counter.map((item, index) => (
              <div className="btn-list">
                <button
                  className="btn"
                  onClick={() => this.countFunc(index, 1)}
                >
                  +
                </button>
                <h1>{item}</h1>
                <button
                  className="btn"
                  onClick={() => this.countFunc(index, -1)}
                >
                  -
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default AddCounter;
