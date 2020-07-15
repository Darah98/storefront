import superagent from 'superagent';
const api= 'https://authenticated-api-darah.herokuapp.com/api/v1';
const token= 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InNoYWxhYmkiLCJjYXBhYmlsaXRpZXMiOlsicmVhZCIsImNyZWF0ZSIsInVwZGF0ZSIsImRlbGV0ZSJdLCJpYXQiOjE1OTQ4Mzg1MTV9.lxX-Z2KjvbOs_mK-wPo_mi9DvfaiQIaq394GBJYruww';
// const initialState={ results: [] };

// export default (state = initialState, action) => {
//   const { type, payload } = action;
//   switch (type) {
//   case 'GET':
//     console.log(payload);
//     console.log(payload.results[0]);
//     return payload;
//   default:
//     return state;
//   }
// };
export const getCategories = function () {
  return (dispatch) => {
    return superagent.get(`${api}/categories`).then((response) => {
      dispatch(getCatAction({ results: response.body }));
    });
  };
};
export const getProductsData = function () {
  return (dispatch) => {
    return superagent.get(`${api}/products`).then((response) => {
      dispatch(getAction({ results: response.body }));
    });
  };
};
export const deleteProduct = function (product) {
  console.log(product);
  return (dispatch) => {
    return superagent.delete(`${api}/products/${product._id}`).set('Authorization', `Bearer ${token}`).then((response) => {
      superagent.get(`${api}/products`).then((response) => {
        dispatch(deleteAction({ results: response.body }));
      });
      // dispatch(deleteAction({results: response.body}));
    });
  };
};
export const getCatAction = (payload)=>{
  return {
    type: 'GETCAT',
    payload: payload,
  };
};
export const getAction = (payload)=>{
  return {
    type: 'GET',
    payload: payload,
  };
};
export const deleteAction = (payload)=>{
  return {
    type: 'DELETE',
    payload: payload,
  };
};
