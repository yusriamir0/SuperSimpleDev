const calculateTotal = () => {
    const inputElement = document.querySelector(".js-cost-input");
    // * 1) ambil teks untuk input dari textbox
    let cost = Number(inputElement.value);
    console.log("ini adalah >>> " + typeof cost);
    // * 2) if cost < $40 add $10
    if (cost < 40) {
        cost = cost + 10;
        console.log(cost);
    }

    document.querySelector(".displayTotalCost").innerHTML = `$${cost}`;
};

// bila tekan enter calculation akan ambil alih
const handleCostKeyDown = (event) => {
    if (event.key === "Enter") {
        calculateTotal();
    }
};
