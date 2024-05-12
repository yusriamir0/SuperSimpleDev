const calculateTotal = () => {
    const inputElement = document.querySelector(".js-cost-input");

    // use '' for reset input
    document.querySelector(".displayTotalCost").innerHTML = "";
    document.querySelector(".errorMessage").innerHTML = "";

    // * 1) ambil teks untuk input dari textbox
    let cost = Number(inputElement.value);
    // * 2) if cost < $40 add $10
    if (cost < 40) {
        cost = cost + 10;
        document.querySelector(".displayTotalCost").innerHTML = `$${cost}`;
    } else {
        document.querySelector(".displayTotalCost").innerHTML = `$${cost}`;
    }

    // if less than $0 display error message
    if (cost <= 0) {
        document.querySelector(".errorMessage").innerHTML =
            "Error: cost cannot be less than $0 ";
        document.querySelector(".displayTotalCost").innerHTML = "";
    }
};

// bila tekan enter calculation akan ambil alih
const handleCostKeyDown = (event) => {
    if (event.key === "Enter") {
        calculateTotal();
    }
};
