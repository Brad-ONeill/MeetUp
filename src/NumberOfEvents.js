import React, { Component } from "react";

class NumberOfEvents extends Component {
  state = {
    NumberOfEvents: 32,
  };

  handleInputChanged = (event) => {
    const value = event.target.value;
    this.setState({ NumberOfEvents: value });
  };

  render() {
    return (
      <div className="NumberOfEvents">
        <label>Number of Events: </label>
        <input
          type="text"
          id="NumberOfEvents_input"
          value={this.state.NumberOfEvents}
          onChange={this.handleInputChanged}
        />
      </div>
    );
  }
}

export default NumberOfEvents;
