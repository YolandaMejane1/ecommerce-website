
export const setProducts = (products) => ({
    type: 'product/setProducts',
    payload: products,
  });
  
  export const filterProducts = (query) => ({
    type: 'product/filterProducts',
    payload: query,
  });