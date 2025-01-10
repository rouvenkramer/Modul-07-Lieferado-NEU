
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

    renderBasket();

    renderBasketHeadline();

    renderBasketOrderButtons();

}

function calculateBasket(){

    totalAmount = 0;
    totalPrice = 0;

    for (let i = 0; i < basket.length; i++) {
        totalAmount += basket[i].amount;
        totalPrice += basket[i].amount * basket[i].price;
      }
      
      console.log("total amount is:", totalAmount);
}






