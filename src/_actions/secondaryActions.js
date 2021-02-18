import {
   ADD_PLACE,
   ADD_NAME
}  from './actionTypes';

export function addName(value){
    return {
        type: ADD_NAME,
        payload: value
    }
}

export function addPlace(value){
    return {
        type: ADD_PLACE,
        payload: value
    }
}