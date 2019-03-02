import { combineReducers } from 'redux'

import {increment_reduxer} from './sample/count';
import {findall_friend_reducer} from "./friends/friend";

const rootReducer = combineReducers({
    increment_reduxer,
    findall_friend_reducer
})

export default rootReducer;
