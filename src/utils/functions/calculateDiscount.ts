export const calculateOldPrice = (newPrice: number, discount: number) => {
    const discountPercentage = 100 - discount;

    return Math.floor(newPrice * 100 / discountPercentage);
}