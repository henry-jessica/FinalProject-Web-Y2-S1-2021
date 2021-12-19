(function () {
 //first we get the cart objects from local storage
 var cartProducts = JSON.parse(localStorage.getItem("cartProducts"));
 console.log(cartProducts);

 //then the total number of items in the cart
 var cartTotal = localStorage.getItem("totalItems");
 console.log(cartTotal);

 //and finally the total price of all items
 var totalPrice = parseFloat(localStorage.getItem("totalPrice"));
 console.log(totalPrice);

 //we call our function to update the button
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