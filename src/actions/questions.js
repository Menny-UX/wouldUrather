import { _saveQuestion as saveQuestion,
     _saveQuestionAnswer as saveQuestionAnswer
} from '../mockingAPI/_DATA.js';
import { showLoading, hideLoading } from 'react-redux-loading-bar';

//Constants
export const ADD_QUESTION = 'ADD_QUESTION';
export const ADD_ANSWER = 'ADD_ANSWER';

function addQuestion(question){
    return {
        type: ADD_QUESTION,
        question
    }
}

function addAnswer(answerInfo) {
	return {
		type: ADD_ANSWER,
		answerInfo
	};
}

export function handleAddQuestion (optionOne ,optionTwo, authedUser) {
    return (dispatch, getState) =>{
        dispatch(showLoading());

        return saveQuestion({
            optionOneText: optionOne,
            optionTwoText: optionTwo,
            author: authedUser
        })
        .then((question)=> dispatch(addQuestion(question)))
        .then(()=> dispatch(hideLoading()))
    }
}

export function handleAddAnswer (qid ,answer ,authedUser) {
    return (dispatch, getState) =>{
        dispatch(showLoading());

        return saveQuestionAnswer({
            qid,
            answer,
            authedUser
        })
        .then(()=> dispatch(addAnswer({qid, answer, authedUser })))
        .then(()=> dispatch(hideLoading()))
    }
}