import { put, takeLatest } from 'redux-saga/effects';
  
function * storeCartItems(item){
    console.log('item',item)
    
    const requestOptions = {
      method: 'POST',
     body: JSON.stringify({ product_id: item.item.id,auth_key:'6c55fa36a2138b23a52e74619bfdae147fa0c3e1',quantity:item.item.cartQuantity })
  };
 
  const URL ='http://omega.jdomni.com/omni-automation-tools/training/cartApi'
  
  const response= yield fetch(URL,requestOptions).then(response => response)
 if(response.status===200){
     if(item.type==='ADD_ITEM'){
    yield put({
        type: 'ADD_ITEM_SUCCESS',
        payload: item.item
      })}else if(item.type==='SUBTRACT_ITEM'){ 
      yield put({
        type: 'SUBTRACT_ITEM_SUCCESS',
        payload: item.item
      }) }
}}

export  default function* cartWatcher() {
    yield takeLatest('ADD_ITEM', storeCartItems)
    yield takeLatest('SUBTRACT_ITEM', storeCartItems)
}
