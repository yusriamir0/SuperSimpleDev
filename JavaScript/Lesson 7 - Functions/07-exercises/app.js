// ! 7a create function that display message Hello!
const greet = (name) => {
    // ! 7c create if-else function if there is a falsy or truthy value
    if (name === undefined) {
        return "Hi there";
    } else {
        return `Hello ${name}`;
    }
};
// ! 7b define value
console.log(greet());
console.log(greet("Simon"));

// ! 7d function that convert Celsius to Fahrenheit
const convertToFahrenheit = (celsius, unit) => {
    const fahrenheit = (celsius * 9) / 5 + 32;
    return fahrenheit + unit;
};
console.log(convertToFahrenheit(25, "F"));

// ! 7e function that convert F to C
const convertToCelsius = (fahrenheit, unit) => {
    const celsius = ((fahrenheit - 32) * 5) / 9;
    return celsius + unit;
};
console.log(convertToCelsius(86, "C"));

// ! 7f refactor code in 7d and 7e by including units

// ! 7g convert length to another unit that takes number and unit
const convertLength = (length, from, to) => {
    if (from == "miles" && to == "km") {
        return length * 1.6 + to;
    } else if (from == "km" && to == "miles") {
        return length / 1.6 + to;
    } else {
        return length + to;
    }
};
console.log(convertLength(50, "miles", "km"));
console.log(convertLength(32, "km", "miles"));
console.log(convertLength(50, "km", "km"));

// ! 7h create function that takes 2 objects and check if they are the same
