export const SET_AUTHERUSER = 'SET_AUTHERUSER';
export const Logout_USER = 'Logout_USER';

        
export function logoutUser(){
    return {
        type: Logout_USER,
    }
}

export function setAuthedUser(UId){
    return {
        type: SET_AUTHERUSER,
        UId
    }
}