import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import ProductCard from "./ProductCard";
import {getProduct} from "../../redux/reducer/reducer";

const Product = () => {
    const dispatch = useDispatch()

    const {product} = useSelector(state => state.main)
    useEffect(() => {
        dispatch(getProduct())

    }, [])

    return (
        <div className="container basis-3/12 py-10 ">
            <div className="flex flex-wrap justify-center gap-14">
                {
                    product.map((el) => (
                        <ProductCard product={el}/>
                    ))
                }
            </div>
        </div>
    );
};

export default Product;