
import {combineReducers} from 'redux'
import reducerCounter from './reducer'

export const rootReducer = combineReducers({
 counter: reducerCounter
})



