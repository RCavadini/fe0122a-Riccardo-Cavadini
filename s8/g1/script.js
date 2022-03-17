var giocatoreUno = 30;
var giocatoreDue = 80;
var numeroCasuale = Math.floor(Math.random() * (100 - 1) + 1);
var numeroVicinoUno = (giocatoreUno - numeroCasuale) * -1;
var numeroVicinoDue = giocatoreDue - numeroCasuale;
console.log(numeroVicinoUno);
console.log(numeroVicinoDue);
console.log(numeroCasuale);
if (giocatoreUno == numeroCasuale) {
    alert("Giocatore uno ha vinto!");
}
else if (giocatoreDue == numeroCasuale) {
    alert("Giocatore due ha vinto!");
}
else if (giocatoreUno == numeroCasuale && giocatoreDue == numeroCasuale) {
    alert("Bravi tutti");
}
else if (numeroVicinoUno < numeroVicinoDue) {
    alert("Fate schifo, ma giocatore Uno un po' meno");
}
else {
    alert("Fate schifo, ma giocatore Due un po' meno");
}
//pare che funzioni
