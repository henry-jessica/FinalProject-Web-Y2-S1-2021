// const selectedDate = localStorage.getItem("name");
// const selectedPeople = localStorage.getItem("name");
// const selectedTime = localStorage.getItem("price");
const selectedProduct = localStorage.getItem('selectedProduct');


const customizedProduct = { color: "default", quantity: "1", size: "default" };

const root = document.getElementById('root');
const noContent = document.getElementById('no-content');
const checkoutIcon = document.getElementById('checkout');


let cartProducts = JSON.parse(localStorage.getItem('cartProducts'));
if (!cartProducts) {
    //this array will hold all products that user is selecting 
    cartProducts = [];
}
else{
    checkoutIcon.textContent = cartProducts.length;
}

if (selectedProduct) {
    const product = JSON.parse(selectedProduct);
    const productColors = document.getElementById('product-colors');
    const productName = document.getElementById('product-name');
    const productSize = document.getElementById('product-size');
    const productPrice = document.getElementById('product-price');
    const productImg = document.getElementById('product-img');
    const productMainText = document.getElementById('main-text');
    const productTags = document.getElementById('tags');
    const productCode = document.getElementById('code');
    const quantity = document.getElementById('quantity');
    const addToCart = document.getElementById('add-to-cart');
    const breadcrumb = document.getElementById('breadcrumb');



    root.style.display = "block";
    noContent.style.display = "none";


    // Product Title 
    productName.textContent = product.name;


  
    // Set breadcrumb - page mapping 
    const newLI = document.createElement('li');
    newLI.setAttributes({ 'class': "breadcrumb-item" });
    const link = document.createElement('a');
    link.setAttributes({ 'aria-current': "page" });
    link.textContent = product.name;
    newLI.appendChild(link);
    breadcrumb.appendChild(newLI);


    // Product Color, its is not obligatory for now 
    for (let i = 0; i < product.color.length; i++) {
        const colorBox = document.createElement('div');
        colorBox.setAttributes({
            'class': "border p-3 product-color-val my-2",
            'data-color': product.color[i].toLowerCase(),
            'style': {
                'background': product.color[i].toLowerCase()
            }
        });
        productColors.appendChild(colorBox);
    }

    productColors.childNodes.forEach((pc, pci) => {
        pc.addEventListener('click', (e) => {
            productColors.childNodes.forEach(pcc => pcc.classList.remove('border-5'));
            customizedProduct.color = e.target.dataset.color;
            e.target.classList.add('border-5');
        });
    });




    if (product.sizes) {
        //Product size 
        let sizeItem = "";
        for (let i = 0; i < product.sizes.length; i++) {
            sizeItem += `
                    <p class="border p-2 my-0" data-size="${product.sizes[i]}">${product.sizes[i]}</p>
            `;
        }
        productSize.innerHTML = sizeItem;
        productSize.childNodes.forEach((psc, psci) => {
            psc.addEventListener('click', (e) => {
                productSize.childNodes.forEach(ps => {
                    if (ps.classList !== undefined) {
                        ps.classList.remove('border-5');
                    }
                    return;
                });
                customizedProduct.size = e.target.dataset.size;
                e.target.classList.add('border-5');
            });
        });
    } else {
        productSize.parentElement.remove();
    }

    // Product Quantity
    quantity.addEventListener('change', (e) => {
        customizedProduct.quantity = e.target.value;
    });

    // Product Price
    productPrice.textContent = product.price;

    // Product Image
    productImg.style.backgroundImage = `url(${product.imgurl})`;

    // Image zoom 
    const dragStart = (e) => {
        e.target.classList.add("img-hover");
        e.target.style.backgroundSize = "85em";
    }
    const dragStop = (e) => {
        e.target.classList.remove("img-hover");
        e.target.style.backgroundPosition = 'top';
        e.target.style.backgroundSize = "40em";
    }
    const dragging = (e) => {
        e.target.style.backgroundPositionX = -e.offsetX + "px";
        e.target.style.backgroundPositionY = -e.offsetY + "px";
    }

    productImg.addEventListener("touchstart", dragStart, false);
    productImg.addEventListener("touchend", dragStop, false);
    productImg.addEventListener("touchmove", dragging, false);

    productImg.addEventListener("mouseenter", dragStart, false);
    productImg.addEventListener("mouseleave", dragStop, false);
    productImg.addEventListener("mousemove", dragging, false);


    // Main text
    productMainText.textContent = product.textMain;


    // Product Tags 
    product.tags.forEach((pt, pti) => {
        // <button type="button" class="btn btn-outline-info">Info</button>
        const tag = document.createElement('li');
        tag.setAttributes({
            "class": "list-group-item"
        });
        tag.textContent = pt;
        productTags.appendChild(tag);
    });


    // Product Code 
    productCode.textContent = product.code;


    // Add to cart 
    addToCart.addEventListener('click', (e) => {
        console.log('hit button add cart')
        let total = localStorage.getItem('checkout');
        total++;
        localStorage.setItem('checkout', total);


        // product.itemid 
        // customizedProduct
        cartProducts.push(product);
        console.log(cartProducts);
        localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
        // location.href = 'http://' + location.host + '/product.html'
        let   message = `
             <div class="alert alert-success" role="alert">
  A simple success alert—check it out!
</div>
 `;
        //  productPrice.innerHTML = message;
        handleSuccess(event);
        var millisecondsToWait = 1000;
       setTimeout(function() {
        location.href = 'http://' + location.host + '/product.html'
    //   productPrice.innerHTML = message;
}, millisecondsToWait);
        
    });

}
else {
    root.style.display = "none";
    noContent.style.display = "block";
}

function handleSuccess(e) {
 e.preventDefault();
 Swal.fire({
   position: 'top-end',
  icon: 'success',
  title: 'Product Added to cart',
  showConfirmButton: false,
  timer: 1500
 }); 
}