import {SET_AUTHERUSER,
    Logout_USER
} from '../actions/users';

export default function authUser (state='mennaElboulaki' , action){
    switch (action.type) {
        case SET_AUTHERUSER :
            return action.UId;
        case Logout_USER :
            return '';
        default:
            return state;
    }
   
}