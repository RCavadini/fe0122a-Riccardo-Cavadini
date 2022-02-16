/*Standard function*/

function pensione(eta, etaPensione) {
    let sottrazione = etaPensione - eta;
    return sottrazione;
}

console.log(pensione(40, 70));

/* Arrow function */

let addizione = (etaPensione, eta) => {
    return etaPensione + eta;
};

console.log(addizione(10, 5));

/* Function within function */

function prezzoTotale(prezzoIngrosso, prezzoMargine) {
    let prezzoDettaglio = prezzoIngrosso + prezzoMargine;

    function Iva() {
        return (prezzoDettaglio / 100) * 20;
    }
    return Iva() + prezzoDettaglio;
}

console.log(prezzoTotale(30, 40));

/* Funzione comparazione */

let nome = "Genoveffo";
let numero = 8;
let numeroStringa = "8";

console.log(numero === numeroStringa); /* prints false */
console.log(numero == numeroStringa); /*prints true*/
console.log(nome === numeroStringa); /* prints false */
console.log(nome !== numeroStringa); /* prints true */
console.log(nome == numeroStringa); /* prints false */

console.log(typeof nome === typeof numeroStringa); /*prints true*/
console.log(typeof nome == typeof numero); /* prints false */
console.log(typeof nome != typeof numero); /* prints true */
console.log(typeof nome != typeof numeroStringa); /* prints false */