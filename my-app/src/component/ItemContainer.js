import React from 'react'
import { connect } from 'react-redux'
import { buyCake, buyIceCream } from '../redux'

function ItemContainer(props) {
    return (
        <div>
            <h2>Item-{props.item}</h2>
            <button onClick={props.buyItem}>Buy Items</button>
        </div>
    )
}
const mapStateToProps = (state, ownProps) =>{
    const itemState = ownProps.cake
    ? state.cake.numOfCakes
    : state.icecream.numOfIceCream
    return{
        item:itemState
    }
}

const mapDispatchToProps =(dispatch, ownProps)=>{
    const dispatchFuction=ownProps.cake
    ? () => dispatch(buyCake())
    : () => dispatch(buyIceCream())
    return{
        buyItem: dispatchFuction
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ItemContainer)
