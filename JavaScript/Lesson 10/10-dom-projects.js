// External JS

const buttonElement = document.querySelector(".js-subscribe-button");

// * Guna if-else statement untuk ubah atau manipulasi html

const wordChanging = () => {
    if (buttonElement.innerHTML === "Subscribe") {
        document.querySelector(".js-subscribe-button").innerHTML = "Subscribed";
        buttonElement.classList.add("is-subscribed");
    } else {
        document.querySelector(".js-subscribe-button").innerHTML = "Subscribe";
        buttonElement.classList.remove("is-subscribed");
    }
};
