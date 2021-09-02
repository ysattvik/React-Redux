import {BUY_ICECREAM} from './IceCreamTypes'

export const buyIceCream = (number=1)=>{
    return{
            type:BUY_ICECREAM,
            payload: number
    }   
}