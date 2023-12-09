import React, {useState} from "react";
import {useSearchProductsQuery} from "../../services/ProductsService.ts";
import ProductsCard from "../ProductCard/ProductsCard.tsx";
import style from './ProductsList.module.scss';
import Search from "../Search/Search.tsx";
const ProductsList:React.FC = () => {
    const [searchText, setSearchText] = useState<string>('');
    const {data: searchProducts, isLoading, error} = useSearchProductsQuery(searchText);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchText(e.currentTarget.value.trim());
    }

    if (isLoading) return <h3>Loading...</h3>
    if (error) return <h3>Error</h3>

    return (
        <div>
            <Search />
            <input value={searchText} onChange={handleChange}/>
            <div className={style.gridWrapper}>
                { searchProducts &&
                    searchProducts.products.map(p => (
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