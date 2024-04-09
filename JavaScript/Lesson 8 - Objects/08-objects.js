const product = {
    name: "socks",
    price: 1090,
    "delivery-time": "1 day",
    rating: {
        stars: 4.5,
        count: 87,
    },
    fun: function fungsi() {
        console.log("function inside object");
    },
};
product.name = "cotton socks"; // contoh
console.log(product["name"]);
console.log(product["delivery-time"]);

console.log(product.rating.count);
product.fun();

let log = "";
console.log(typeof console.log);

console.log(JSON.stringify(product)); //* menyebabkan result akan keluar dalam bentuk string sahaja

const jsonString = JSON.stringify(product);
console.log(JSON.parse(jsonString));

// ----------------------------------------------------------------
console.log("hello World".length);
console.log("hello World".toLocaleUpperCase());

//* Object Reference
const object1 = {
    messsage: "Hello",
};
const object2 = object1;
object1.messsage = "Hola";
const object3 = {
    messsage: "Salamat",
};
console.log(object1 === object3);
console.log(object2);
//* Destructruting

const object4 = {
    message: "Hello",
    price: 40,
};
// const messsage = object4.messsage;
const { message, price } = object4;
console.log(message);
console.log(price);

// * shorthand property & Method
const object5 = {
    // messsage: messsage,
    message, // property
    // method: function function1() {
    //     console.log("function inside object");
    // },
    method() {
        //* shorthand method
        console.log("function inside object");
    },
};
console.log(object5);

object5.method();
