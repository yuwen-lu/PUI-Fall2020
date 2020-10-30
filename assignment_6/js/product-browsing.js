// display specific product's detail based on 
// the which button on product browsing page the user clicked

let browsingCardButtons = document.getElementsByClassName("cinnamon-roll-card-button");
let rollName = "";

for (let i = 0; i < browsingCardButtons.length; i++) {
    console.log(browsingCardButtons[i]);
    browsingCardButtons[i].addEventListener('click', (e) => {
        rollName = e.currentTarget.parentNode.parentNode.children[1].innerText;
        let possibleSubname = e.currentTarget.parentNode.parentNode.children[2];
        if (possibleSubname.className === "cinnamon-roll-subname") {
            rollName = rollName + " " + possibleSubname.innerText;
        }
        // pre-process the roll names, so that it's easier to match the html element ids
        rollName = rollName.toLowerCase().split(" ").join("-");
        console.log(rollName);
        localStorage.setItem("rollName", rollName);
        window.location.href = "../product-detail.html";
    });
}
