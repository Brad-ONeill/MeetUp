import React from "react";
import { shallow } from "enzyme";
import NumberOfEvents from "../NumberOfEvents";

describe("<NumberOfEvents /> component", () => {
  let NumberOfEventsWrapper;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents noOfEvents={32} handleEventAmount={() => { }} />);
  });

  test("render textbox element", () => {
    expect(NumberOfEventsWrapper.find(".NumberOfEvents")).toHaveLength(1);
  });

  test("render text input correctly", () => {
    expect(NumberOfEventsWrapper.find("#NumberOfEvents_input").props().value).toBe(32);
  });

  test("show number of events input label", () => {
    expect(NumberOfEventsWrapper.find(".NumberOfEvents")).toHaveLength(1);
  });

  //no nodes found for test
  test("change state when input changes", () => {
    const eventObject = { target: { value: 32 } };
    NumberOfEventsWrapper.find("#NumberOfEvents__input").simulate(
      "change",
      eventObject
    );
    expect(NumberOfEventsWrapper.state("NumberOfEvents")).toBe(32);
  });
});
