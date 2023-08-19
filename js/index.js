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

    totalPrice.innerText = sum;

    const makePurchaseBtn = document.getElementById("make-purchase");

    if (sum > 50) {
      makePurchaseBtn.removeAttribute("disabled");
    }

    console.log();
  });
}

function handleClick(data) {
  const saleInputField = document.getElementById("sale");

  const applyBtn = document.getElementById("apply-btn");

  saleInputField.value = data.innerText;

  if (saleInputField.value === "SELL200") {
    applyBtn.removeAttribute("disabled");
  }
}

document
  .getElementById("apply-btn")
  .addEventListener("click", function setDiscount() {
    const discount = document.getElementById("discount");
    console.log(discount);

    const totalPrice = document.getElementById("total-price").innerText;

    console.log(totalPrice);

    const discountPrice = parseFloat((totalPrice * 20) / 100);

    discount.innerText = discountPrice;

    const total = document.getElementById("total");

    const amount = totalPrice - discountPrice;

    total.innerText = amount;
  });
