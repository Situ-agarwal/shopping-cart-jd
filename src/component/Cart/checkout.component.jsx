import React from 'react';
import { connect } from 'react-redux';

import {
  clearItemFromCart,
  addItem,
  subtractItem
} from './cartActions';

import './checkout.styles.css';

const CheckoutComp = ({ cartItem, clearItem, addItem, subtractItem }) => {
  const { name, imageUrl, price, cartQuantity } = cartItem;
  if(cartItem.cartQuantity===0){
    clearItem(cartItem);
  }
  const addBtnClick=(item)=>{
    item.cartQuantity=item.cartQuantity+1;
    addItem(item)
  }
  const subBtnClick=(item)=>{
    item.cartQuantity=item.cartQuantity-1;
    subtractItem(item)
  }
  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img src={imageUrl} alt='item' />
      </div>
     <div className='description'>
      <span className='name'>{name}</span>
      <div className='remove-button' onClick={() => clearItem(cartItem)}> &#10005;<span className='remove'>REMOVE</span></div>
      </div>
      <span className='quantity'>
        <div className='arrow' onClick={() => subBtnClick(cartItem)}>
          &#10094;
        </div>
        <span className='value'>{cartQuantity}</span>
        <div className='arrow' onClick={() => addBtnClick(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className='price'><i class="fa fa-inr" aria-hidden="true">{price}</i></span>
      <span className='price'><i class="fa fa-inr" aria-hidden="true">{cartQuantity*price}</i></span>
 
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(clearItemFromCart(item)),
  addItem: item => dispatch(addItem(item)),
  subtractItem: item => 
    dispatch(subtractItem(item))
});

export default connect(
  null,
  mapDispatchToProps
)(CheckoutComp);
