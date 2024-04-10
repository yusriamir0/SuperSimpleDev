// * 8a - object that represent basketball
const basketballObject = {
    name: "basketball",
    price: 2095,
};
console.log(basketballObject);

// * 8b - increase price by 500 and display the updated price object
basketballObject.price += 500;
console.log(basketballObject.price);

// * 8c - using bracket notation and add delivery time and display updated property
basketballObject["delivery-time"] = "3 days";
console.log(basketballObject);

// * 8d - create a function comparePrice() and return price that is less expensive

const comparePrice = (product1, product2) => {
    if (product1.price < product2.price) {
        return product1;
    } else {
        return product2;
    }
};
const adidas = {
    name: "adidas",
    price: 100,
};
const nike = {
    name: "nike",
    price: 200,
};
console.log(comparePrice(nike, adidas));

