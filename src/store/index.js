import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { ItemReducer } from './reducers/CategoryReducer'
import { userReducer } from './reducers/userReducer'
import { LocationReducer } from './reducers/LocationReducer'

const rootReducer = combineReducers({
  ItemReducer,
  userReducer,
  LocationReducer
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))