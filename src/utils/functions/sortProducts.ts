import type {Product} from "../types/Product.ts";

export const sortProductNumber = (key: 'price' | 'rating' | 'discountPercentage' = 'price', increase: boolean = true) => {
    if (increase) {
        return (a: Product, b: Product) => +a[key] > +b[key] ? 1 : -1;
    } else {
        return (a: Product, b: Product) => +a[key] < +b[key] ? 1 : -1
    }
}