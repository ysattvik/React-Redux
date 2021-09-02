import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import rootReducer from './rootReducer'
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension';
// import cakeReducer from './cakes/cakeReducer'

// const store= createStore(cakeReducer)

// const store= createStore(rootReducer, applyMiddleware(logger))
const store= createStore
(rootReducer, 
    composeWithDevTools(applyMiddleware(logger, thunk)))
export default store