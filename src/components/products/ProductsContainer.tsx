import React, {useEffect, useState} from "react";
import {useFetchProductsQuery} from "../../services/ProductsService.ts";
const ProductsContainer:React.FC = () => {
    const [products, setProducts] = useState([]);
    const {data: data, error, isLoading} = useFetchProductsQuery('');

    useEffect(() => {
        if (data) {
            setProducts(data.products)
        }
    }, [data]);

    console.log(products);

    if (isLoading) return <h3>Loading...</h3>
    if (error) return <h3>Error</h3>

    return (
        <div>

        </div>
    );
};

export default ProductsContainer;