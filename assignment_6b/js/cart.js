// get the necessary html elements for later shopping cart item display
let cartContainer = document.getElementsByClassName("shopping-cart")[0];
let cartEmptyMessage = document.getElementsByClassName("cart-empty-message")[0];
let checkoutButton = document.getElementsByClassName("shopping-cart-checkout-button")[0];
let totalAmount = document.getElementsByClassName("total-amount")[0];

// variable to calculate the total amount
let totalAmountNum = 0;

// retrieve localStorage for display items
let prevItems = localStorage.getItem("productItems");

// if the shopping cart is not empty
if(prevItems != null) {
    let items = JSON.parse(prevItems);
    if(Object.keys(items).length != 0) {
        console.log(items);
        console.log(items.length);
        let keys = Object.keys(items);
        for(let index = 0; index < keys.length; index++) {
            let key = keys[index];
            let [name, glazing] = key.split(",");
            // Tweak the format of name a bit
            nameList = name.split("-");
            for (let i = 0; i < nameList.length; i++) {
                nameList[i] = nameList[i].charAt(0).toUpperCase() + nameList[i].slice(1);
            }
            name = nameList.join(" ");

            let quantity = items[key];

            // create new element based on the name, quantity, and glazing

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

            let text = document.createTextNode(name);
            itemName.appendChild(text);
            
            // add item-specific image classes to itemImage
            
            switch(name) {
                case "Original":
                    itemImage.classList.add("shopping-cart-original-image");
                    break;
                case "Blackberry":
                    itemImage.classList.add("shopping-cart-blackberry-image");
                    break;
                case "Walnut":
                    itemImage.classList.add("shopping-cart-walnut-image");
                    break;
                case "Original Gluten Free":
                    itemImage.classList.add("shopping-cart-original-gluten-free-image");
                    break;
                case "Pumpkin Spice":
                    itemImage.classList.add("shopping-cart-pumpkin-spice-image");
                    break;
                case "Caramel Peacan":
                    itemImage.classList.add("shopping-cart-caramel-peacan-image");
                    break;
            
                default:
                    itemImage.classList.add("shopping-cart-original-image");
                    break;
            }

            // content in the right container: two dropdowns, price, delete button

            // quantity dropdown
            let quantityDropdown = document.createElement("select");
            quantityDropdown.classList.add("cart-dropdown-appearance");
            // make it disabled, so that the user cannot change it during in the cart
            quantityDropdown.disabled = true;
            itemContainer.appendChild(quantityDropdown);
            // array of quantity dropdown values
            let quantityValues = [1, 3, 6, 12];
            // array of quantity dropdown texts
            let quantityTexts = ["1 roll", "3 rolls", "6 rolls", "12 rolls"];
            for(let j = 0; j < quantityValues.length; j++) {
                let option = document.createElement("option");
                option.value = quantityValues[j];
                option.text = quantityTexts[j];
                // make sure to display users' previous selection of quantity
                if (quantity === option.value)
                    option.selected = true;
                
                    quantityDropdown.appendChild(option);
            }

            // glazing dropdown
            let glazingDropdown = document.createElement("select");
            glazingDropdown.classList.add("cart-dropdown-appearance");
            // make it disabled, so that the user cannot change it during in the cart
            glazingDropdown.disabled = true;
            itemContainer.appendChild(glazingDropdown);
            // array of glazing dropdown values
            let glazingValues = ["None", "Sugar Milk", "Vanilla Milk", "Double Chocolate"];
            // array of glazing dropdown texts
            let glazingTexts = ["none", "sugar milk", "vanilla milk", "double chocolate"];
            for(let j = 0; j < glazingValues.length; j++) {
                let option = document.createElement("option");
                option.value = glazingValues[j];
                option.textContent = glazingTexts[j];
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
            // dynamically loading price based on user's choice
            let priceNum = Number(quantity * 3.00);
            // update the total amount on page
            totalAmountNum += priceNum;
            let priceText = document.createTextNode(" " + String(priceNum.toFixed(2)));
            priceContainer.appendChild(moneySymbol);
            priceContainer.appendChild(priceText);
            itemContainer.appendChild(priceContainer);

            // delete button
            let deleteButton = document.createElement("button");
            deleteButton.className = "delete-button golden-icon";
            deleteButton.addEventListener("click", () => {
                console.log(items);
                delete items[key];
                localStorage.setItem("productItems", JSON.stringify(items));
                location.reload();
            });
            
            // append them all to the right container
            itemContainer.appendChild(priceContainer);
            itemRightContainer.appendChild(quantityDropdown);
            itemRightContainer.appendChild(glazingDropdown);
            itemRightContainer.appendChild(priceContainer);
            itemRightContainer.appendChild(deleteButton);
        }

        // calculate the total amount
        let amountNode = document.createTextNode(String(totalAmountNum.toFixed(2)));
        totalAmount.appendChild(amountNode);
        totalAmount.style.display = "inline-block";
        checkoutButton.style.display = "inline-block";
    }

    // if the localstorage object exists, but is empty
    else {
        document.getElementsByClassName("cart-empty-message")[0].style.display = "block";
    }

}


// if the localstorage obejct doesn't exist, meaning cart is empty
else {
    document.getElementsByClassName("cart-empty-message")[0].style.display = "block";
}

// createNewItem("Original", 1, "Sugar Milk");


checkoutButton.addEventListener('click', () => {
    alert("Sorry, will implement this soon!");
})