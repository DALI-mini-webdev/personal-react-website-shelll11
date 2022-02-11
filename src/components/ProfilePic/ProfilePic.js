import React, { Component } from 'react';
import './ProfilePic.css';

class ProfilePic extends Component {
    state = { clicked: false }

    render() {
        return(
            <h1 className='profile-logo'><i className="far fa-user"></i></h1>
        )
    }
}




export default ProfilePic;