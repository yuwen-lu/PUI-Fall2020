let cartItemAmount = document.getElementsByClassName("cart-num")[0];

// get the localStorage content number to update cart number
let storageItems = JSON.parse(localStorage.getItem("productItems"));

cartItemAmount.textContent = Object.keys(storageItems).length;