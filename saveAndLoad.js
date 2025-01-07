function saveBasket(){

    localStorage.setItem('storedBasket', JSON.stringify(basket));

}

function loadBasket(){

    let basket = JSON.parse(localStorage.getItem('storedBasket')) || [];

}