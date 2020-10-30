// retrieve the rollName variable in localStorage, 
// set by clicking on certain roll item in product-browsing.js

let rollName = localStorage.getItem("rollName");
let productDetailElementIdName = "product-detail-" + rollName;
document.getElementById(productDetailElementIdName).style.display = "flex";

// dynamically display user selection info on image, product detail page

let quantitySelection = document.getElementById("quantity-dropdown-" + rollName);
let glazingSelection = document.getElementById("glazing-dropdown-" + rollName);

let quantityDisplay = document.getElementById("quantity-display-" + rollName);
console.log("quantity-display-" + rollName);
let glazingDisplayText = document.getElementById("glazing-display-text-" + rollName);
console.log("glazing-display-text-" + rollName);

quantitySelection.addEventListener('change', () => {
    quantityDisplay.innerText = quantitySelection.options[quantitySelection.selectedIndex].text.split(" ")[0];
    quantityDisplay.parentElement.style.display = "inline-block";
});

glazingSelection.addEventListener('change', () => {
    glazingDisplayText.innerText = glazingSelection.options[glazingSelection.selectedIndex].value;
    glazingDisplayText.parentElement.style.display = "inline-block";
})