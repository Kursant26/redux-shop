import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {BsBasket2Fill} from "react-icons/bs";
import {Link} from "react-router-dom";
import {AiTwotoneHeart} from "react-icons/ai";

const ProductCard = ({product}) => {
    const dispatch = useDispatch()
    const {favorites} = useSelector(s => s.favorites)
    const {basket} = useSelector(s => s.basket)
    const heart = favorites.some(some => some.id === product.id)
    const bas = basket.some(some => some.id === product.id)
    const addToBasket = () => {
        dispatch({type: "ADD_TO_BASKET", payload: product})
    }

    const favoriteBtn = () => {
        dispatch({type: "ADD_TO_FAVORITE", payload: product})
    }

    return (
        <div
            className="max-w-sm bg-white border border-gray-200 shadow-2xl rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <Link to={`/details/${product.id}`}>
                <img className="rounded-t-lg
                " src={product.image} alt=""/>
            </Link>
            <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {product.title}</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {product.description}</p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {product.price}$</p>
                {
                    bas ?
                        <Link to={"/basket"}>
                            <button type="button"
                                    className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                                <BsBasket2Fill/>
                            </button>
                        </Link>
                     :
                        <button onClick={addToBasket}
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                        add basket
                    </button>

                }
                <button onClick={favoriteBtn}
                        className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                    <AiTwotoneHeart className={heart ? "text-red-600 " : "text-white "}/>
                </button>
            </div>
        </div>

    );
};

export default ProductCard;