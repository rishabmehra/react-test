import React from "react";
import { shallow, mount } from "enzyme";
import  PearsonUsers  from "../PearsonUsers";

describe("PearsonUsers", () => {
  let component;

  beforeEach(() => {
    component = mount(<PearsonUsers />);
  });

  // it("renders a h1", () => {
  //   const h1 = component.find("h1");
  //   expect(h1.text()).toEqual("Pearson User Management");
  // });

  it('should render the user list while invoking the pearson user component', () => {
    expect(component.find('.users__container')).toBeDefined();
  });
});
