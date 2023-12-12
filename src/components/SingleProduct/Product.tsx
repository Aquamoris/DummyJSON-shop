import React from 'react';
import {useParams} from "react-router-dom";
import {useFetchCurrentProductQuery} from "../../services/ProductsService.ts";
import {calculateOldPrice} from "../../utils/functions/calculateDiscount.ts";

const Product:React.FC = () => {
    const {id} = useParams();
    const {data: product, error, isLoading} = useFetchCurrentProductQuery(id ? id : '');

    if (isLoading) return <h3>Loading</h3>
    if (error) return <h3>Product not found :(</h3>

    let oldPrice = null;

    if (product?.price && product?.discountPercentage && product?.discountPercentage > 0) {
        oldPrice = calculateOldPrice(product.price, product.discountPercentage);
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
                {
                    oldPrice ? <div>
                                    <span><del>{oldPrice}</del> </span>
                                    <span>{product?.price} </span>
                                    <span>{product?.discountPercentage}%</span>
                                </div>
                              : <span>{product?.price} </span>
                }
            </div>
            <div>
                {
                    product?.images.map((i, index) => (
                        <img key={index} src={i} alt=""/>
                    ))
                }
            </div>
        </div>
    );
};

export default Product;