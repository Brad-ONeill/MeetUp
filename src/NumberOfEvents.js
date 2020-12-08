import React, { Component } from "react";

class NumberOfEvents extends Component {
  state = {
    noOfEvents: 32,
  };

  handleInputChanged = (event) => {
    const value = event.target.value;
    this.setState({ noOfEvents: value });
  };

  render() {
    return (
      <div className="NumberOfEvents">
        <label>Number of Events: </label>
        <input
          type="text"
          id="NumberOfEvents_input"
          value={this.state.noOfEvents}
          onChange={this.handleInputChanged}
        />
      </div>
    );
  }
}

export default NumberOfEvents;
