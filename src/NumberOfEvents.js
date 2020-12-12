import React, { Component } from "react";

class NumberOfEvents extends Component {

  render() {
    return (
      <div className="NumberOfEvents">
        <label>Number of Events: </label>
        <input
          type="text"
          id="NumberOfEvents_input"
          value={this.props.noOfEvents}
          onChange={this.props.handleEventAmount}
        />
      </div>
    );
  }
}

export default NumberOfEvents;
