import React from "react";
import PropTypes from 'prop-types';

/* Render the user profile details component*/
const Profile = (props) => {
    return (
        <div className="profile__container">
         <div className="profile__container-avator">
         <img alt="user-profile" className="profile__container-avator-img" src={props.avatar} />
         </div>
         <div className="profile__container-name">{props.profilename}</div>
         <div className="profile__container-delete">
          <a id={props.id} onClick={props.onDeleteAction}>Delete</a>
         </div>
        </div>
    )
}

Profile.defaultProps = {
    id:5,
    profilename : 'John Mathew',
    avatar : 'https://s3.amazonaws.com/uifaces/faces/twitter/stephenmoon/128.jpg',
}

Profile.propTypes = {
    avatar : PropTypes.string,
    profilename : PropTypes.string,
    id : PropTypes.number,
    onDeleteAction : PropTypes.func
}
export default Profile;