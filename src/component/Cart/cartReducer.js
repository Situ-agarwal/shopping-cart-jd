import {addItemToCart,removeItemFromCart} from './cartUtils';

const INITIAL_STATE = {
  };

export const cartReducers =(state=INITIAL_STATE,action)=>{
    switch (action.type) {
        case 'ADD_ITEM_SUCCESS': return {
            ...state,
            cartItems: addItemToCart(state.cartItems, action.payload),
          };
          case 'SUBTRACT_ITEM_SUCCESS': return {
            ...state,
            cartItems: removeItemFromCart(state.cartItems, action.payload)
          };
          case'CLEAR_ITEM_FROM_CART':return {
                ...state,
                cartItems: state.cartItems.filter(
                  cartItem => cartItem.id !== action.payload.id
                )
          }
          case'CLEAR_CART':return{
              ...state,cartItems:action.payload
          }
            
          case'FETCH_CART':return{
              ...state,cartItems:action.payload
          }
        default:
            return state;
    }
}