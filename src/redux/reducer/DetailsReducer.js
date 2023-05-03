// import axios from "axios";
// import {id} from "../../page/ProductDetails"
// const  initialState = {
//     details: {}
// }
//
// export const getDetails = () => {
//     return async (dispatch) => {
//         try {
//             const url = await axios(`https://fakestoreapi.com/products/${id}`)
//             const {data} = await url
//             dispatch({type: "GET_PRODUCT", payload: data})
//         } catch (e) {
//             console.log(e)
//         }
//     }
// }
//
// export const DetailsReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case "GET_DETAILS":
//             return {...state, details: action.payload}
//         default:
//             return state
//     }
// }