import React, {useEffect, useState} from "react";
import {useFetchProductsQuery} from "../../services/ProductsService.ts";
import ProductsCard from "../ProductCard/ProductsCard.tsx";
import style from './Products.module.scss';
import type {Product} from "../../types/Product.ts";
const ProductsContainer:React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const {data: data, error, isLoading} = useFetchProductsQuery('');

    useEffect(() => {
        if (data) {
            setProducts(data.products);
        }
    }, [data]);

    if (isLoading) return <h3>Loading...</h3>
    if (error) return <h3>Error</h3>

    return (
        <div className={style.gridWrapper}>
            {
                products.map(p => (
                    <ProductsCard
                        key={p.id}
                        id={p.id}
                        title={p.title}
                        price={p.price}
                        rating={p.rating}
                        brand={p.brand}
                        thumbnail={p.thumbnail}
                    />
                ))
            }
        </div>
    );
};

export default ProductsContainer;