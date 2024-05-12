// 10c
// Check whether there is class list of js-button
const verifyJSButton = document
    .querySelector(".js-button")
    .classList.contains("js-button");
console.log(verifyJSButton);

// 10d
// Gaming, Music, Tech button will ON / OFF when clicked
const styleChangeGaming = () => {
    const buttonStyle = document.querySelector(".gaming-button");
    if (!buttonStyle.classList.contains("is-toggled")) {
        buttonStyle.classList.add("is-toggled");
    } else {
        buttonStyle.classList.remove("is-toggled");
    }
    // alternative way using toggle()
    // buttonStyle.classList.toggle("is-toggled");
};

// 10e, 10f
// Music, Tech button will ON / OFF when clicked
const styleChangeMusic = () => {
    const buttonStyle = document.querySelector(".music-button");
    if (!buttonStyle.classList.contains("is-toggled")) {
        buttonStyle.classList.add("is-toggled");
    } else {
        buttonStyle.classList.remove("is-toggled");
    }
};

const styleChangeTech = () => {
    const buttonStyle = document.querySelector(".tech-button");
    if (!buttonStyle.classList.contains("is-toggled")) {
        buttonStyle.classList.add("is-toggled");
    } else {
        buttonStyle.classList.remove("is-toggled");
    }
};

// Challenge exercises //

// 10g
// Only 1 button can click at a time
const oneAtTime = (selector) => {
    const buttonStyle = document.querySelector(selector);
    if (!buttonStyle.classList.contains("is-toggled")) {
        removeClickedButton();
        buttonStyle.classList.add("is-toggled");
    } else {
        buttonStyle.classList.remove("is-toggled");
    }
};
const removeClickedButton = () => {
    const previousButton = document.querySelector(".is-toggled");
    if (previousButton) {
        previousButton.classList.remove("is-toggled");
    }
};
