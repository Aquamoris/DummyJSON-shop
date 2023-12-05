import React, {useEffect, useState} from 'react';
import axios from "axios";

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            axios
                .get('https://dummyjson.com/products')
                .then(response => response.data.products)
                .then(data => setProducts(data));
        }

        getProducts();
    }, []);

    console.log(products);

    return (
        <div>
            {
                products.map(p => (
                    <div key={p.id}>{p.title} {p.description}</div>
                ))
            }
        </div>
    );
};

export default Products;