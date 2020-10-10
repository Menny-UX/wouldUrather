import React from 'react';
import { Avatar, 
    Typography, 
    Divider, 
} from '@material-ui/core';

const QuestionStatistic = ({question ,auther ,user}) => {
    const totalVotes = question.optionOne.votes.length + question.optionTwo.votes.length;
    const optionOneVotes = `${Math.round(question.optionOne.votes.length *100)/ totalVotes}%`;
    const optionTwoVotes =  `${Math.round(question.optionTwo.votes.length *100)/ totalVotes}%`;
    const userChoice = question.optionOne.votes.includes(user)? 'optionOne' : 'optionTwo';
    return ( 
        <div className="center-item">
              <div className="question_details">
                <Typography variant="subtitle1" className="question_author">
                        {`${auther && auther.name} asks:`}
                </Typography>
                <div className="question_description">
                    <div className="auther_avatar">
                        <Avatar  alt={auther && auther.name} src={auther && auther.avatarURL}/>
                    </div>
                    <Divider orientation="vertical" flexItem />
                    <div className="question_snap_view">
                        <Typography variant="subtitle2" >RESULTS</Typography>
                        <div className="answer_votes"
                         data-selection={userChoice ==="optionOne" && true }>
                            <Typography variant="h6" color="primary" className="question_text">
                                {question.optionOne.text}
                            </Typography>
                            <div className="allvotes_container">
                                <div className="option_votes_indicator"
                                    style={{width: optionOneVotes}}
                                ></div>
                                <Typography variant="subtitle1" color="primary"
                                 className="vote_description">
                                {question.optionOne.votes.length} / {totalVotes}
                                </Typography>
                                <Typography variant="subtitle1" color="primary" 
                                className="vote_description" >
                                {`${question.optionOne.votes.length * 100 / totalVotes} %`}
                                </Typography>
                            </div>
                            <div className="selected_vote">
                            YOUR VOTE
                            </div>
                        </div>
                        <div className="answer_votes" 
                        data-selection={userChoice ==="optionTwo" && true }>
                            <Typography variant="h6" color="primary" className="question_text">
                                {question.optionTwo.text}
                            </Typography>
                            <div className="allvotes_container">
                                <div className="option_votes_indicator"
                                    style={{width: optionTwoVotes }}
                                ></div>
                                <Typography variant="subtitle1" color="primary" 
                                className="vote_description" >
                                {question.optionTwo.votes.length} / {totalVotes}
                                </Typography>
                                <Typography variant="subtitle1" color="primary" 
                                className="vote_description" >
                                {`${question.optionTwo.votes.length * 100 / totalVotes} %`}
                                </Typography>
                            </div>
                            <div className="selected_vote">
                            YOUR VOTE
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default QuestionStatistic;