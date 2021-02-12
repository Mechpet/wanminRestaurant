// Statements end with a semicolon ';'. Single-line comments begin with "//" and multi-line comments begin with "/*" and end with "*/".
// Variables have dynamic typing (allows a variable to hold any type of variable and is not locked by datatype)
"use strict"; // adhere to "strict mode", which tightens rules

const TAX_RATE = 0.09;

var aNumber = 21;
var bNumber = aNumber * 2;
var aString = "21";
var aNumber2 = Number(aString);   // Explicitly coerces var a_string from string datatype to number datatype
var aNumber3 = aString * 1;   // Implicitly coerces var a_string from string datatype to number datatype
var cost = 19.99;

function formatToDollars(amt) {   // amt is a number
    return "$" + String(amt.toFixed(2)); // toFixed fixes the number variable to the number of decimal points specified by the argument
}

var total = cost + cost * TAX_RATE
total = formatToDollars(total);
console.log("Your total cost is " + total + "!");

var looselyEquals = (aNumber == aString);
var strictlyEquals = (aNumber === aString);
console.log("b = " + bNumber); // Outputs the value of the variable b to the console (the console part is the object reference)
console.log("Is 21 loosely equal to '21'?: " + looselyEquals);
console.log("Is 21 strictly equal to '21'?: " + strictlyEquals);

var age;    // Uninitalized variables are undefined (can't use mathematical operators or concatenate)
do {
    age = prompt("Tell us your age:");  // User input 
    if (age >= 0 && age <= 80) {
        alert("You're " + (80 - age) + " years from death.");
    }
    else {
        alert("Unknown lifeform detected!");
        for (i = 3; i > 0; i--) {
            console.log(i);
        }
    }
} while (age > 19 && age < 0);

(function outer() {
    var aNumber = 1;
    (function inner() {
        aNumber = 2;   // Changes the outer variable as well
        var bNumber = 2;
        console.log(aNumber + bNumber); // Can access outer variables because of lexical scope
    })();
    console.log(aNumber); // Can't access inner variables because of lexical scope
})();   // (function function_name() { ... })() is an IIFE, "Immediately Invoked Function Expression". It's often used to declare variables that won't affect outside its scope.

const myTitle = document.querySelector("title");    // myTitle selects the reference to <title> tags in the document in the browser
if (age == 19) {
    myTitle.textContent = "Welcome to Teyvat";  // If your age is 19, you can enter Teyvat (title of the webpage changes)
}

function tellDatatype(arg) {
    var datatype = typeof arg;
    console.log("Argument input is of datatype " + datatype);
    return;
}
/* arrays have values only (use brackets) */
var myArr = [
    "hello world",
    42,
    false,
    null,
    undefined
];

myArr[0];  // "hello world"
myArr.length;  // 5 (is a property, not a function, so no need for parentheses)
myArr[0].length; // 11 (number of characters in string)
myArr[0].toUpperCase(); // "HELLO WORLD" (capitalizes all alphabetical characters in string)
typeof myArr;  // "object"

/* objects have both keys and values (use curly braces) */
var myObject = {
    sentence: "hello world",
    integer: 42,
    lie: false,
    emptyString: "",
    pointsToLie: null,
    unknown: undefined
};
/* dot notation */
myObject.sentence; // "hello world"

/* bracket notation: */
myObject["integer"]; // 42
var pointsToLie = "lie";
myObject[pointsToLie]; // "lie"  (lack of quotation marks denotes variable)
myObject["pointsToLie"]; // null (quotation marks denote object member instead)

var bool1 = Boolean(myObject.emptyString); // false only due to explicit coercion
var bool2 = Boolean(myObject.pointsToLie); // false only due to explicit coercion
var bool3 = Boolean(myObject.unknown); // false only due to explicit coercion
var bool4 = Boolean(myObject.sentence); // true because not falsy

var boolLoose = (myObject.integer == bool4);  // == means equivalent given that coercion is allowed (doesn't work with boolean)
console.log("Boolean(\"hello world\") == 42 is " + boolLoose); // False (?)... advised to use === operator when either side can be true or false or falsy

var boolNotLoose = (myObject.integer != bool4);  // != means the negated version of ==
console.log("Boolean(\"hello world\") != 42 is " + boolNotLoose);

var arrayExampleA = [1, 2, 3];
var arrayExampleB = [1, 2, 3];
var array_coerced = "1,2,3";
console.log("[1, 2, 3] == \"1,2,3\" is " + (arrayExampleA == array_coerced)); // true (must have no spaces between commas)
console.log("[1, 2, 3] == \"1,2,3\" is " + (arrayExampleB == array_coerced)); // true
console.log("[1, 2, 3] == [1, 2, 3] is " + (arrayExampleA == arrayExampleB));   // false

var num1 = 41;
var num2 = "42";
var num3 = "43";
var randomString = "foo";

var b1 = num1 > num2;    // Can be interpreted as 41 > 42 or "41" > "42". Both cases are false, so this statement is false.
var b2 = num2 > num3;    // "42" > "43" is false.
var b3 = num1 > num3;    // Can be interpreted as 41 > 43 or "41" > "43". Both cases are false, so this statement is false.
var b4 = num1 < randomString;   // Can be interpreted as 41 < NaN or "41" < "foo". One case is undefined, so this statement is false.
var b5 = num2 < randomString; // Can be interpreted as "42" < "foo", which is true.
console.log(b1 + '\n' + b2 + '\n' + b3 + '\n' +  b4 +  '\n' + b5);

// let is like var except it limits the variable scope to the block it's in (denoted by curly braces)
var letScopes = function letScopesFn() { // Setting the function to a variable makes it so that it can't be called before this assignment and block
    var a = 1;
    if (a >= 1) {
        let b = a + 1;  // b belongs to the if statement block (outside braces can't access it, inside braces can access it)
        while (b < 5) {
            let c = b * 2;  // c belongs to the while loop block (outside braces can't access it, inside braces can access it)
            b++;

            console.log(a + c);
        }
    }
}
letScopes();   // Works!

// ternary conditional statement
var a = 42;
var b = (a == 42) ? "sup" : "nah"; // if a == 42, b == "sup"... else, b == "nah"

function makeAdder(x) {
    function add(y) {
        return y + x;
    };

    return add;
}

// Closure is a way to remember a function's scope even after the function has finished running
var closureAddOne = makeAdder(1); // closureAddOne references the function add(y) where x is 1 (closure over x)
console.log(closureAddOne);   // f add(y) { return y + x; }
console.log(closureAddOne(3));    // add(3) = 3 + 1 = 4
console.log(closureAddOne(-3));   // add(-3) = -3 + 1 = -2

function user() {
    var username;
    var password;
    function doLogin(user, pw) {
        username = user;
        password = pw;
        // etc.
    };

    var publicAPI = {
        login : doLogin
    };

    return publicAPI;
}

var fred = user();
// Return value of function user() is publicAPI, which is an object with one member, login
// login is the reference to function doLogin(user, pw)

fred.login("yourboifred", "123");   // Has closure on username, password variables
console.log()

function foo() {
    console.log(this.bar);
}

var bar = "global";

var obj1 = {
    bar: "obj1",
    foo: foo
};

var obj2 = {
    bar: "obj2"
};

this.foo();  // "global"
obj1.foo(); // this = obj1, outputs "obj1"
foo.call(obj2); // this = obj2, outputs "obj2"
new foo();  // this = empty object, outputs "undefined"

// Can set the parameter to a default value if no argument is passed
function defaultParameter(x = 5) {
    console.log(x);
}

// Equivalent function with void argument
if (!defaultParameter) {   // If function defaultParameter is not defined, define it
    var defaultParameter = function defaultParameter_old() {
        var x = (arguments[0] != void 0) ? arguments[0] : 5;
        console.log(x);
    };
}

defaultParameter();    // 5
defaultParameter(1);   // 1
defaultParameter(1, 2);   // 1