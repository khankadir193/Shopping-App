import { combineReducers } from "redux";
import dataReducer  from './dataReducer'

const reducers = combineReducers({
    value:dataReducer
})

export default reducers;