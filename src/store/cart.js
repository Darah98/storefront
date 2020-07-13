const initialState ={
  cartItems:[
    
  ],
  totalCartItems:0,
};
  
export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
  case 'addToCart':
    let exists = false;
    for(let i = 0; i < state.cartItems.length; i++){
      if(state.cartItems[i].name === payload.name){
        exists = true;
        state.cartItems[i].inCart += 1;
        state.totalCartItems += 1;
      }
    }
    if(!exists){
      state.cartItems.push(payload);
      state.totalCartItems += 1;
    }
    return state;
  default:
    return state;
  }
};
  
export const addToCart = product => {
  return {
    type: 'addToCart',
    payload: product,
  };
};