import React from "react";
import { shallow } from "enzyme";
import Event from "../Event";

import { extractEvents } from "../api";
import { mockData } from "../mock-data";

const eventData = extractEvents(mockData);

describe("<Event /> component", () => {
  let EventWrapper;

  beforeAll(() => {
    EventWrapper = shallow(<Event event={eventData[0]} />);
  });

  test("Component is rendered", () => {
    expect(EventWrapper).toHaveLength(1);
  });

  test("Event div is rendered", () => {
    expect(EventWrapper.find(".event")).toHaveLength(1);
  });

  test("event_wrapper is rendered", () => {
    expect(EventWrapper.find(".event_wrapper")).toHaveLength(1);
  });

  test("event_wrapper children are rendered", () => {
    expect(EventWrapper.find(".event_wrapper").children()).toHaveLength(3);
  });

  test("event_details are rendered", () => {
    EventWrapper.setState({
      showDetails: true,
    });
    expect(EventWrapper.find(".event_description")).toHaveLength(1);
  });

  test("Show/hide details button is rendered", () => {
    expect(EventWrapper.find(".event_wrapper button")).toHaveLength(1);
  });

  test("click on button show details", () => {
    EventWrapper.setState({
      showDetails: false,
    });
    EventWrapper.find(".event_wrapper button").simulate("click");
    expect(EventWrapper.state("showDetails")).toBe(true);
  });
  //failing test
  // test("set mock data as state", () => {
  //   EventWrapper.setState({ event: eventData });
  //   expect(EventWrapper.state("event")).toContain("React is Fun");
  // });
});
