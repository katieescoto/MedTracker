import {createStore, combineReducers, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

function dummyReducer (state = {}, action){
  return state
}

const middleware = composeWithDevTools(applyMiddleware(thunkMiddleware, createLogger()))

const store = createStore(dummyReducer, middleware)

export default store
