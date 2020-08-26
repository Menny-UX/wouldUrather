import { ADD_QUESTION, ADD_ANSWER } from '../actions/questions'
import { RECEIVE_DATA } from '../actions/shared';

export default function quations (state = [], action){
    switch(action.type){
        case RECEIVE_DATA :
            return {
                ...state,
                ...action.questions
            };
        case ADD_QUESTION :
            return {
                ...state,
                [action.question.id]: action.question
            };
        case ADD_ANSWER :
            const { qID, answer, authedUser } = action.answerInfo;
            return {
                ...state,
                [qID]: {
                    ...state[qID],
                    [answer]: {
                        ...state[qID][answer],
                        votes: state[qID][answer].votes.concat([authedUser])
                    }
                }
            };
        default :
            return state;
    }
}