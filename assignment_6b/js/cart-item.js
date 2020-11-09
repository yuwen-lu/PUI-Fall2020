let cartItemAmount = document.getElementsByClassName("cart-num")[0];

// get the localStorage content number to update cart number
let prevProdItems =  localStorage.getItem("productItems") || {};
let storageItems = JSON.parse(prevProdItems);
let count = Object.keys(storageItems).length;

if(count > 0) {
    cartItemAmount.textContent = count;
}