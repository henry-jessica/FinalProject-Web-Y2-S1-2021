(function () {
 //get object 
 const cartProducts = JSON.parse(localStorage.getItem("cartProducts"));
 console.log(cartProducts);

 //total of items 
 let cartTotal = localStorage.getItem("totalItems");
 console.log(cartTotal);

 //total price
 let totalPrice = parseFloat(localStorage.getItem("totalPrice"));
 console.log(totalPrice);

 //button
 UpdateBuyButton(cartTotal, totalPrice);
})();

function UpdateBuyButton(cartTotal, totalPrice) {
 let button = document.getElementById("buy-button");
 button.value += " ~ " + cartTotal + " items ~ Total = €" + totalPrice;

 button.addEventListener("click", Clear, false);
}

function Clear() {
 //this function is called when the items are purchased, making sure we have cleared localstorage
 localStorage.clear();
}