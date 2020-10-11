import React, {Component} from 'react';
import { connect } from 'react-redux';

import QuestionPoll from './QuestionPoll';
import QuestionStatistic from './QuestionStatistic';
import {handleAddAnswer} from '../actions/questions';

import {withRouter} from 'react-router-dom';

class QuestionPage extends Component {
    
    render(){
        const { questions , authUser, users, history } = this.props;
        const id = this.props.match.params.id;
        const qus = questions[id];

        if(!qus) history.push("/");

            const handelQusAnswer = ( qid , answer ) =>{
                this.props.dispatch(handleAddAnswer ( qid , answer, authUser ));
            }
    
           if(
               (qus && qus.optionOne.votes.includes(authUser)) ||
               (qus && qus.optionTwo.votes.includes(authUser)) 
           ){
                return <QuestionStatistic 
                question={qus} 
                auther={qus && users[qus.author]} 
                user={authUser} />
           }
           else{
               return <QuestionPoll 
               question={qus} 
               auther={qus && users[qus.author]} 
               user={authUser}  
               answerPoll={(qid,answer)=>handelQusAnswer(qid,answer)}/>
           }
        
    } 
}
 
function mapStateToProps({ authUser, questions ,users}) {
	return {
		authUser,
        questions,
        users
	};
}
export default withRouter(connect(mapStateToProps)(QuestionPage));