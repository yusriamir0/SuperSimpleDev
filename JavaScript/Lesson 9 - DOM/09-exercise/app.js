// ! 9a - using querySelector on button element to display on console
const buttonElement9a = document.querySelector("button");
console.log(buttonElement9a);

// ! 9b - change text on button element
document.querySelector(".button9b").innerHTML = "9b done!";

// ! 9c - display text for each button name element

const displayText = (butang) => {
    if (butang.innerHTML === "heads") {
        document.querySelector(".displayPara").innerHTML = "You chose : heads";
    } else if (butang.innerHTML === "tails") {
        document.querySelector(".displayPara").innerHTML = "You chose : tails";
    }
};
