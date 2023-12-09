import React from 'react';
import {useParams} from "react-router-dom";
import {useFetchCurrentProductQuery} from "../../services/ProductsService.ts";

const Product:React.FC = () => {
    const {id} = useParams();
    const {data: product, error, isLoading} = useFetchCurrentProductQuery(id ? id : '');

    if (isLoading) return <h3>Loading</h3>
    if (error) return <h3>Error</h3>

    let oldPrice = null;

    if (product?.price && product?.discountPercentage) {
        const newPrice = +product.price;
        const discount = 100 - (+product.discountPercentage);

        oldPrice = Math.floor(newPrice * 100 / discount);
    }

    return (
        <div>
            <img src={product?.thumbnail} alt="avatar"/>
            <div>
                <span>{product?.title}</span>
                <span>{product?.brand}</span>
            </div>
            <div>{product?.description}</div>
            <div>{product?.category}</div>
            <div>{product?.rating}</div>
            <div>
                <span><del>{oldPrice}</del> </span>
                <span>{product?.price} </span>
                <span>{product?.discountPercentage}%</span>
            </div>
            <div>
                {
                    product?.images.map(i => (
                        <img src={i} alt=""/>
                    ))
                }
            </div>
        </div>
    );
};

export default Product;