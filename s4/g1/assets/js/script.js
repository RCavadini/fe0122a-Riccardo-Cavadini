var prezzo = 333;
var costo = 5;

function consiglio() {
    if (prezzo >= 10) {
        return "non comprare";
    } else {
        return "compra";
    }
}

function applicazioneIva(){
    if (prezzo>=20){
        prezzoIvato = prezzo +((prezzo/100)*20)
        return prezzoIvato;
    }
    else{
        prezzoIvato=prezzo;
        return prezzoIvato;
    }
}