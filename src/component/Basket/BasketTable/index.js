import React from 'react';
import {useDispatch} from "react-redux";

const BasketTable = ({el}) => {
    const dispatch = useDispatch()

    const delProduct = () => {
        dispatch({type: "DEL_PRODUCT", payload: el})
    }

    const addToBasket = () => {
        dispatch({type: "ADD_TO_BASKET", payload: el})
    }
    const decBasket = () => {
        dispatch({type: "DEC_BASKET", payload: el})
    }

    return (
        <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
            <td className="px-6 py-4">
                <img src={el.image} width={100} alt=""/>
            </td>
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {el.title}
            </th>
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <div className="flex">
                    <button onClick={decBasket}>-</button>
                    <p className="mx-2">{el.count}</p>
                    <button onClick={addToBasket}>+</button>
                </div>
            </th>
            <td className="px-6 py-4">
                {el.price * el.count}$
            </td>
            <td className="px-6 py-4">
                <button onClick={delProduct}
                        className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                    Delete
                </button>
            </td>

        </tr>
    );
};

export default BasketTable;