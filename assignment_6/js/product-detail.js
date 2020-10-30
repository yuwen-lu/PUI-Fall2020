let quantitySelection = document.getElementById("quantity-dropdown");
let glazingSelection = document.getElementById("glazing-dropdown");

let quantityDisplay = document.getElementsByClassName("quantity-display")[0];
let glazingDisplay = document.getElementsByClassName("glazing-display")[0];



quantitySelection.addEventListener('change', () => {
    quantityDisplay.innerText = quantitySelection.options[quantitySelection.selectedIndex].text;
    quantityDisplay.style.display = "inline-block";
});

glazingSelection.addEventListener('change', () => {
    glazingDisplay.innerText = glazingSelection.options[glazingSelection.selectedIndex].text;
    glazingDisplay.style.display = "inline-block";
})