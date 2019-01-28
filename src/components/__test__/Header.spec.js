import React from "react";
import { shallow } from "enzyme";
import  Header  from "../Header";

describe("Header Component", () => {
  let component;

  beforeEach(() => {
    component = shallow(<Header title="Pearson User Management" />);
  });

  it("shoud render the heading", () => {
    const headingText = component.find(".users__header");
    expect(headingText.text()).toEqual("Pearson User Management");
  });
});
