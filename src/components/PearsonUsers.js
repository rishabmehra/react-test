import React, { Component } from "react";
import Header from './Header';
import Profiles from './Profiles';
import { HEADER_TITLE } from '../constants/constants';

export default class PearsonUsers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          id: 4,
          first_name: "Eve",
          last_name: "Holt",
          avatar:
            "https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg"
        },
        {
          id: 5,
          first_name: "Charles",
          last_name: "Morris",
          avatar:
            "https://s3.amazonaws.com/uifaces/faces/twitter/stephenmoon/128.jpg"
        },
        {
          id: 6,
          first_name: "Tracey",
          last_name: "Ramos",
          avatar:
            "https://s3.amazonaws.com/uifaces/faces/twitter/bigmancho/128.jpg"
        }
      ]
    };
  }

  render() {
    const { users } = this.state;
    const userList = users.map(item => {
      const name = `${item.first_name} ${item.last_name}`;
            
      return (
        <Profiles
        key={item.id}
        name={name}
        avatar={item.avatar}
        />
      )
    })
    return (
      <div className="users__container">
      <Header title={HEADER_TITLE} />
      <div className="users__container-list">
         {userList}
      </div>
      </div>
    );
  }
}
