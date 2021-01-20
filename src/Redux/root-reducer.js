import { combineReducers } from 'redux';

import dataReducer from './data.reducer'

export default combineReducers({
    Data: dataReducer
})