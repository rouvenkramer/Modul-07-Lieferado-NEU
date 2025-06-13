
function loadBasket() {

    let basket = JSON.parse(localStorage.getItem('storedBasket')) || [];

}

function calculateBasket() {

    totalAmount = 0;
    totalPrice = 0;

    for (let i = 0; i < basket.length; i++) {
        totalAmount += basket[i].amount;
        totalPrice += basket[i].amount * basket[i].price;
    }

    console.log("total amount is:", totalAmount);
}


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
        let mobileBasketDiv = document.getElementById('mobileBasketContent');

        basketDiv.innerHTML += `
        <div class="basketMenuDiv">
             <div class="basketMenuButtonsDiv">
                    <button onclick="subFromBasket()" class="roundBasketButton">-</button>
                    <div class="basketMenusAmountDiv">${basketMenus.amount}</div>
                    <button onclick="addToBasket()" class="roundBasketButton">+</button>
                    <div class="basketMenusNameDiv">${basketMenus.name}</div>
            </div>
                    <div>
                         <button onclick = "deleteFromBasket(${i})">X</button>
                    </div>
        </div>
        `
        mobileBasketDiv.innerHTML += `
        <div>
        <div>${basketMenus.name} ${basketMenus.amount}</div>
        <button onclick = "deleteFromBasket(${i})">X</button>
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


function addToBasket(name, price) {

    alert(`${name} kostet: ${price.toFixed(2)}€`);

    let found = basket.find((item) => item.name === name);
    if (found) {
        // If found, increase the amount
        found.amount += 1;

      } else {
        // If not found, add a new item to the basket
        basket.push({ name: name, price: price, amount: 1 });
      }

    alert(JSON.stringify(basket));

    saveBasket();

    calculateBasket();

    updateMobileBasketWrapper();

    renderBasket();

    renderBasketHeadline();

    renderBasketOrderButtons();

}

function deleteFromBasket(index){
    alert([index]);
    basket.splice([index],1);

    saveBasket()

    calculateBasket();

    updateMobileBasketWrapper();

    renderBasket();

    renderBasketHeadline();

    renderBasketOrderButtons();
}

function updateMobileBasketWrapper() {

    const wrapper = document.getElementById("mobileBasketWrapper");
    const amount = totalAmount;
    const mediaQuery = window.matchMedia('(min-width: 1024px)');
    if (wrapper) {
        if (amount === 0 || mediaQuery.matches) {
            wrapper.style.display = 'none';
        }
        else { wrapper.style.display = ''; }
    };
}
// Add the resize event listener to keep styles in sync
window.addEventListener('resize', updateMobileBasketWrapper);



function expandMobileBasket(){
const wrapper = document.getElementById("mobileBasketWrapper");
wrapper.style.display='flex';
}

function closeMobileBasket(){
    const wrapper = document.getElementById("mobileBasketWrapper");
    wrapper.style.display='none';
    }



function saveBasket(){
    localStorage.setItem('storedBasket', JSON.stringify(basket));
}