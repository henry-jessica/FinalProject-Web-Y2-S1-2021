//function to get value from select
var category = "Drivers";
var WindshirtsData = "";
function run(e) {
  document.getElementById("select").value;
  category = e.toString();
  (function () {
    fetch("https://api.npoint.io/4bd83a531f355b7102e5")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        WindshirtsData = data.Windshirts;
        const productsDiv = document.getElementById("sector1");
        const container = document.createElement("div");
        container.setAttribute("class", "container");
        productsDiv.appendChild(container);
        var e = document.getElementById("select");
        var category = e.value;
        console.log("XXX", category);

        if (category === "None") {
          var p = document.getElementById("sector1").childElementCount;
          for (let y = 0; y < p; y++) {
            $("#sector1").children().slice(0, y).remove();
          }
          for (let i = 0; i < data.Windshirts.length; i++) {
            let diva = document.createElement("div");
            let divb = document.createElement("div");
            let divPrice = document.createElement("div");
            let a = document.createElement("a");
            let img1 = document.createElement("img");
            let h2 = document.createElement("h2");
            h2.setAttribute("class", "product-name");
            diva.setAttribute("class", " col-md-4");
            // divb.setAttribute("class", "col-inner text-center");
            // a.setAttribute("href", "");
             divb.setAttributes({ 'class': "col-inner text-center wind-shirts", 'data-itemid': data.Windshirts[i].itemid });
             a.setAttribute('href', '#');
            img1.setAttribute("style", "width:60%");
            img1.src = data.Windshirts[i].imgurl;
               img1.alt = data.Windshirts[i].textMain;
            h2.textContent = data.Windshirts[i].name;
            // divPrice.textContent = data.Windshirts[i].price;

            const button = document.createElement("button");
            button.classList.add("btn");
            button.classList.add("priceBtn");          
            button.classList.add("addtocart");
            button.setAttribute("data-id", data.Windshirts[i].code);

            const text = document.createTextNode(
              "€" + data.Windshirts[i]?.price + "  "
            );
            button.appendChild(text);

            divb.appendChild(button);

            productsDiv.appendChild(diva);
            diva.appendChild(divb);
            divb.appendChild(a);
            a.appendChild(img1);
            divb.appendChild(h2);
            a.appendChild(button);

            divb.appendChild(button);

            //this is creating each element from the data windshirts
            const idProduct = document.createElement("param");
            idProduct.textContent = JSON.stringify(data.Windshirts[i]);

            const div8 = document.createElement("div");
            div8.setAttribute("class", "col-inner");
            const card = document.createElement("div");
            card.setAttribute("class", "col-md-4");
            card.classList.add("card");

            const h3 = document.createElement("h3");
            h3.textContent = data.Windshirts?.name;

            const h4 = document.createElement("h4");
            h4.textContent = " " + data.Windshirts[i]?.brand;

            const myimg = document.createElement("img");
            myimg.style.width = "250px";
            myimg.style.height = "250px";
            myimg.style.marginLeft = "auto";
            myimg.style.marginRight = "auto";
            myimg.src = data.Windshirts[i].imgurl;
            const p = document.createElement("p");
            button.classList.add("btn");
            button.classList.add("priceBtn");
            button.classList.add("addtocart");
            button.appendChild(text);
            idProduct.textContent = JSON.stringify(data.Windshirts[i]);
            divb.appendChild(button);
            button.appendChild(idProduct);
          }

          for (let i = 0; i < data.Drivers.length; i++) {
            let diva = document.createElement("div");
            let divb = document.createElement("div");
            let divPrice = document.createElement("div");
            let a = document.createElement("a");
            let img1 = document.createElement("img");
            let h2 = document.createElement("h2");
            h2.setAttribute("class", "product-name");
            diva.setAttribute("class", "col-sm-4 col-md-4");
            // divb.setAttribute("class", "col-inner text-center");
            // a.setAttribute("href", "");
             divb.setAttributes({ 'class': "col-inner text-center drivers", 'data-itemid': data.Drivers[i].itemid });
             a.setAttribute('href', '#');
            img1.setAttribute("style", "width:60%");
            img1.src = data.Drivers[i].imgurl;
               img1.alt = data.Drivers[i].textMain;
            h2.textContent = data.Drivers[i].name;
            // divPrice.textContent = data.Windshirts[i].price;

            const button = document.createElement("button");
            button.classList.add("btn");
            button.classList.add("priceBtn");
            button.classList.add("addtocart");
            button.setAttribute("data-id", data.Drivers[i].code);

            const text = document.createTextNode(
              "€" + data.Drivers[i]?.price + "  "
            );
            button.appendChild(text);

            divb.appendChild(button);

            productsDiv.appendChild(diva);
            diva.appendChild(divb);
            divb.appendChild(a);
            a.appendChild(img1);
            divb.appendChild(h2);
            a.appendChild(button);

            // const button = document.createElement('button');
            // button.classList.add("btn");
            // button.classList.add("btn-dark");
            // button.classList.add("addtocart");
            // button.setAttribute("data-id", data.Windshirts[i].code);

            // const text = document.createTextNode("€" + data.Windshirts[i]?.price + "  ");
            // button.appendChild(text);

            divb.appendChild(button);

            //this is creating each element from the data windshirts
            const idProduct = document.createElement("param");
            idProduct.textContent = JSON.stringify(data.Drivers[i]);

            const div8 = document.createElement("div");
            div8.setAttribute("class", "col-inner");
            const card = document.createElement("div");
            card.setAttribute("class", "col-md-4");
            card.classList.add("card");

            const h3 = document.createElement("h3");
            h3.textContent = data.Drivers?.name;

            const h4 = document.createElement("h4");
            h4.textContent = " " + data.Drivers[i]?.brand;

            const myimg = document.createElement("img");
            myimg.style.width = "250px";
            myimg.style.height = "250px";
            myimg.style.marginLeft = "auto";
            myimg.style.marginRight = "auto";
            myimg.src = data.Drivers[i].imgurl;

            const p = document.createElement("p");

            button.classList.add("btn");
            button.classList.add("priceBtn");
            button.classList.add("addtocart");

            button.appendChild(text);
            idProduct.textContent = JSON.stringify(data.Drivers[i]);

            divb.appendChild(button);
            button.appendChild(idProduct);
          }

          for (let i = 0; i < data.Wedges.length; i++) {
            let diva = document.createElement("div");
            let divb = document.createElement("div");
            let divPrice = document.createElement("div");
            let a = document.createElement("a");
            let img1 = document.createElement("img");
            let h2 = document.createElement("h2");
            h2.setAttribute("class", "product-name");
            diva.setAttribute("class", "col-sm-4 col-md-4");
            // divb.setAttribute("class", "col-inner text-center");
            divb.setAttributes({ 'class': "col-inner text-center wedges", 'data-itemid': data.Wedges[i].itemid });
            a.setAttribute('href', '#');
            img1.setAttribute("style", "width:60%");
            img1.alt = data.Wedges[i].textMain;

            img1.src = data.Wedges[i].imgurl;
            h2.textContent = data.Wedges[i].name;
            // divPrice.textContent = data.Windshirts[i].price;

            const button = document.createElement("button");
            button.classList.add("btn");
            button.classList.add("priceBtn");
            button.classList.add("addtocart");
            button.setAttribute("data-id", data.Wedges[i].code);

            const text = document.createTextNode(
              "€" + data.Wedges[i]?.price + "  "
            );
            button.appendChild(text);

            divb.appendChild(button);

            productsDiv.appendChild(diva);
            diva.appendChild(divb);
            divb.appendChild(a);
            a.appendChild(img1);
            divb.appendChild(h2);
            a.appendChild(button);

            // const button = document.createElement('button');
            // button.classList.add("btn");
            // button.classList.add("btn-dark");
            // button.classList.add("addtocart");
            // button.setAttribute("data-id", data.Windshirts[i].code);

            // const text = document.createTextNode("€" + data.Windshirts[i]?.price + "  ");
            // button.appendChild(text);

            divb.appendChild(button);

            //this is creating each element from the data windshirts
            const idProduct = document.createElement("param");
            idProduct.textContent = JSON.stringify(data.Wedges[i]);

            const div8 = document.createElement("div");
            div8.setAttribute("class", "col-inner");
            const card = document.createElement("div");
            card.setAttribute("class", "col-md-4");
            card.classList.add("card");

            const h3 = document.createElement("h3");
            h3.textContent = data.Wedges?.name;

            const h4 = document.createElement("h4");
            h4.textContent = " " + data.Wedges[i]?.brand;

            const myimg = document.createElement("img");
            myimg.style.width = "250px";
            myimg.style.height = "250px";
            myimg.style.marginLeft = "auto";
            myimg.style.marginRight = "auto";
            myimg.src = data.Wedges[i].imgurl;

            const p = document.createElement("p");

            button.classList.add("btn");
            button.classList.add("priceBtn");
            button.classList.add("addtocart");

            button.appendChild(text);
            idProduct.textContent = JSON.stringify(data.Wedges[i]);

            divb.appendChild(button);
            button.appendChild(idProduct);
          }
        } else if (category === "Windshirts") {
          var p = document.getElementById("sector1").childElementCount;
          for (let y = 0; y < p; y++) {
            $("#sector1").children().slice(0, y).remove();
          }

          for (let i = 0; i < data.Windshirts.length; i++) {
            let diva = document.createElement("div");
            let divb = document.createElement("div");
            let divPrice = document.createElement("div");
            let a = document.createElement("a");
            let img1 = document.createElement("img");
            let h2 = document.createElement("h2");
            h2.setAttribute("class", "product-name");
            diva.setAttribute("class", "col-sm-4 col-md-4");
            divb.setAttributes({ 'class': "col-inner text-center wedges", 'data-itemid': data.Windshirts[i].itemid });
            a.setAttribute('href', '#');
            // divb.setAttribute("class", "col-inner text-center");

            // a.setAttribute("href", "");
            img1.setAttribute("style", "width:60%");
            img1.src = data.Windshirts[i].imgurl;
            img1.alt = data.Windshirts[i].textMain;
            h2.textContent = data.Windshirts[i].name;
            // divPrice.textContent = data.Windshirts[i].price;

            const button = document.createElement("button");
            button.classList.add("btn");
            button.classList.add("priceBtn");
            button.classList.add("addtocart");
            button.setAttribute("data-id", data.Windshirts[i].code);

            const text = document.createTextNode(
              "€" + data.Windshirts[i]?.price + "  "
            );
            button.appendChild(text);

            divb.appendChild(button);

            productsDiv.appendChild(diva);
            diva.appendChild(divb);
            divb.appendChild(a);
            a.appendChild(img1);
            divb.appendChild(h2);
            a.appendChild(button);

            // const button = document.createElement('button');
            // button.classList.add("btn");
            // button.classList.add("btn-dark");
            // button.classList.add("addtocart");
            // button.setAttribute("data-id", data.Windshirts[i].code);

            // const text = document.createTextNode("€" + data.Windshirts[i]?.price + "  ");
            // button.appendChild(text);

            divb.appendChild(button);

            //this is creating each element from the data windshirts
            const idProduct = document.createElement("param");
            idProduct.textContent = JSON.stringify(data.Windshirts[i]);

            const div8 = document.createElement("div");
            div8.setAttribute("class", "col-inner");
            const card = document.createElement("div");
            card.setAttribute("class", "col-md-4");
            card.classList.add("card");

            const h3 = document.createElement("h3");
            h3.textContent = data.Windshirts?.name;

            const h4 = document.createElement("h4");
            h4.textContent = " " + data.Windshirts[i]?.brand;

            const myimg = document.createElement("img");
            myimg.style.width = "250px";
            myimg.style.height = "250px";
            myimg.style.marginLeft = "auto";
            myimg.style.marginRight = "auto";
            myimg.src = data.Windshirts[i].imgurl;
            const p = document.createElement("p");
            button.classList.add("btn");
            button.classList.add("priceBtn");
            button.classList.add("addtocart");
            button.appendChild(text);
            idProduct.textContent = JSON.stringify(data.Windshirts[i]);
            divb.appendChild(button);
            button.appendChild(idProduct);
          }
        } else if (category === "Drivers") {
          var p = document.getElementById("sector1").childElementCount;
          for (let y = 0; y < p; y++) {
            $("#sector1").children().slice(0, y).remove();
          }

          for (let i = 0; i < data.Drivers.length; i++) {
            let diva = document.createElement("div");
            let divb = document.createElement("div");
            let divPrice = document.createElement("div");
            let a = document.createElement("a");
            let img1 = document.createElement("img");
            let h2 = document.createElement("h2");
            h2.setAttribute("class", "product-name");
            diva.setAttribute("class", "col-sm-4 col-md-4");
            // divb.setAttribute("class", "col-inner text-center");
            // a.setAttribute("href", "");
            divb.setAttributes({ 'class': "col-inner text-center drivers", 'data-itemid': data.Drivers[i].itemid });
            a.setAttribute('href', '#');
            img1.setAttribute("style", "width:60%");
            img1.src = data.Drivers[i].imgurl;
               img1.alt = data.Drivers[i].textMain;
            h2.textContent = data.Drivers[i].name;
            // divPrice.textContent = data.Windshirts[i].price;

            const button = document.createElement("button");
            button.classList.add("btn");
            button.classList.add("priceBtn");
            button.classList.add("addtocart");
            button.setAttribute("data-id", data.Drivers[i].code);

            const text = document.createTextNode(
              "€" + data.Drivers[i]?.price + "  "
            );
            button.appendChild(text);

            divb.appendChild(button);

            productsDiv.appendChild(diva);
            diva.appendChild(divb);
            divb.appendChild(a);
            a.appendChild(img1);
            divb.appendChild(h2);
            a.appendChild(button);

            // const button = document.createElement('button');
            // button.classList.add("btn");
            // button.classList.add("btn-dark");
            // button.classList.add("addtocart");
            // button.setAttribute("data-id", data.Windshirts[i].code);

            // const text = document.createTextNode("€" + data.Windshirts[i]?.price + "  ");
            // button.appendChild(text);

            divb.appendChild(button);

            //this is creating each element from the data windshirts
            const idProduct = document.createElement("param");
            idProduct.textContent = JSON.stringify(data.Drivers[i]);

            const div8 = document.createElement("div");
            div8.setAttribute("class", "col-inner");
            const card = document.createElement("div");
            card.setAttribute("class", "col-md-4");
            card.classList.add("card");

            const h3 = document.createElement("h3");
            h3.textContent = data.Drivers?.name;

            const h4 = document.createElement("h4");
            h4.textContent = " " + data.Drivers[i]?.brand;

            const myimg = document.createElement("img");
            myimg.style.width = "250px";
            myimg.style.height = "250px";
            myimg.style.marginLeft = "auto";
            myimg.style.marginRight = "auto";
            myimg.src = data.Drivers[i].imgurl;

            const p = document.createElement("p");

            button.classList.add("btn");
            button.classList.add("priceBtn");
            button.classList.add("addtocart");

            button.appendChild(text);
            idProduct.textContent = JSON.stringify(data.Drivers[i]);

            divb.appendChild(button);
            button.appendChild(idProduct);
          }
        } else if (category === "Wedges") {
          var p = document.getElementById("sector1").childElementCount;
          for (let y = 0; y < p; y++) {
            $("#sector1").children().slice(0, y).remove();
          }
          for (let i = 0; i < data.Wedges.length; i++) {
            let diva = document.createElement("div");
            let divb = document.createElement("div");
            let divPrice = document.createElement("div");
            let a = document.createElement("a");
            let img1 = document.createElement("img");
            let h2 = document.createElement("h2");
            h2.setAttribute("class", "product-name");
            diva.setAttribute("class", "col-sm-4 col-md-4");
            // divb.setAttribute("class", "col-inner text-center");
            // a.setAttribute("href", "");
            divb.setAttributes({ 'class': "col-inner text-center wedges", 'data-itemid': data.Wedges[i].itemid });
            a.setAttribute('href', '#');
            img1.setAttribute("style", "width:60%");
            img1.src = data.Wedges[i].imgurl;
               img1.alt = data.Wedges[i].textMain;
            h2.textContent = data.Wedges[i].name;
            // divPrice.textContent = data.Windshirts[i].price;

            const button = document.createElement("button");
            button.classList.add("btn");
            button.classList.add("priceBtn");
            button.classList.add("addtocart");
            button.setAttribute("data-id", data.Wedges[i].code);

            const text = document.createTextNode(
              "€" + data.Wedges[i]?.price + "  "
            );
            button.appendChild(text);

            divb.appendChild(button);

            productsDiv.appendChild(diva);
            diva.appendChild(divb);
            divb.appendChild(a);
            a.appendChild(img1);
            divb.appendChild(h2);
            a.appendChild(button);

            // const button = document.createElement('button');
            // button.classList.add("btn");
            // button.classList.add("btn-dark");
            // button.classList.add("addtocart");
            // button.setAttribute("data-id", data.Windshirts[i].code);

            // const text = document.createTextNode("€" + data.Windshirts[i]?.price + "  ");
            // button.appendChild(text);

            divb.appendChild(button);

            //this is creating each element from the data windshirts
            const idProduct = document.createElement("param");
            idProduct.textContent = JSON.stringify(data.Wedges[i]);

            const div8 = document.createElement("div");
            div8.setAttribute("class", "col-inner");
            const card = document.createElement("div");
            card.setAttribute("class", "col-md-4");
            card.classList.add("card");

            const h3 = document.createElement("h3");
            h3.textContent = data.Wedges?.name;

            const h4 = document.createElement("h4");
            h4.textContent = " " + data.Wedges[i]?.brand;

            const myimg = document.createElement("img");
            myimg.style.width = "250px";
            myimg.style.height = "250px";
            myimg.style.marginLeft = "auto";
            myimg.style.marginRight = "auto";
            myimg.src = data.Wedges[i].imgurl;

            const p = document.createElement("p");

            button.classList.add("btn");
            button.classList.add("priceBtn");
            button.classList.add("addtocart");

            button.appendChild(text);
            idProduct.textContent = JSON.stringify(data.Wedges[i]);

            divb.appendChild(button);
            button.appendChild(idProduct);
          }
        } else {
          alert("asjn");
        }
        console.log("----add to cart");


             navigatePage(data);
      handlerParse();
  
        //this array will hold all products that user is selecting
        var cartProducts = [];

        //get event click
        $(".addtocart").click(function (element) {
          //convert to Jsonparse element selected
          let itemAdded = element.currentTarget;
          let info = itemAdded.lastChild.textContent;
          info = JSON.parse(info);

          if (info) {
            if (cartProducts.filter((x) => x.code === info.code).length === 0) {
              cartProducts.push(info);
            } else {
              alert("Already Exists");
            }
          }
          //set array of selected produts in local storage, so now we can access it from another pages afins
          localStorage.setItem("cartProducts", JSON.stringify(cartProducts));

          //get size of array produts and display it in our header
          $("#checkout").html("" + cartProducts.length + "");
          console.log("products check --- ", cartProducts);
          myFunction(cartProducts);
        });
      });
  })();
}

(function () {
  myFunction();
  
  fetch("https://api.npoint.io/4bd83a531f355b7102e5")
    .then(response => response.json())
    .then(data => {
      console.log(data);

      const productsDiv = document.getElementById('sector1');
      const container = document.createElement('div');
      container.setAttribute('class', 'container');

      productsDiv.appendChild(container);

        renderDrivers(data, productsDiv);
       renderWedges(data, productsDiv);
       renderShirts(data, productsDiv);
     


      navigatePage(data);
      handlerParse();
  

    });
})();
function myFunction(cartProducts) {
  console.log(cartProducts);
  console.log(document.getElementById("checkout").innerHTML);
  if (document.getElementById("checkout").innerHTML > 0) {
    document.getElementById("checkout").style.display = "block";
  } else {
    // document.getElementById("checkout").innerHTML == cartProducts?.length;
    document.getElementById("checkout").style.display = "none";
  }
}

function handlerParse() {

  var cartProducts = [];

  //get event click
  $(".addtocart").click(function (element) {

    //convert to Jsonparse element selected 
    let itemAdded = element.currentTarget;
    let info = itemAdded.lastChild.textContent;
    info = JSON.parse(info);


    cartProducts.push(info);
    //set array of selected produts in local storage, so now we can access it from another pages afins 
    localStorage.setItem("cartProducts", JSON.stringify(cartProducts));

    //get size of array produts and display it in our header
    $("#checkout").html("" + cartProducts.length + "");
    console.log('products check --- ', cartProducts);
        myFunction(cartProducts);
  });
}
function renderWedges(data, productsDiv) {
  for (let i = 0; i < data.Wedges.length; i++) {

    let diva = document.createElement('div');
    let divb = document.createElement('div');
    let divPrice = document.createElement('div');
    let a = document.createElement('a');
    let img1 = document.createElement('img');
    let h2 = document.createElement('h2');
    h2.setAttribute('class', 'product-name');
    diva.setAttribute('class', 'col-sm-4 col-md-4');
    // divb.setAttribute('class', 'col-inner text-center');
   divb.setAttributes({ 'class': "col-inner text-center wedges", 'data-itemid': data.Wedges[i].itemid });
        a.setAttribute('href', '#');
    img1.setAttribute('style', 'width:60%');
    img1.src = data.Wedges[i].imgurl;
       img1.alt = data.Wedges[i].textMain;
    h2.textContent = data.Wedges[i].name;
    // divPrice.textContent = data.Windshirts[i].price;
    const button = document.createElement('button');  
    button.classList.add("btn");
    button.classList.add("priceBtn");
    button.classList.add("addtocart");
    button.setAttribute("data-id", data.Wedges[i].code);

    const text = document.createTextNode("€" + data.Wedges[i]?.price + "  ");
    button.appendChild(text);

    divb.appendChild(button);

    productsDiv.appendChild(diva);
    diva.appendChild(divb);
    divb.appendChild(a);
    a.appendChild(img1);
    divb.appendChild(h2);
    a.appendChild(button);

    // const button = document.createElement('button');
    // button.classList.add("btn");
    // button.classList.add("btn-dark");
    // button.classList.add("addtocart");
    // button.setAttribute("data-id", data.Windshirts[i].code);
    // const text = document.createTextNode("€" + data.Windshirts[i]?.price + "  ");
    // button.appendChild(text);
    divb.appendChild(button);


    //this is creating each element from the data windshirts
    const idProduct = document.createElement("param");
    idProduct.textContent = JSON.stringify(data.Wedges[i]);




    const div8 = document.createElement('div');
    div8.setAttribute('class', 'col-inner');
    const card = document.createElement('div');
    card.setAttribute('class', 'col-md-4');
    card.classList.add("card");

    const h3 = document.createElement('h3');
    h3.textContent = data.Wedges?.name;

    const h4 = document.createElement('h4');
    h4.textContent = " " + data.Wedges[i]?.brand;

    const myimg = document.createElement('img');
    myimg.style.width = "250px";
    myimg.style.height = "250px";
    myimg.style.marginLeft = "auto";
    myimg.style.marginRight = "auto";
    myimg.src = data.Wedges[i].imgurl;

    const p = document.createElement('p');

    button.classList.add("btn");
    button.classList.add("priceBtn");
    button.classList.add("addtocart");

    button.appendChild(text);
    idProduct.textContent = JSON.stringify(data.Wedges[i]);

    divb.appendChild(button);
    button.appendChild(idProduct);
  }
}
function renderDrivers(data, productsDiv) {
  for (let i = 0; i < data.Drivers.length; i++) {

    let diva = document.createElement('div');
    let divb = document.createElement('div');
    let divPrice = document.createElement('div');
    let a = document.createElement('a');
    let img1 = document.createElement('img');
    let h2 = document.createElement('h2');
    h2.setAttribute('class', 'product-name');
    diva.setAttribute('class', 'col-sm-4 col-md-4');
    // divb.setAttribute('class', 'col-inner text-center');
    divb.setAttributes({ 'class': "col-inner text-center drivers", 'data-itemid': data.Drivers[i].itemid });
    a.setAttribute('href', '#');
    img1.setAttribute('style', 'width:60%');
    img1.src = data.Drivers[i].imgurl;
       img1.alt = data.Drivers[i].textMain;
    h2.textContent = data.Drivers[i].name;
    // divPrice.textContent = data.Windshirts[i].price;
    const button = document.createElement('button');
    button.classList.add("btn");
    button.classList.add("priceBtn");
    button.classList.add("addtocart");
    button.setAttribute("data-id", data.Drivers[i].code);

    const text = document.createTextNode("€" + data.Drivers[i]?.price + "  ");
    button.appendChild(text);

    divb.appendChild(button);

    productsDiv.appendChild(diva);
    diva.appendChild(divb);
    divb.appendChild(a);
    a.appendChild(img1);
    divb.appendChild(h2);
    a.appendChild(button);

    divb.appendChild(button);


    //this is creating each element from the data windshirts
    const idProduct = document.createElement("param");
    idProduct.textContent = JSON.stringify(data.Drivers[i]);




    const div8 = document.createElement('div');
    div8.setAttribute('class', 'col-inner');
    const card = document.createElement('div');
    card.setAttribute('class', 'col-md-4');
    card.classList.add("card");

    const h3 = document.createElement('h3');
    h3.textContent = data.Drivers?.name;

    const h4 = document.createElement('h4');
    h4.textContent = " " + data.Drivers[i]?.brand;

    const myimg = document.createElement('img');
    myimg.style.width = "250px";
    myimg.style.height = "250px";
    myimg.style.marginLeft = "auto";
    myimg.style.marginRight = "auto";
    myimg.src = data.Drivers[i].imgurl;

    const p = document.createElement('p');

    button.classList.add("btn");
    button.classList.add("priceBtn");
    button.classList.add("addtocart");

    button.appendChild(text);
    idProduct.textContent = JSON.stringify(data.Drivers[i]);

    divb.appendChild(button);
    button.appendChild(idProduct);
  }
}
function renderShirts(data, productsDiv) {
  for (let i = 0; i < data.Windshirts.length; i++) {

    let diva = document.createElement('div');
    let divb = document.createElement('div');
    let divPrice = document.createElement('div');
    let a = document.createElement('a');
    let img1 = document.createElement('img');
    let h2 = document.createElement('h2');
    h2.setAttribute('class', 'product-name');
    diva.setAttribute('class', 'col-sm-4 col-md-4');
    // divb.setAttribute('class', 'col-inner text-center');
      divb.setAttributes({ 'class': "col-inner text-center wind-shirts", 'data-itemid': data.Windshirts[i].itemid });
        a.setAttribute('href', '#');

    img1.setAttribute('style', 'width:60%');
    img1.src = data.Windshirts[i].imgurl;
       img1.alt = data.Windshirts[i].textMain;
    h2.textContent = data.Windshirts[i].name;
    // divPrice.textContent = data.Windshirts[i].price;
    const button = document.createElement('button');
    button.classList.add("btn");
    button.classList.add("priceBtn");
    button.classList.add("addtocart");
    button.setAttribute("data-id", data.Windshirts[i].code);

    const text = document.createTextNode("€" + data.Windshirts[i]?.price + "  ");
    button.appendChild(text);

    divb.appendChild(button);

    productsDiv.appendChild(diva);
    diva.appendChild(divb);
    divb.appendChild(a);
    a.appendChild(img1);
    divb.appendChild(h2);
    a.appendChild(button);

    divb.appendChild(button);


    //this is creating each element from the data windshirts
    const idProduct = document.createElement("param");
    idProduct.textContent = JSON.stringify(data.Windshirts[i]);




    const div8 = document.createElement('div');
    div8.setAttribute('class', 'col-inner');
    const card = document.createElement('div');
    card.setAttribute('class', 'col-md-4');
    card.classList.add("card");

    const h3 = document.createElement('h3');
    h3.textContent = data.Windshirts?.name;

    const h4 = document.createElement('h4');
    h4.textContent = " " + data.Windshirts[i]?.brand;

    const myimg = document.createElement('img');
    myimg.style.width = "250px";
    myimg.style.height = "250px";
    myimg.style.marginLeft = "auto";
    myimg.style.marginRight = "auto";
    myimg.src = data.Windshirts[i].imgurl;

    const p = document.createElement('p');

    button.classList.add("btn");
    button.classList.add("priceBtn");
    button.classList.add("addtocart");

    button.appendChild(text);
    idProduct.textContent = JSON.stringify(data.Windshirts[i]);

    divb.appendChild(button);
    button.appendChild(idProduct);
  }
}

function navigatePage(data) {
  console.log('---mammy is here')
  const windShirtsItems = document.querySelectorAll('.wind-shirts');
  windShirtsItems.forEach((wsi, wsiIxd) => {
    wsi.addEventListener('click', e => {
      if (e.target.parentElement.parentElement.classList.contains('wind-shirts')) {
        const selectedProduct = data.Windshirts.filter(sp => sp.itemid === e.target.parentElement.parentElement.dataset.itemid)[0];
        if (selectedProduct) localStorage.setItem('selectedProduct', JSON.stringify(selectedProduct));
        window.location.href = "http://" + location.host + "/" + "product.html";
      }
    });
  });

  const driverItems = document.querySelectorAll('.drivers');
  driverItems.forEach((di, diIxd) => {
    di.addEventListener('click', e => {
      if (e.target.parentElement.parentElement.classList.contains('drivers')) {
        const selectedProduct = data.Drivers.filter(sp => sp.itemid === e.target.parentElement.parentElement.dataset.itemid)[0];
        if (selectedProduct) localStorage.setItem('selectedProduct', JSON.stringify(selectedProduct));
        window.location.href = "http://" + location.host + "/" + "product.html";
      }
    });
  });
  const wedgesItems = document.querySelectorAll('.wedges');
  wedgesItems.forEach((wi, wiIxd) => {
    wi.addEventListener('click', e => {
      if (e.target.parentElement.parentElement.classList.contains('wedges')) {
        const selectedProduct = data.Wedges.filter(sp => sp.itemid === e.target.parentElement.parentElement.dataset.itemid)[0];
        if (selectedProduct) localStorage.setItem('selectedProduct', JSON.stringify(selectedProduct));
        window.location.href = "http://" + location.host + "/" + "product.html";
      }
    });
  });
}
function myFunction(cartProducts) {
  console.log(cartProducts);
  console.log(document.getElementById("checkout").innerHTML);
  if (document.getElementById("checkout").innerHTML > 0) {
    document.getElementById("checkout").style.display = "block";
  } else {
    // document.getElementById("checkout").innerHTML == cartProducts?.length;
    document.getElementById("checkout").style.display = "none";
  }
}

