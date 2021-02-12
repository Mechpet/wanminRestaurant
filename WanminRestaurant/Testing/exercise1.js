"use strict";

var TAX_RATE;
var PHONE_PRICE;
var ACCESSORY_PRICE;

var MENTAL_BALANCE;

var bank_balance = Number(prompt("How many dollars is in your bank account?: "));

function subtotal(amt, tax_rate) {
    return amt + amt * tax_rate;
}

function format_to_dollars(amt) {   // amt is a number
    return "$" + String(amt.toFixed(2)); // toFixed fixes the number variable to the number of decimal points specified by the argument
}

function obtain_MENTAL_BALANCE(bank_balance) {
    do {
        MENTAL_BALANCE = Number(prompt("When do you want to stop buying accessories?: "));
    } while (MENTAL_BALANCE > bank_balance);
}

function obtain_tax_rate() {
    do {
        TAX_RATE = Number(prompt("What is the taxation rate?: "));
    } while (TAX_RATE < 0);
}

function obtain_phone_prices() {
    do {
        PHONE_PRICE = Number(prompt("What is the price of the desired phone?: "));
    } while (PHONE_PRICE < 0);
    do {
        ACCESSORY_PRICE = Number(prompt("Now what is the price of the desired phone accessory?: "));
    } while (ACCESSORY_PRICE < 0);
}

function purchase_phones() {
    var num_phones = 0;
    var num_accessories = 0;
    if (bank_balance < 0) {
        console.log("You shouldn't be buying stuff. You're in debt.");
        return;
    }
    obtain_MENTAL_BALANCE(bank_balance);
    obtain_tax_rate();
    obtain_phone_prices();
    if (PHONE_PRICE + ACCESSORY_PRICE == 0) {
        console.log("You'll be able to buy infinite phones! Yay!");
    }
    else {
        var cost_per_phone_combo = subtotal(PHONE_PRICE + ACCESSORY_PRICE, TAX_RATE);
        var cost_per_phone = subtotal(PHONE_PRICE, TAX_RATE);
        while (bank_balance > cost_per_phone_combo && bank_balance > MENTAL_BALANCE) {
            console.log("You bought a phone and accessories for " + format_to_dollars(cost_per_phone_combo));
            bank_balance -= cost_per_phone_combo;
            num_accessories++;
            num_phones++;
        }
        while (bank_balance > cost_per_phone) {
            console.log("You bought a phone for " + format_to_dollars(cost_per_phone));
            bank_balance -= cost_per_phone;
            num_phones++;
        }
    }
    console.log("You bought " + num_phones + " phones and " + num_accessories + 
    " accessories for a total cost of " + format_to_dollars(num_accessories * cost_per_phone_combo + (num_phones - num_accessories) * cost_per_phone));
    alert("Your remaining bank balance is " + format_to_dollars(bank_balance));
}
purchase_phones();