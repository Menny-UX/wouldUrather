import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import {Avatar, Button} from '@material-ui/core';

class Navbar extends Component {
    render(){
        const { authUser, users} = this.props;
        const currentUser = users[authUser];
        console.log('userrrrrrr',currentUser)
        return ( <div className="Navbar">
            <div className="Nav-items-wrapper">
                <NavLink  to="/" exact
                     className="Nav_link"
                     activeClassName="activeRoute"
                >
                    Home
                </NavLink>
                <NavLink to="/add" exact
                   className="Nav_link"
                   activeClassName="activeRoute"
                >
                    New Question
                </NavLink>
                <NavLink to="/leaderboard" exact
                   className="Nav_link"
                   activeClassName="activeRoute"
                >
                    Leaderboard
                </NavLink>
            </div>
            {
                currentUser &&
                    <div className="profile_Nav">
                        <div className="current_User">
                            <Avatar alt={currentUser.name} src={currentUser.avatarURL} />
                            <h5 className="current-user-text"> {currentUser.name} </h5>
                        </div>
                        <Button variant="outlined" style={{color:"white"}}>LogOut</Button>
                    </div>
            }
        </div> );
    }
}
function mapStateToProps({ authUser, users }) {
	return {
		authUser,
		users
	};
}
export default connect(mapStateToProps)(Navbar);