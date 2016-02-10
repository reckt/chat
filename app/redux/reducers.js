import { combineReducers } from 'redux';
import { SIGNIN } from './actions';

function signin(state, action) {
    switch (action.type) {
        case SIGNIN:
        return action.username;
        default:
        return state;
    }
}

const chatApp = combineReducers({
    username: signin
});

export default chatApp;
