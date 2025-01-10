
function resetBasket() {

    let basketDiv = document.getElementById("basketContent");
    let mobileBasketDiv = document.getElementById("mobileBasketContent");

    basketDiv.innerHTML = ``;
    mobileBasketDiv.innerHTML = ``;
}

function renderBasket() {

    resetBasket();

    let basket = JSON.parse(localStorage.getItem('storedBasket')) || [];

    renderBasketOrderButtons();

    for (let i = 0; i < basket.length; i++) {
        let basketMenus = basket[i];
        let basketDiv = document.getElementById("basketContent");
        basketDiv.innerHTML += `
        <div>
        <div>${basketMenus.name} ${basketMenus.amount}</div>
        <button onclick = "deleteFromBasket()">X</button>
        </div>
        `
    }
}


function renderBasketOrderButtons() {

    let basketOrderButton = document.getElementById("orderButton");
    let mobileBasketOrderButton = document.getElementById("mobileBasketOrderButton");
    let mobileBasketHeadline = document.getElementById("mobileBasketHeadline");
    let sum = totalPrice.toFixed(2);

    if (totalAmount === 0) {
        basketOrderButton.innerHTML = "BESTELLEN";
        mobileBasketOrderButton.style.display = "none";
    } else {
        basketOrderButton.innerHTML = `BESTELLEN FÜR ${sum} €`;
        mobileBasketOrderButton.style.display = "flex";
        mobileBasketHeadline.innerHTML = `BESTELLEN FÜR ${sum} €`;
    }
}

function renderBasketHeadline() {
    let basketHeadline = document.getElementById("basketHeadline");

    if (totalAmount < 1) {
        basketHeadline.innerHTML = `WARENKORB:<br>empty`;
    } else {
        if (totalAmount === 1) {
            basketHeadline.innerHTML = `WARENKORB:<br>${totalAmount} ITEM`;
        } else {
            basketHeadline.innerHTML = `WARENKORB:<br>${totalAmount} ITEMS`;
        }
    }
}

function deleteFromBasket(){

    alert('Hello');

}