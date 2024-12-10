export const addToCart = (product) => ({
    type: 'cart/addToCart',
    payload: product,
  });
  
  export const removeFromCart = (productId) => ({
    type: 'cart/removeFromCart',
    payload: productId,
  });

  export const incrementItem = (id) => ({
    type: "INCREMENT_ITEM",
    payload: id,
  });
  
  export const decrementItem = (id) => ({
    type: "DECREMENT_ITEM",
    payload: id,
  });