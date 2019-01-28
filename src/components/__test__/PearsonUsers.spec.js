import React from "react";
import { shallow, mount } from "enzyme";
import  PearsonUsers  from "../PearsonUsers";

describe("PearsonUsers", () => {
  let component;

  beforeEach(() => {
    component = mount(<PearsonUsers />);
  });

  it('should render the user list while invoking the pearson user component', () => {
    expect(component.find('.users__container')).toBeDefined();
    expect(component.find('.users__container-list')).toBeDefined();

    const headingText = component.find(".users__header");
    expect(headingText.text()).toEqual("Pearson User Management");
  });

  it('should render the details of first user in pearson user component', () => {
    const profileName = component.find(".profile__container-name").first();
    expect(profileName.text()).toEqual("Eve Holt");

    const imgUrl = component.find("img").first().prop('src');
    expect(imgUrl).toEqual('https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg');
  });

  it('should the particular profile when we user click on the delete', () =>{
    const event = {
      target :{
        id : 4
      }
    }

    expect(component.state().users.length).toEqual(3);
    component.instance().onDeleteAction(event);
    expect(component.state().users.length).toEqual(2);
  });
});