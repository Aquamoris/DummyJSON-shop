import React from 'react';
import {useParams} from "react-router-dom";
import {useFetchCurrentProductQuery} from "../../services/ProductsService.ts";

const Product:React.FC = () => {
    const {id} = useParams();
    const {data: product, error, isLoading} = useFetchCurrentProductQuery(id);

    if (isLoading) return <h3>Loading</h3>
    if (error) return <h3>Error</h3>

    return (
        <div>
            <h3>{product?.title}</h3>
        </div>
    );
};

export default Product;