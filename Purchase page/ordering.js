"use strict";

var orderAmt = {
    Adeptus: 0,
    Jade: 0,
    Ticker: 0,
    Gold: 0
};

var orderCost = {
    ADEPTUS: 9000,
    JADE: 6800,
    TICKER: 2380,
    GOLD: 7100
};

var whileWarm = ["there is a time limit", "no sprinting", "no gliding", "no climbing", "don't take any damage", "don't be affected by any element"];

let buttons = document.getElementsByTagName("button");

for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function order() {
        let functionality = buttons[i].innerText;
        switch (functionality) {
            case "+":
                orderAmt[buttons[i].parentNode.classList[1]]++; // increment orderAmt based on class name as the names can be compared to the keys
                break;
            case "-":
                orderAmt[buttons[i].parentNode.classList[1]] = (!orderAmt[buttons[i].parentNode.classList[1]]) ? 0 : orderAmt[buttons[i].parentNode.classList[1]] - 1;
                break;
            case "Order Now":
                if (total_cost) {
                    // Want three unique integers int he range [0, 5]
                    var conditions = [-1, -1, -1];
                    conditions[0] = Math.floor(6 * Math.random());  // Random integer from [0, 5]
                    do {
                        conditions[1] = Math.floor(6 * Math.random());
                    } while (conditions[1] == conditions[0]);
                    do {
                        conditions[2] = Math.floor(6 * Math.random());
                    } while (conditions[2] == conditions[1] || conditions[2] == conditions[0]);
                    alert("Xiangling sets off on her food delivery using elemental sense! Conditions are " + whileWarm[conditions[0]] + ", " + whileWarm[conditions[1]] + ", " + whileWarm[conditions[2]] + "!");
                    orderAmt.Adeptus = 0, orderAmt.Jade = 0, orderAmt.Ticker = 0, orderAmt.Gold = 0;    // Reset order
                }
                else {
                    alert("Nothing has been ordered thus far!");
                }
                break;
        }
        update_order();
    }
}

var total_cost;
function update_order() {
    total_cost = orderAmt.Adeptus * orderCost.ADEPTUS + orderAmt.Jade * orderCost.JADE + orderAmt.Ticker * orderCost.TICKER + orderAmt.Gold * orderCost.GOLD;
    let register = document.getElementById("total");
    let existingAmt = register.querySelector("p")
    if (existingAmt) {  // Try to delete the previous instance of paragraph element
        register.removeChild(existingAmt);
    }
    if (total_cost) {   // Since 0 * 0 + 0 * 0 + 0 * 0 + 0 * 0 seems redundant, I chose not to display the order if no item is on the order
        let cumulativeAmt = document.createElement("p");
        cumulativeAmt.textContent = String(orderAmt.Adeptus) + " Adeptus' Temptation(s) * " + String(orderCost.ADEPTUS) + " + " +
            String(orderAmt.Jade) + " Jade Parcels * " + String(orderCost.JADE) + " + " +
            String(orderAmt.Ticker) + " Grilled Ticker Fish * " + String(orderCost.TICKER) + " + " +
            String(orderAmt.Gold) + " Golden Crab(s) * " + String(orderCost.GOLD) + 
            " = " + String(total_cost) + " mora.";
    
        register.appendChild(cumulativeAmt);
    }
}