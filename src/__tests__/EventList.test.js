import React from "react";
import { shallow } from "enzyme";
//components
import Event from "../Event";
import EventList from "../EventList";

// Group "scope"
describe("<App /> component", () => {
  test("render correct number of events", () => {
    const events = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];
    const EventListWrapper = shallow(<EventList events={events} />);
    EventListWrapper.setState({
      events,
    });
    expect(EventListWrapper.find(Event)).toHaveLength(4);
  });
});
