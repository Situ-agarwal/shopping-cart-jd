import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import {fetchCartData} from '../Cart/cartActions'
const getTotalCartItem=(itemCount)=>{
    if(itemCount!==undefined){
    const cartQuantity= itemCount.map(function(value) {
        return value.cartQuantity;
      })
      console.log('cartQty',cartQuantity.reduce((a, b) => a + b, 0)
      )
    return  cartQuantity.reduce((a, b) => a + b, 0)}
    else return null

}
  class CartIcon extends React.Component{
      componentDidMount(){
        axios.get('http://omega.jdomni.com/omni-automation-tools/training/getAllCartItems?auth_key=6c55fa36a2138b23a52e74619bfdae147fa0c3e1')
        .then(res =>{
            this.props.onInit(res.data);
           
          })
         
    }
    render(){
        const {itemCount,productCount}=this.props;
        console.log('itemCount',itemCount)
        console.log('productCount',productCount)
        const cartItem=getTotalCartItem(itemCount);
        
        return(
<div className='item-count'>{`Cart(${cartItem})`}</div>
    )};
      
    }
 
   
   
  

const mapStateToProps = state=>({
  itemCount: state.cartItemsReducer.cartItems,
  productCount: state.productReducer.products,
});
const mapDispatchToProps = dispatch => ({
    onInit:(item)=>dispatch(fetchCartData(item))
  });
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartIcon);
