import { RECEIVE_DATA } from '../actions/shared';
import { ADD_QUESTION, ADD_ANSWER } from '../actions/questions';

export default function users (state =[] , action){
    switch(action.type){

        case RECEIVE_DATA :
            return {
                ...state,
                ...action.users
            };
        case ADD_QUESTION: 
            const authUser = action.question.author;
            return {
                ...state,
                [authUser]:{
                    ...state[authUser],
                    questions: state[authUser].questions.concat([
                        action.question.id
                    ])
                }
            };
        case ADD_ANSWER: 
        const { qID, answer, authedUser } = action.answerInfo;
            return {
                ...state,
                [authedUser]:{
                    ...state[authedUser],
                    answers: {
                        ...state[authedUser].answers,
                        [qID] : answer
                    }
                }
            };
        default :
            return state;
    }
}