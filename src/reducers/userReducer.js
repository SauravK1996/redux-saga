import {Types} from '../actions/usersActions';

const INITIAL_STATE = {
    items: [],
    error: ''
};

const users = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case Types.GET_USERS_SUCCESS:{
            return {
                ...state,
                items: action.payload.items
            }
        }

        case Types.USERS_ERROR: {
            console.log(action.payload.error);
            return {
                ...state,
                error: action.payload.error
            }
        }

        default:{
            return state;
        }
    }
};

export default users;