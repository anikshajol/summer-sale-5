const cards = document.querySelectorAll(".card");

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
    // set inner text
    p.innerText = `${count + 1}. ${productName}`;

    // appendChild to section
    selectProducts.appendChild(p);

    // get price of products and sum of total price

    const priceOfProducts = parseFloat(
      card.childNodes[3].querySelector(".card-body p span").innerText
    );

    sum += priceOfProducts;

    const totalPrice = document.getElementById("total-price");
    const total = document.getElementById("total");

    totalPrice.innerText = sum.toFixed(2);
    total.innerText = sum.toFixed(2);

    // discount apply button

    const applyBtn = document.getElementById("apply-btn");

    if (parseFloat(totalPrice.innerText) >= 200) {
      applyBtn.removeAttribute("disabled");
    }

    // make purchase btn

    const makePurchaseBtn = document.getElementById("make-purchase");

    if (sum > 0) {
      makePurchaseBtn.removeAttribute("disabled");
    }
  });
}

function handleClick(data) {
  const saleInputField = document.getElementById("sale");
  const totalPrice = document.getElementById("total-price");

  if (totalPrice.innerText < 200) {
    alert("Purchase TK 200 or above to get this coupon");
    return;
  }

  saleInputField.value = data.innerText;
}

document
  .getElementById("apply-btn")
  .addEventListener("click", function setDiscount() {
    const discount = document.getElementById("discount");

    const saleInputField = document.getElementById("sale");

    if (saleInputField.value === "SELL200") {
      const totalPrice = document.getElementById("total-price").innerText;

      const discountPrice = parseFloat((totalPrice * 20) / 100).toFixed(2);

      discount.innerText = discountPrice;

      const total = document.getElementById("total");

      const amount = parseFloat(totalPrice - discountPrice).toFixed(2);

      total.innerText = amount;
    } else {
      alert("Please enter a valid cupon code");
    }
  });

// make purchase button

function goHome() {
  location.href = "index.html";
  const totalPrice = document.getElementById("total-price");
  const discount = document.getElementById("discount");
  const total = document.getElementById("total");
  const saleInputField = document.getElementById("sale");
  // selected products section get
  const selectProducts = document.getElementById("product-select-section");
  selectProducts.innerHTML = "";
  totalPrice.innerText = "0.00";
  discount.innerText = "0.00";
  total.innerText = "0.00";
  saleInputField.value = "";
}
