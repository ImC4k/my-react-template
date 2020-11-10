import { combineReducers } from 'redux';
import userProfileReducer from './userProfile.reducer';

const rootReducer = combineReducers({
    userProfileReducer,
});

export default rootReducer;