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
            const { qid, answer, authedUser } = action.answerInfo;
            return {
                ...state,
                [qid]: {
                    ...state[qid],
                    [answer]: {
                        ...state[qid][answer],
                        votes: state[qid][answer].votes.concat([authedUser])
                    }
                }
            };
        default :
            return state;
    }
}