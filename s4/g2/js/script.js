/*Esempio if/else statement*/
var email = "ciccioformaggio@ciccio.com";
var password = "ciccione";

function controlloUtente() {
    if (
        document.getElementById("email").value == "ciccioformaggio@ciccio.com" &&
        document.getElementById("password").value == "ciccione" &&
        document.getElementById("number").value >= 18 &&
        document.getElementById("number").value <= 59
    ) {
        alert("Login successful");
    } else if (
        document.getElementById("email").value == "ciccioformaggio@ciccio.com" &&
        document.getElementById("password").value == "ciccione" &&
        document.getElementById("number").value >= 60 &&
        document.getElementById("number").value <= 89
    ) {
        alert("sei vecchio");
    } else if (
        document.getElementById("email").value == "ciccioformaggio@ciccio.com" &&
        document.getElementById("password").value == "ciccione" &&
        document.getElementById("number").value >= 90 &&
        document.getElementById("number").value <= 100
    ) {
        alert("sei miracolato");
    } else if (
        document.getElementById("email").value == "ciccioformaggio@ciccio.com" &&
        document.getElementById("password").value == "ciccione" &&
        document.getElementById("number").value > 100
    ) {
        alert("che ci fai sull'internet");
    } else {
        alert("ammazzati");
    }
}

/*var controlloMail = document.getElementById('email').value;*/

/* Esempio variabile var */

var ciboPreferito = "pizza";
console.log(ciboPreferito);
var numeroFette = 8;
console.log(ciboPreferito);
console.log(numeroFette);

/*Esempio variabile let*/

let cambiami = true;
cambiami = false;
console.log(cambiami);

/*Esempio booleano + stringa*/

alert(cambiami + " " + ciboPreferito);

/*Esempio operazione matematica*/

var num1 = 7;
var num2 = 3;
console.log(num1 + num2);
console.log(num1 - num2);

/*Esempio variabile const*/

const antipasto = "Enchiladas";
console.log(antipasto);
antipasto = "Tacos";