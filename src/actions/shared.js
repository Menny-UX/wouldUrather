import { _getUsers as getUsers,
     _getQuestions as getQuestions
} from '../mockingAPI/_DATA.js';

import { showLoading, hideLoading } from 'react-redux-loading-bar';


export const RECEIVE_DATA = 'RECEIVE_DATA';
export const QUESTION_ANSWER = 'QUESTION_ANSWER';

function receiveData( questions, users){
    return {
        type: RECEIVE_DATA,
        questions,
        users,
    }
}

export function handleInitialData () {
    return (dispatch) =>{
        dispatch(showLoading());
        return Promise.all([
            getQuestions(),
            getUsers()
        ]).then(([questions, users]) => {
            dispatch(receiveData(questions, users))
        }).then(() => dispatch(hideLoading()))
    }
}