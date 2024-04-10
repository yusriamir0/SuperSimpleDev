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

// * 8e - create function isSameProduct() which return true if same value
const isSameProduct = (product1, product2) => {
    if (product1.price === product2.price && product1.name === product2.name) {
        return true;
    } else {
        return false;
    }
};
const yamaha = {
    name: "Y15",
    price: 15000,
};
const honda = {
    name: "RS15",
    price: 15000,
};
const yamaha2020 = {
    name: "Y15",
    price: 15000,
};
console.log(isSameProduct(yamaha, honda));
console.log(isSameProduct(yamaha, yamaha2020));

// * 8f - convert to lowercase
const product = {
    name: "BALENCIAGA",
};
const lowCaseProduct = product.name.toLowerCase();
console.log(lowCaseProduct);

// * 8g - repeat string
const repeatProductName = product.name.repeat(2);
console.log(repeatProductName);

// * 8h
