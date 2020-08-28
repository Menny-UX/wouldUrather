import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Avatar, Typography, Divider} from '@material-ui/core';

class LeaderBoard extends Component {
    render(){
        const {users} = this.props;
    
        return ( <div className="center-item">
                    <div className="user_statistics">
                {
                    Object.keys(users).map((id)=> {
                        return <div className="question_description">
                        <div className="auther_avatar">
                            <Avatar  alt={users[id].name} src={users[id].avatarURL}/>
                        </div>
                        <Divider orientation="vertical" flexItem />
                        <div className="question_statistics">
                            <Typography variant="h6" color="primary">
                                {users[id].name}
                            </Typography>
                            <div className="question-statistics-details">
                                <div className="statistics-title">
                                    Answered Questions 
                                </div>
                                <div className="statistics-value">
                                   {users[id].answers.length || "0"}
                                </div>
                            </div>
                            <div className="question-statistics-details">
                                <div className="statistics-title">
                                    Asked Questions 
                                </div>
                                <div className="statistics-value">
                                   {users[id].questions.length || "0"}
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
                                    { users[id] && users[id].questions.length + Object.keys(users[id].answers).length }
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