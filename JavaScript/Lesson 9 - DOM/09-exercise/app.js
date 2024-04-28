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

// ! 9d - display input text after click on button
// * 9d create function so that when user input value then click submit button text will appear based on input
const inputName9d = document.querySelector(".inputName9d");
const nameAppear = () => {
    const valueInputName9d = inputName9d.value;
    document.querySelector(".displayText9d").innerHTML = valueInputName9d;
};
// * 9e add function so that when click enter text will appear
const handleNameKeyDown = (peristiwa) => {
    if (peristiwa.key === "Enter") {
        nameAppear();
    }
};
