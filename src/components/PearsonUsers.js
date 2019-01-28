import React, { Component } from "react";
import Header from './Header';
import Profiles from './Profiles';
import { HEADER_TITLE, API_URL } from '../constants/constants';
import { removeDuplicateUtils, removeObjWithId } from '../utils/utils';
import fetch from 'isomorphic-fetch';
import './PearsonUsers.css';

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

  /* Invoke the API call to fetch the profile list */
  componentDidMount(){
    fetch(API_URL).then(response => {
      return response.json();
    }).then(res => {
      return this.removeDuplicatesProfiles(res.data);
  })
  }

  /* Remove the duplicates values from profile list */
  removeDuplicatesProfiles = (data) => {
    const { users } = this.state;
    const updateProfileData = removeDuplicateUtils([...users, ...data],'id');
    this.setState({ users : updateProfileData});
  }

/* Delete the particular user from the list*/
  onDeleteAction= (event) =>{
    const { users } =  this.state;
    const removeClickedProfile = removeObjWithId(users, parseInt(event.target.id));
    this.setState({ users : removeClickedProfile });
  }

  render() {
    const { users } = this.state;
    const userList = users.map(item => {
    const profilename = `${item.first_name} ${item.last_name}`;
            
      return (
        <Profiles
        key={item.id}
        profilename={profilename}
        avatar={item.avatar}
        id={item.id}
        onDeleteAction={this.onDeleteAction}
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
