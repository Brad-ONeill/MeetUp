import React, { Component } from "react";
import Event from "./Event";
import NumberOfEvents from "./NumberOfEvents";

class EventList extends Component {
  state = {
    events: [],
    noOfEvents: 32,
  };

  componentDidMount() {
    this.setState({
      events: this.props.events
    })
  }

  handleEventAmount = (event) => {
    const value = event.target.value;
    this.setState({ noOfEvents: value });
  };

  render() {
    let renderedEvents = this.props.events.slice(0, this.state.noOfEvents || 32)
    return (
      <div>
        <ul className="EventList">
          {renderedEvents.map((event) => (
            <li key={event.id}>
              <Event event={event} />
            </li>
          ))}
        </ul>
        <NumberOfEvents noOfEvents={this.state.noOfEvents} handleEventAmount={this.handleEventAmount} />
      </div>
    );
  }
}

export default EventList;
