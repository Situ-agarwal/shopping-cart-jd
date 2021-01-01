export const addItem = (item) => (
    
    {
    type: 'ADD_ITEM',
    item 
   
})
  export const subtractItem = (item) => ({
    type: 'SUBTRACT_ITEM',
    item
  });
  export const clearItemFromCart = item => ({
    type: 'CLEAR_ITEM_FROM_CART',
    payload: item
  });
  export const clearCart = ()=>({
      type:'CLEAR_CART',
      payload:[]
  })
  export const fetchCartData = (item)  => ({
    
      type: 'FETCH_CART',
      payload:item
  });  
