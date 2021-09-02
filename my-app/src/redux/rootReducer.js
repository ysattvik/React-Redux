import { combineReducers } from "redux";
// import CakeContainer from "../component/CakeContainer";
import cakeReducer from "./cakes/cakeReducer";
import IceCreamReducer from './iceCream/IceCreamReducer'
import UserReducer from "./user/UserReducer";


const rootReducer = combineReducers({
    cake:cakeReducer,
    icecream:IceCreamReducer,
    user:UserReducer

})

export default rootReducer