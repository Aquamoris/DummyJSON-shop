import React, {useEffect, useState} from "react";
import {useSearchProductsQuery} from "../../services/ProductsService.ts";
import ProductsCard from "../ProductCard/ProductsCard.tsx";
import style from './ProductsList.module.scss';
import {Product} from "../../utils/types/Product.ts";
import {sortProductNumber} from "../../utils/functions/sortProducts.ts";

const ProductsList:React.FC = () => {
    const [products, setProducts] = useState<Product[]>([])
    const [searchText, setSearchText] = useState<string>('');
    const [priceFilter, setPriceFilter] = useState<boolean>(false);

    const {data: searchProducts, isLoading, error} = useSearchProductsQuery(searchText);

    useEffect(() => {
        if (searchProducts) {
            if (priceFilter) {
                const productsToSort: Product[] = [...searchProducts.products];
                setProducts(productsToSort.sort(sortProductNumber('price', true)));
            } else {
                setProducts(searchProducts.products);
            }
        }
    }, [searchProducts, priceFilter]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchText(e.currentTarget.value.trim());
    }

    if (isLoading) return <h3>Loading...</h3>
    if (error) return <h3>Error</h3>

    return (
        <div>
            <input value={searchText} onChange={handleChange}/>
            <div>
                <input type="checkbox"
                       checked={priceFilter}
                       onChange={() => setPriceFilter(!priceFilter)}
                />
            </div>
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
        </div>
    );
};

export default ProductsList;