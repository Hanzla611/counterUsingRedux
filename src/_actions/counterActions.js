import {
    INCREMENT,
    DECREMENT
}  from './actionTypes';

export function incrementCounter(value){
    return {
        type: INCREMENT,
        payload: value
    }
}

export function decrementCounter(value){
    return {
        type: DECREMENT,
        payload: value
    }
}