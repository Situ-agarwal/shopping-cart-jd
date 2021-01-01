/* import { put, takeLatest ,call} from 'redux-saga/effects';
 import axios from 'axios'; 
function * fetchCartItems(){
    
    const FETCH_CART_LIST ='http://omega.jdomni.com/omni-automation-tools/training/getAllCartItems?auth_key=6c55fa36a2138b23a52e74619bfdae147fa0c3e1'
    
    const response= yield call(axios.get,FETCH_CART_LIST,
)
 if(response.status===200){
    console.log('response',response.data)
    yield put({
        type: 'FETCH_CART_SUCCESS',
        payload: response.data
      })
}}

export  default function* cartListWatcher() {
    yield takeLatest('FETCH_CART', fetchCartItems)
}
 */