// ! 9g
const calculateTotal = () => {
    const inputElement = document.querySelector(".js-cost-input");
    // * 1) ambil teks untuk input dari textbox
    let cost = Number(inputElement.value) * 100;
    console.log("ini adalah >>> " + typeof cost);
    // * 2) if cost < $40 add $10
    if (cost < 4000) {
        // fix cost by applying tips *100 and /100 which convert to cents then revert back to dollars
        cost = cost + 1000;
        fixCost = cost / 100;
    }

    document.querySelector(".displayTotalCost").innerHTML = `$${fixCost}`;
};

// bila tekan enter calculation akan ambil alih
const handleCostKeyDown = (event) => {
    if (event.key === "Enter") {
        calculateTotal();
    }
};

// ! 9h
let writeAnything = () => {
    let inputAnything = document.querySelector(".inputAnything").value;
    document.querySelector(".displayText9h").innerHTML = inputAnything;
};
