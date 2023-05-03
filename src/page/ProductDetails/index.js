import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link, useParams} from "react-router-dom";
import {useDispatch} from "react-redux";



const ProductDetails = () => {
    const [details, setDetails] = useState({})
    const {id} = useParams()
    const dispatch = useDispatch()
    const getDetails = () => {
        return axios(`https://fakestoreapi.com/products/${id}`)
            .then((res) => setDetails(res.data))
    }
    const addToBasket = () => {
        dispatch({type: "ADD_TO_BASKET", payload: details})
    }
    useEffect(() => {
        getDetails()
    }, [])

    return (
        <div className="flex justify-center py-[50px] bg-black min-h-[90vh] ">
            <div className="flex items-center w-[70%] justify-between  rounded-2xl bg-slate-900 shadow-2xl">
                <img className="mx-28  rounded-2xl shadow-white" src={details.image} width={250} alt="img"/>
                <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{details.title}</h5>
                    <p className="mb-3 py-3 font-normal text-white dark:text-white">{details.description}</p>
                    <div className="flex justify-between">
                        <h5 className="mb-2 text-xl font-bold tracking-tight text-white dark:text-white"><span className="text-white">category :</span> {details.category}</h5>
                        <h2 className="mb-2 text-2xl font-bold tracking-tight text-green-700 dark: text-green-400">{details.price}$</h2>
                    </div>
                    <div className="flex justify-end pt-[10px]">
                        <button onClick={addToBasket}
                                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                            add basket
                        </button>
                        <Link to={"/product"}>
                            <button
                                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                                Назад
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;