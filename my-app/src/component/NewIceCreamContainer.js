import React,{useState} from 'react';
import { connect } from 'react-redux';
import {buyIceCream} from '../redux'

function IceCreamContainer(props) {
    const[number, setNumber]= useState(1)
    return (
        <div>
            <h2>Number of Ice Cream-{props.numOfIceCream}</h2>
            <input type="text" value={number} onChange={e => setNumber(e.target.value)}/>
            <button onClick={() =>props.buyIceCream(number)}>Buy {number} IceCream</button>
        </div>
    )
}

const mapStateToProps = state => {
    return{
        numOfIceCream: state.icecream.numOfIceCream
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        buyIceCream: number => dispatch (buyIceCream(number))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(IceCreamContainer)

