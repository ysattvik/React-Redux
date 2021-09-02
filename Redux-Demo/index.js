// A small project on cofee and Ice cream shop
const redux = require('redux')
const reduxLogger=require('redux-logger')//redux-logger is a middleware

const createStore = redux.createStore
const combineReducer = redux.combineReducers//create combineReducer to create both reducer 

const applyMiddleware=redux.applyMiddleware
const logger=reduxLogger.createLogger()//creating create logger middle ware


//state property
const BUY_CAKE ='BUY-CAKE'
const BUY_ICECREAM='BUY_ICECREAM'


function buyCake()
{   return{
    type:BUY_CAKE,
    info: 'First redux action'
    }
}

function buyIceCream()
{   return{
    type:BUY_ICECREAM,
    info: 'First redux action'
    }
}

//action property
//reducer(prevState,action)=newstate

// const initialState = {
//     numOfCakes:10,
//     numOfIceCream: 20
// }

// cake initial state
const initialCakeState = {
    numOfCakes:10
}

//icecream initial state
const initialIceCreamState = {
        numOfIceCream:20
}

// const reducer = (state= initialState, action) =>{
//     switch(action.type){
//         case BUY_CAKE: return {
//             ...state,
//             numOfCakes: state.numOfCakes - 1
//         }
//         case BUY_ICECREAM: return {
//             ...state,
//             numOfIceCream: state.numOfIceCream - 1
//         }
//         default: return state
//     }
// }

//cake reducer
const cakeReducer = (state= initialCakeState, action) =>{
    switch(action.type){
        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes - 1
        }
        
        default: return state
    }
}

// IceCream reducer
const iceCreamReducer = (state= initialIceCreamState, action) =>{
    switch(action.type){
        case BUY_ICECREAM: return {
            ...state,
            numOfIceCream: state.numOfIceCream - 1
        }
        default: return state
    }
}

//define combineReducer to combine both reducer
const rootReducer=combineReducer({
    cake:cakeReducer,
    iceCream:iceCreamReducer
})

//reducer state
// const store = createStore(reducer)//Application state 

// const store = createStore(rootReducer)//rootReducer is combine reducer of cake and icecream

const store = createStore(rootReducer,applyMiddleware(logger))//apply middle ware logger
console.log('initial state',store.getState())//getState

// const unsubscribe = store.subscribe(() => console.log('updated state',store.getState()))//getState
const unsubscribe = store.subscribe(() => {})//due to logger middleware ,remove console .log method

store.dispatch(buyCake())//dispatch method ,here giving order of cake
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
unsubscribe()