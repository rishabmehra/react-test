import React, { Component } from "react";

const Profile = (props) => {
    return (
        <div className="profile__container">
         <div className="profile__container-avator">
         <img className="profile__container-avator-img" src={props.avatar} />
         </div>
         <div className="profile__container-name">{props.name}</div>
         <div className="profile__container-delete">
          <a>Delete</a>
         </div>
        </div>
    )
}

export default Profile;