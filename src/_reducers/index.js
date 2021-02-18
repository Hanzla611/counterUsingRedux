import { combineReducers } from 'redux';
import counter from './counterReducers';
import secondary from './secondaryReducer';

const rootReducer = combineReducers({
    counter,
    secondary
});

export default rootReducer;