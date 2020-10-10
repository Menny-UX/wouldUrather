import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Avatar, Typography, Divider} from '@material-ui/core';

class LeaderBoard extends Component {
    render(){
        const {users} = this.props;
        const usersArr = Object.values(users);

        const sortedUses = usersArr.sort((a,b) => 
          ((b.questions.length + Object.keys( b.answers).length)
          -  (a.questions.length + Object.keys( a.answers).length))  
        )

        return ( <div className="center-item">
                    <div className="user_statistics">
                {
                    sortedUses.map((user)=> {
                        return <div className="question_description" key={user.name}>
                        <div className="auther_avatar">
                            <Avatar  alt={user.name} src={user.avatarURL}/>
                        </div>
                        <Divider orientation="vertical" flexItem />
                        <div className="question_statistics">
                            <Typography variant="h6" color="primary">
                                {user.name}
                            </Typography>
                            <div className="question-statistics-details">
                                <div className="statistics-title">
                                    Answered Questions 
                                </div>
                                <div className="statistics-value">
                                   {Object.keys(user.answers).length || "0"}
                                </div>
                            </div>
                            <div className="question-statistics-details">
                                <div className="statistics-title">
                                    Asked Questions 
                                </div>
                                <div className="statistics-value">
                                   {user.questions.length || "0"}
                                </div>
                            </div>
                        </div>
                        <Divider orientation="vertical" flexItem />
                            <div className="score-container">
                                <Typography variant="subtitle1" color="primary">
                                    score
                                </Typography>
                                <Divider flexItem />
                                <div className="user-score">
                                    { user && user.questions.length + Object.keys(user.answers).length }
                                </div>
                            </div>
                        </div>}
                    )
                }
                    </div>
            </div> )
    }
}
function mapStateToProps({ users }) {
    return {
		users
	};
}
export default connect(mapStateToProps)(LeaderBoard);