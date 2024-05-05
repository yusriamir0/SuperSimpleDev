// 10c
// Check whether there is class list of js-button
const verifyJSButton = document
    .querySelector(".js-button")
    .classList.contains("js-button");
console.log(verifyJSButton);

// 10d
// Gaming button will ON / OFF when clicked
const buttonGamingStyle = document.querySelector(".gaming-button");
const styleChange = () => {
    if (!buttonGamingStyle.classList.contains("is-toggled")) {
        buttonGamingStyle.classList.add("is-toggled");
    } else {
        buttonGamingStyle.classList.remove("is-toggled");
    }

    // alternative way using toggle()
    // buttonGamingStyle.classList.toggle("is-toggled");
};
