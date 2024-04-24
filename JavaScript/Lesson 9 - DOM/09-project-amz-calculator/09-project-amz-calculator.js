const calculateTotal = () => {
    const inputElement = document.querySelector(".js-cost-input");
    // * 1) ambil teks dari textbox
    let cost = inputElement.value;
    console.log(cost);
    // * 2) if cost < $40 add $10
    if (cost < 40) {
        cost = parseInt(cost) + 10;
        console.log(typeof cost);
    }

    document.querySelector(".displayTotalCost").innerHTML = `$${cost}`;
};
