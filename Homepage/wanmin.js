"use strict";

var age = localStorage.getItem("age");
console.log(age);
function obtainAge() {
    age = prompt("Tell us your age, traveler:");
    while (age > 24 || age < 4) {
        alert("Your age is invalid for this world! Try again.");
        age = prompt("Once more, tell us your age, traveler:");
    }

    localStorage.setItem("age", String(age));
}

if (!age) {
    obtainAge();
}

const myTitle = document.querySelector("title");    // myTitle selects the reference to <title> tags in the document in the browser
myTitle.textContent = "Welcome to Teyvat";

// class "change" should consist of an <img> and a <p>
/* interactChange is the array of all elements of class name "change" */
let interactChange = document.getElementsByClassName("change");

/* for every element of class name "change"..
    -reference the image element 
    -enable an onclick event for the image of function displayNextImg
        -reference the paragraph element
        -modify the attributes of the image
        -modify the contents of the paragraph 
*/
for (let i = 0; i < interactChange.length; i++) {
    var interactImg = interactChange[i].querySelector("img");
    interactImg.onclick = function displayNextImg() {
        let interactP = interactChange[i].querySelector("p");
        let mySrc = this.getAttribute("src");
        if (mySrc == "Homepage/Teyvat.png") {
            interactP.textContent = "Use promotional code RITEAWAY for 15% off your first purchase!";
            this.setAttribute("src", "Homepage/Wanmin.png");
        }
        else if (mySrc == "Homepage/Wanmin.png") {
            interactP.innerHTML= "&nbsp";
            this.setAttribute("src", "Homepage/Teyvat.png");
        }
    };

}