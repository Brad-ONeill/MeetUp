import React from "react";
import { shallow } from "enzyme";
import App from "../App";
//components
import Event from "../Event";
import EventList from "../EventList";

// Group "scope"
describe("<App /> component", () => {
  test("render correct number of events", () => {
    const EventListWrapper = shallow(<EventList />);
    EventListWrapper.setState({
      events: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }],
    });
    expect(EventListWrapper.find(Event)).toHaveLength(4);
  });
});
