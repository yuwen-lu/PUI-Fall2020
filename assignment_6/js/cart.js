// get the necessary html elements for later shopping cart item display
let cartContainer = document.getElementsByClassName("shopping-cart")[0];
let cartEmptyMessage = document.getElementsByClassName("cart-empty-message")[0];
let checkoutButton = document.getElementsByClassName("shopping-cart-checkout-button")[0];
let totalAmount = document.getElementsByClassName("total-amount")[0];

// function to create a new shopping cart item
function createNewItem(name, quantity, glazing) {

    // create a hr first
    let line = document.createElement("hr");

    // the basic structure: whole container, left container, right container
    let itemContainer = document.createElement("div");
    itemContainer.className = "shopping-cart-item";
    let itemLeftContainer = document.createElement("div");
    itemLeftContainer.className = "shopping-cart-item-left";
    let itemRightContainer = document.createElement("div");
    itemRightContainer.className = "shopping-cart-item-right";
    cartContainer.insertBefore(line, cartEmptyMessage);
    cartContainer.insertBefore(itemContainer, cartEmptyMessage);
    itemContainer.appendChild(itemLeftContainer);
    itemContainer.appendChild(itemRightContainer);

    // content in the left container: image, name
    let itemImage = document.createElement("div");
    itemImage.classList.add("shopping-cart-item-img");
    let itemName = document.createElement("div");
    itemName.classList.add("underlined");
    itemLeftContainer.appendChild(itemImage);
    itemLeftContainer.appendChild(itemName);
    switch(name) {
        case "Original":
            itemImage.classList.add("shopping-cart-original-image");
            let text = document.createTextNode("Original");
            itemName.appendChild(text);
            break;
        default:
            console.log("shenmewanyier");
    }

    // content in the right container: two dropdowns, price, delete button

    // quantity dropdown
    let quantityDropdown = document.createElement("select");
    quantityDropdown.classList.add("cart-dropdown-appearance");
    itemContainer.appendChild(quantityDropdown);
    // array of quantity dropdown values
    let quantityValues = [1, 3, 6, 12];
    // array of quantity dropdown texts
    let quantityTexts = ["1 roll", "3 rolls", "6 rolls", "12 rolls"];
    for(let i = 0; i < quantityValues.length; i++) {
        let option = document.createElement("option");
        option.value = quantityValues[i];
        option.text = quantityTexts[i];
        // make sure to display users' previous selection of quantity
        if (quantity === option.value)
            option.selected = true;
        
            quantityDropdown.appendChild(option);
    }

    // glazing dropdown
    let glazingDropdown = document.createElement("select");
    glazingDropdown.classList.add("cart-dropdown-appearance");
    itemContainer.appendChild(glazingDropdown);
    // array of glazing dropdown values
    let glazingValues = ["None", "Sugar Milk", "Vanilla Milk", "Double Chocolate"];
    // array of glazing dropdown texts
    let glazingTexts = ["none", "sugar milk", "vanilla milk", "double chocolate"];
    for(let i = 0; i < glazingValues.length; i++) {
        let option = document.createElement("option");
        option.value = glazingValues[i];
        option.textContent = glazingTexts[i];
        // make sure to display users' previous selection of glazing
        if (glazing === option.value)
            option.selected = true;
        
            glazingDropdown.appendChild(option);
    }

    // price
    let priceContainer = document.createElement("div");
    priceContainer.classList.add("shopping-cart-item-price");
    let moneySymbol = document.createElement("span");
    moneySymbol.className = "golden-color";
    moneySymbol.textContent = "$";
    // TODO: this should be dynamic based on user's choice
    let priceNum = document.createTextNode("10.00");
    priceContainer.appendChild(moneySymbol);
    priceContainer.appendChild(priceNum);
    itemContainer.appendChild(priceContainer);

    // delete button
    let deleteButton = document.createElement("button");
    deleteButton.className = "delete-button golden-icon";
    itemContainer.appendChild(priceContainer);

    // append them all to the right container
    itemRightContainer.appendChild(quantityDropdown);
    itemRightContainer.appendChild(glazingDropdown);
    itemRightContainer.appendChild(priceContainer);
    itemRightContainer.appendChild(deleteButton);
}

// retrieve localStorage for display items
let items = JSON.parse(localStorage.getItem("productItems"));
console.log(items);

if(items) {
    console.log(items);
    totalAmount.style.display = "inline-block";
    checkoutButton.style.display = "inline-block";
}

else {
    document.getElementsByClassName("cart-empty-message")[0].style.display = "block";
}

// createNewItem("Original", 1, "Sugar Milk");


checkoutButton.addEventListener('click', () => {
    alert("Sorry, will implement this soon!");
})