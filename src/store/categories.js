const initialState = {
  categories: [
  ],
  activeCategory: 'food',
};
  
export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
  case 'change':
    return { categories: state.categories, activeCategory: payload };
  case 'GETCAT':
    const obj = {categories: payload.results, activeCategory: 'food'};
    console.log(obj);
    return obj;
  default:
    return state;
  }
};
  
export const changeActiveCategory = category => {
  return {
    type: 'change',
    payload: category,
  };
};

// { name: 'electronics', displayName: 'Elecronics' },
// { name: 'food', displayName: 'Food' },
// { name: 'clothing', displayName: 'Clothing' },
