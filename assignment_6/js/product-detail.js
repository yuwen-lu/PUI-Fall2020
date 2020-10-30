// // product item definition: will be used to store user added item into local storage
// function RollItem(name, rollQuantity, rollGlazing) {
//     this.name = name;
//     this.rollQuantity = rollQuantity;
//     this.rollGlazing = rollGlazing;
// }


// retrieve the rollName variable in localStorage, 
// set by clicking on certain roll item in product-browsing.js

let rollName = localStorage.getItem("rollName");
let productDetailElementIdName = "product-detail-" + rollName;
document.getElementById(productDetailElementIdName).style.display = "flex";

// dynamically display user selection info on image, product detail page

// get properties user selected for the product
let quantitySelection = document.getElementById("quantity-dropdown-" + rollName);
let quantity = "";
let glazingSelection = document.getElementById("glazing-dropdown-" + rollName);
let glazing = "";

// get elements on the html page to display the selected properties
let quantityDisplay = document.getElementById("quantity-display-" + rollName);
let glazingDisplayText = document.getElementById("glazing-display-text-" + rollName);

// add event listeners to these html elemenets so the displays update when selections change
quantitySelection.addEventListener('change', () => {
    quantity = quantitySelection.options[quantitySelection.selectedIndex].text.split(" ")[0]
    quantityDisplay.innerText = quantity;
    quantityDisplay.parentElement.style.display = "inline-block";
});

glazingSelection.addEventListener('change', () => {
    glazing = glazingSelection.options[glazingSelection.selectedIndex].value;
    glazingDisplayText.innerText = glazing;
    glazingDisplayText.parentElement.style.display = "inline-block";
})

// store the user selections as shopping item objects into localStorage,
// retrieved in cart.js and display in cart.html

let addButton = document.getElementById(productDetailElementIdName).children[1].lastElementChild.lastElementChild;
addButton.addEventListener('click', () => {
    // firstly retrieve what's already in there
    let currentItems = JSON.parse(localStorage.getItem("productItems"));

    console.log("currentItems: ", currentItems);
    
    // then add the new item in to the current items object
    if(currentItems) {
        currentItems[rollName + "," + glazing] = quantity;
    }
    else {
        currentItems = {};
        currentItems[rollName + "," + glazing] = quantity;
    }
    console.log("new currentItems: ", currentItems);

    localStorage.setItem("productItems", JSON.stringify(currentItems));

    console.log(currentItems);
    window.location.href = "../cart.html";
})




