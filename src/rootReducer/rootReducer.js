import {combineReducers} from 'redux';
import {productReducers} from '../component/ProductList/productReducers'
import {cartReducers} from '../component/Cart/cartReducer';
export default combineReducers({
    productReducer:productReducers,
    cartItemsReducer:cartReducers
  })