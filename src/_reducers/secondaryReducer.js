import {
    ADD_NAME,
    ADD_PLACE
} from '../_actions/actionTypes';


const intialState = {
    name: '',
    place: ''
}

export default function secondaryReducer(state=intialState,action){
    switch(action.type){
            case ADD_NAME:
            return {
                ...state,
                name: action.payload
            };
            case ADD_PLACE:
            return {
                ...state,
                place: action.payload
            };
            default:
            return state;
        }
}