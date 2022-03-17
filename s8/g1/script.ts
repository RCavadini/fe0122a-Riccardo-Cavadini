var giocatoreUno: number = 30;
var giocatoreDue: number = 80;
var numeroCasuale: number = Math.floor(Math.random() * (100 - 1) + 1);
var numeroVicinoUno: number = (giocatoreUno - numeroCasuale) * -1;
var numeroVicinoDue: number = giocatoreDue - numeroCasuale;

console.log(numeroVicinoUno);
console.log(numeroVicinoDue);
console.log(numeroCasuale);

if (giocatoreUno == numeroCasuale) {
  alert("Giocatore uno ha vinto!");
} else if (giocatoreDue == numeroCasuale) {
  alert("Giocatore due ha vinto!");
} else if (giocatoreUno == numeroCasuale && giocatoreDue == numeroCasuale) {
  alert("Bravi tutti");
} else if (numeroVicinoUno < numeroVicinoDue) {
  alert("Fate schifo, ma giocatore Uno un po' meno");
} else {
  alert("Fate schifo, ma giocatore Due un po' meno");
}

//pare che funzioni
