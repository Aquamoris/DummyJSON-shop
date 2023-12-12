import React from 'react';
import style from './ProductCard.module.scss';
import {Link} from "react-router-dom";

interface Props {
    id: number,
    title: string,
    price: number,
    rating: number,
    brand: string,
    thumbnail: string,
}

const ProductsCard:React.FC<Props> = ({
                                        id, title, price, rating, brand, thumbnail
                                      }) => {
    return (
        <Link className={style.productItem} to={`/products/${id}`}>
                <div className={style.productImage}>
                    <img className='img-cover' src={thumbnail} alt="photo"/>
                </div>
                <div>
                    <span>{title}</span>
                    <span>{brand}</span>
                </div>
                    <div>{price} $</div>
                    <div>{rating}</div>
                <button>Add to Bag</button>
        </Link>
    );
};

export default ProductsCard;