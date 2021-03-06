import React, { Component } from "react";

class Event extends Component {
  state = {
    event: {},
    showDetails: false,
  };

  handleShowDetails = () => {
    this.setState({ showDetails: !this.state.showDetails });
  };

  render() {
    const { event } = this.props;
    const { showDetails } = this.state;

    return (
      <div className="event">
        <div className="event_wrapper">
          <p className="event_name">{event.summary}</p>
          <p className="event_location">{event.start.dateTime}</p>

          <button onClick={() => this.handleShowDetails()}>
            {showDetails ? "Hide Details" : "Show Details"}
          </button>
        </div>
        {showDetails && (
          <div className="event_details">
            <p className="event_description">{event.description}</p>
          </div>
        )}
      </div>
    );
  }
}

export default Event;
