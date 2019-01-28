import React from "react";
import { shallow } from "enzyme";
import  Profiles  from "../Profiles";

describe("Profile", () => {
  let component;
  beforeEach(() => {
    component = shallow(<Profiles key={`4`} name={`Evan Bold`} avatar={`test-url`} />);
  });

  it('should render profile component', () => {
    expect(component.find('.profile__container')).toBeDefined();
  });

  it('should render the details of profile component', () => {
    const profileName = component.find(".profile__container-name").first();
    expect(profileName.text()).toEqual("Evan Bold");

    const imgUrl = component.find("img").first().prop('src');
    expect(imgUrl).toEqual("test-url");
  });

});