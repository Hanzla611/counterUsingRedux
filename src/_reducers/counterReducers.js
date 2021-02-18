import {
    INCREMENT,
    DECREMENT
} from '../_actions/actionTypes';


const intialState = {
    count: 0
}

export default function counterReducer(state=intialState,action){
    switch(action.type){
            case INCREMENT:
            return {
                count: state.count + action.payload
            };
            case DECREMENT:
            return {
                count: state.count - action.payload
            };
            default:
            return state;
        }
}
