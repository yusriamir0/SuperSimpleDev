
// External JS
const buttonElement = document.querySelector(".js-subscribe-button");

// * Guna if-else statement untuk ubah atau manipulasi html

function wordChanging() {
    if (buttonElement.innerHTML === "Subscribe") {
        document.querySelector(".js-subscribe-button").innerHTML = "Subscribed";
    } else {
        document.querySelector(".js-subscribe-button").innerHTML = "Subscribe";
    }
}
