let quantitySelection = document.getElementById("quantity-dropdown");
let glazingSelection = document.getElementById("glazing-dropdown");

let quantityDisplay = document.getElementsByClassName("quantity-display")[0];
let glazingDisplayImg = document.getElementsByClassName("glazing-display-img")[0];
let glazingDisplayText = document.getElementsByClassName("glazing-display-text")[0];

quantitySelection.addEventListener('change', () => {
    quantityDisplay.innerText = quantitySelection.options[quantitySelection.selectedIndex].text.split(" ")[0];
    quantityDisplay.parentElement.style.display = "inline-block";
});

glazingSelection.addEventListener('change', () => {
    console.log(glazingSelection.selectedIndex);
    glazingDisplayText.innerText = glazingSelection.options[glazingSelection.selectedIndex].value;
    glazingDisplayText.parentElement.style.display = "inline-block";
})