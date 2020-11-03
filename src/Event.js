import React, { Component } from "react";

class Event extends Component {
  state = {
    event: {},
    showDetails: false,
  };

  handleShowDetails = () => {
    this.setState({ showDetails: true });
  };

  render() {
    const showDetails = this.state.showDetails;

    return (
      <div className="event">
        <div className="event_wrapper">
          <p className="event_name">{this.state.event.id}</p>
          <p className="event_location">{this.state.event.local_date}</p>
          <button onClick={() => this.handleShowDetails()}>show details</button>
        </div>
        {showDetails && (
          <div className="event_details">
            <p className="event_description">{this.state.event.description}</p>
          </div>
        )}
      </div>
    );
  }
}

export default Event;
