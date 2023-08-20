const cards = document.querySelectorAll(".card");

const products = [];
let sum = 0;

for (let card of cards) {
  // add pointer style
  card.style.cursor = "pointer";

  //   click handler for all cards

  card.addEventListener("click", function () {
    // get products name

    const productName = card.childNodes[3].querySelector("p").innerText;

    // selected products section get
    const selectProducts = document.getElementById("product-select-section");

    // create element

    const p = document.createElement("p");
    const count = selectProducts.childElementCount;

    // validation for duplicate products

    if (products.includes(productName) === false) {
      products.push(productName);
      for (let product of products) {
        // set inner text
        p.innerText = `${count}. ${product}`;

        // appendChild to section
        selectProducts.appendChild(p);
      }
    } else {
      alert("You can't select same products");
      return;
    }

    // get price of products and sum of total price

    const priceOfProducts = parseFloat(
      card.childNodes[3].querySelector(".card-body p span").innerText
    );

    sum += priceOfProducts;

    const totalPrice = document.getElementById("total-price");

   
  
    totalPrice.innerText = sum.toFixed(2);

// discount apply button

    const applyBtn = document.getElementById('apply-btn')

    if(parseFloat(totalPrice.innerText)>=200){
      applyBtn.removeAttribute("disabled")
    }

    // makepurchase btn 

    const makePurchaseBtn = document.getElementById("make-purchase");

    if (sum > 0) {
      makePurchaseBtn.removeAttribute("disabled");
    }

   
  });
}





function handleClick(data) {
  const saleInputField = document.getElementById("sale");

  saleInputField.value = data.innerText;

 
}

document
  .getElementById("apply-btn")
  .addEventListener("click", function setDiscount() {
    const discount = document.getElementById("discount");
    


    const totalPrice = document.getElementById("total-price").innerText;
 

    const discountPrice = parseFloat((totalPrice * 20) / 100).toFixed(2);

    discount.innerText = discountPrice;

    const total = document.getElementById("total");

    const amount = parseFloat(totalPrice - discountPrice).toFixed(2);

    total.innerText = amount;
  });



  // make purchase button


function openModal(data){
    const modal = document.getElementById('modal')
    const body = data.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode

    modal.classList.add('open-modal')
  
    body.style.backgroundColor = 'black'
    console.log('click');


  }