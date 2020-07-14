import superagent from 'superagent';
const api= 'https://authenticated-api-darah.herokuapp.com/api/v1';
const token= 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRvbWEiLCJjYXBhYmlsaXRpZXMiOlsicmVhZCIsImNyZWF0ZSIsInVwZGF0ZSIsImRlbGV0ZSJdLCJpYXQiOjE1OTQ3NjY1NjAsImV4cCI6MTU5NDc2NzQ2MH0.25ewRhZnUxiRz3aMvpk8trMUYaijDD4vuFE-XXRSJHc';
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
