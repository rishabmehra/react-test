import React from "react";
import PropTypes from 'prop-types';

/* Render the header component */
const Header = function(props){
    return <div className="users__header">{props.title}</div>;
}

Header.defaultProps = {
    title : 'Pearson User Management'
}

Header.propTypes = {
    title : PropTypes.string
}
export default Header;