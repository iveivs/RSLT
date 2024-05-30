const groceries = {
    "73Wakv": {
        name: "Orange Juice",
        price: 1.5,
        discount: 10
    },
    "5L3db9": {
        name: "Chocolate",
        price: 2,
        discount: 0
    }
    // more items...
};

function getTotalPriceOfShoppingBag(shoppingBagArray) {
    if (shoppingBagArray.length === 0) {
        return 0;
    }

    const totalPrice = shoppingBagArray.reduce((acc, { productId, count }) => {
        if (!groceries[productId]) return acc;
        const { price, discount } = groceries[productId];
        const priceWithDiscount = price - (price / 100) * discount;
        return acc + priceWithDiscount * count;
    }, 0);

    return Number(totalPrice.toFixed(2));
}

const shoppingBag = [
    { productId: "73Wakv", count: 3 },
    { productId: "5L3db9", count: 23 }
];

const totalPrice = getTotalPriceOfShoppingBag(shoppingBag);
console.log("totalPrice", totalPrice); // Возвращает 50.05

// 
