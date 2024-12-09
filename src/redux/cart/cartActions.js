export const addToCart = (product) => ({
    type: 'cart/addToCart',
    payload: product,
  });
  
  export const removeFromCart = (productId) => ({
    type: 'cart/removeFromCart',
    payload: productId,
  });