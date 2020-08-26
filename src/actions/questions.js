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

function addAnswer(answer) {
	return {
		type: ADD_ANSWER,
		answer
	};
}

export function handleAddQuestion (optionOne ,optionTwo ) {
    return (dispatch, getState) =>{
        const { authedUser } = getState();

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

export function handleAddAnswer (qID ,answer ) {
    return (dispatch, getState) =>{
        const { authedUser } = getState();

        dispatch(showLoading());

        return saveQuestionAnswer({
            qID,
            answer,
            authedUser
        })
        .then((answer)=> dispatch(addAnswer(answer)))
        .then(()=> dispatch(hideLoading()))
    }
}