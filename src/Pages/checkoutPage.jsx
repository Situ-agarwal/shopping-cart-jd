import React from 'react';
import {Link} from 'react-router-dom'
import { connect } from 'react-redux';
import './checkoutPage.styles.css';
import {clearCart} from '../component/Cart/cartActions'
import CheckoutComp from '../component/Cart/checkout.component';
class CheckoutPage extends React.Component{
   /*  componentDidMount(){
        axios.get('http://omega.jdomni.com/omni-automation-tools/training/getAllCartItems?auth_key=6c55fa36a2138b23a52e74619bfdae147fa0c3e1')
        .then(res =>{
            this.props.onInit(res.data);
           
          })
         
    } */
    handleClick =()=>{
        this.props.clearCart();
    }
    render(){
        const {cartItems,products}=this.props;
        console.log('product',products);
        let total;
        if(cartItems!==undefined){
          const priceArr=cartItems.map(function(value){
            return value.cartQuantity*value.price

        })
        total=priceArr.reduce((a,b)=>a+b,0);
      
        
        console.log('price',total);
  return(
    <div className='main'>
      
  
  <span className=' checkout-page'>
    <div className='shopping'>
    <span className='shopping-cart'>Shopping Cart</span> <span className='shopping-item-details'>{` (${cartItems.length} items)`}</span> 
         <button className='remove-button' onClick={this.handleClick}>
      Clear Item
      </button> 
      </div>
      <div className='checkout-header'>
      <div className='header-block'>
        <span className='item-details'>Item Details</span>
      </div>
      <div className='header-block'>
        <span className='quantity'>Quantity</span>
      </div>
      <div className='header-block'>
        <span className='rate'>Rate</span>
      </div>
      <div className='header-block'>
        <span className='amount'>Amount</span>
      </div>
    </div>
    {cartItems.length!==0 && 
    cartItems.map(cartItem => (
      <CheckoutComp key={cartItem.id} cartItem={cartItem} />
    ))}
   <div className='continue-shop'><Link className='continue-link'to='/'><span className='arrowicon'>&#10094;</span>Continue Shopping</Link></div>
    
  </span>
  <span className=' footer'>
    <span className='total'><span className='totaldef'>Amount Payable:</span><i class="fa fa-inr" aria-hidden="true">{total}</i></span>
    <div className='checkout-btn'>Checkout</div>
    </span>
  </div>
  )}return null
}
}

const mapStateToProps = (state) => ({ cartItems: state.cartItemsReducer.cartItems,products: state.productReducer.products,

})
const mapDispatchToProps = dispatch => ({
    clearCart: () => dispatch(clearCart()),
    /* onInit:(item)=>dispatch(fetchCartData(item)) */
  });


export default connect(mapStateToProps,mapDispatchToProps)(CheckoutPage);
