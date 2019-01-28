import React from "react";
import { shallow } from "enzyme";
import  Profiles  from "../Profiles";

describe("Profile", () => {
  let component;
  let onDeleteAction = jest.fn();
  beforeEach(() => {
    component = shallow(<Profiles key={`4`} profilename={`Evan Bold`} avatar={`test-url`} onDeleteAction={onDeleteAction} />);
  });

  it('should render the profile component', () => {
    expect(component.find('.profile__container')).toBeDefined();
  });

  it('should render the details of profile component', () => {
    const profileName = component.find(".profile__container-name");
    expect(profileName.text()).toEqual("Evan Bold");

    const imgUrl = component.find("img").prop('src');
    expect(imgUrl).toEqual("test-url");

    expect(component.find('.profile__container-delete')).toHaveLength(1);
  });
  
  it('should default props while invoking the profile component',() => {
     const defaultComponent = shallow(<Profiles />);

     expect(defaultComponent.find(".profile__container-name").text()).toEqual("John Mathew");
     expect(defaultComponent.find("img").prop('src')).toEqual("https://s3.amazonaws.com/uifaces/faces/twitter/stephenmoon/128.jpg");
  });

  it('should call a click event once clicking on delete', () =>{
    let mockFunc = jest.fn();
    let defaultComponent = shallow(<Profiles onDeleteAction={mockFunc} />);

    defaultComponent.find("a").simulate('click');
    expect(mockFunc.mock.calls.length).toEqual(1);  
  })

});