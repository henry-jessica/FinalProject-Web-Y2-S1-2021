(function () {
    
    var cartProducts = JSON.parse(localStorage.getItem("cartProducts"));
    console.log(cartProducts);

    CheckSignIn();
    CheckZero(cartProducts);
    RenderCart(cartProducts);
    // console.log('test', cartProducts.length); 

})();

function RenderCart(cartProducts) {
    const root = document.getElementById("root");
    const container = document.createElement("div");
    container.setAttribute("class", "container");
    root.appendChild(container);

    const totalItems = document.createElement('p');
    totalItems.textContent = "Items : " + cartProducts.length;
    totalItems.style.fontSize = "2em";
    totalItems.style.float = "left";
    

    // Remove duplicate products and show just one with more quantity
    const convert = (arr) => {
        const res = {};
        arr.forEach((obj) => {
            const key = `${obj.code}`;
            if (!res[key]) {
                res[key] = { ...obj, count: 0 };
            };
            res[key].count += 1;
        });
        return Object.values(res);
    };
    // console.log("Duplicate - ", convert(cartProducts));
    cartProducts = convert(cartProducts);


    for (let i = 0; i < cartProducts.length; i++) {
        const row = document.createElement('div');
        row.setAttribute("class", "row");

        row.style.margin = "10px";
        row.style.borderBottom = "0.5px solid #21252942"
        row.style.fontSize = "10px"; 
        const item = document.createElement('div');
        item.setAttribute("class", "col-12");
        item.setAttribute("class", "my-auto");

        const img = document.createElement('img');
        img.style.width = "100px";
        img.style.height = "100px";
        img.src = cartProducts[i].imgurl;
        img.style.float = "left";
        img.style.margin = "1em";

        const name = document.createElement('p');
        name.textContent = cartProducts[i].name;
        name.style.float = "left";
        name.style.fontSize = "2em";
        name.style.margin = "1em";



        const remove = document.createElement('button');
        remove.textContent = "Remove";
        remove.classList.add("btn");
        // remove.classList.add("btn-dark");
        remove.style.backgroundColor = "#8d1313";
        remove.style.color = "white"; 
        remove.style.float = "right";
        remove.style.marginTop = "2em";
        remove.addEventListener("click", function (event) {
            Remove(event, cartProducts);
        }, false);

        const productId = document.createElement("param");
        productId.textContent = JSON.stringify(cartProducts[i]);

        const quantity = document.createElement('p');
        // console.log(cartProducts[i].count);
        quantity.textContent = "Qty - " + cartProducts[i].count;
        quantity.style.float = "right";
        quantity.style.fontSize = "2em";
        quantity.style.margin = "1em";

        const price = document.createElement('p');
        price.textContent = "€" + cartProducts[i].price;
        price.style.float = "right";
        price.style.fontSize = "2em";
        price.style.margin = "1em";

        container.appendChild(row);
        row.appendChild(item);
        item.appendChild(img);
        item.appendChild(name);
        item.appendChild(remove);
        item.appendChild(price);
        item.appendChild(quantity);
        item.appendChild(productId);
    }

    const row = document.createElement('div');
    row.setAttribute("class", "row");
    row.setAttribute("class", "w-100");
    row.style.margin = "10px";

    const item = document.createElement('div');
    item.setAttribute("class", "col-12");



    let totalPrice = 0;
    for (let j = 0; j < cartProducts.length; j++) {
        // console.log(cartProducts[j].count)
        totalPrice += parseFloat(cartProducts[j].price  * cartProducts[j].count)
   
    }

    localStorage.setItem("totalItems", parseInt(cartProducts.length));
    localStorage.setItem("totalPrice", totalPrice);

    const totalPriceString = document.createElement('p');
    totalPriceString.textContent = "Total : €" + totalPrice.toFixed(2);
    totalPriceString.style.fontSize = "2em";
    totalPriceString.style.float = "right";

    container.appendChild(row);
    row.appendChild(item);
    item.appendChild(totalItems);
    item.appendChild(totalPriceString);

}

function Remove(event, cartProducts) {

    let button = event.target;
    let item = button.parentElement;
    let itemJSON = JSON.parse(item.lastChild.textContent);

    for (let i = 0; i < cartProducts.length; i++) {
        if (itemJSON.ItemID == cartProducts[i].ItemID) {
            cartProducts.splice(i, 1);
        }
    }
    Clear();
    localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
    RenderCart(cartProducts);

    document.getElementById("checkout").innerHTML = cartProducts.length;
    CheckZero(cartProducts);
    // console.log('qty products', cartProducts.length); 
}

function Clear() {
    const app = document.getElementById('root');
    while (app.firstChild) {
        app.removeChild(app.firstChild);
    }
}

function CheckZero(cartProducts) {
    if (cartProducts == null || cartProducts.length == 0) {
        let button = document.getElementById("checkoutButton");
        button.disabled = true;
        let link = button.firstChild;
        link.setAttribute("href", "");
        button.style.color = "white"; 
        button.innerHTML = "Your cart is empty";
    }
}

function CheckSignIn() {
    //this function checks to see if the user is logged in
    let loggedIn = localStorage.getItem("loggedIn");
    // console.log(loggedIn);

    if (loggedIn == 0 || loggedIn == null) {
        let button = document.getElementById("checkoutButton");
        let link = button.firstChild;
        link.setAttribute("href", "login.html");
        link.innerHTML = "You must log in to continue";
    }
}