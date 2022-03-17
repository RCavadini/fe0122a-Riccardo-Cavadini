var Abbigliamento = /** @class */ (function () {
    function Abbigliamento(id, codprod, collezione, capo, modello, quantita, colore, prezzoivaesclusa, prezzoivainclusa, disponibile, saldo) {
        this.id = id;
        this.codprod = codprod;
        this.collezione = collezione;
        this.capo = capo;
        this.modello = modello;
        this.quantita = quantita;
        this.colore = colore;
        this.prezzoivaesclusa = prezzoivaesclusa;
        this.prezzoivainclusa = prezzoivainclusa;
        this.disponibile = disponibile;
        this.saldo = saldo;
    }
    Abbigliamento.prototype.getsaldocapo = function () {
        return (this.prezzoivainclusa / 100) * this.saldo;
    };
    Abbigliamento.prototype.getacquistocapo = function () {
        return this.prezzoivainclusa - this.getsaldocapo();
    };
    return Abbigliamento;
}());
fetch("Abbigliamento.json")
    .then(function (res) { return res.json(); })
    .then(function (data) {
    data.forEach(function (item) {
        var abbigliamento = new Abbigliamento(item.id, item.codprod, item.collezione, item.capo, item.modello, item.quantita, item.colore, item.prezzoivaesclusa, item.prezzoivainclusa, item.disponibile, item.saldo);
        console.log(abbigliamento);
        console.log("Saldo del capo: " + abbigliamento.getsaldocapo() + "€");
        console.log("Saldo acquisto capo: " + abbigliamento.getacquistocapo() + "€");
    });
});
var camicia = new Abbigliamento(6, 9866, "primavera", "camicia", 1296, 10, "viola", 40, 48.8, "magazzino", 22);
console.log(camicia);
console.log("Saldo del capo: " + camicia.getsaldocapo() + "€");
console.log("Saldo acquisto capo: " + camicia.getacquistocapo() + "€");
var giacca = new Abbigliamento(7, 6698, "estate", "giacca", 1298, 40, "nero", 60, 73.2, "negozio", 40);
console.log(giacca);
console.log("Saldo del capo: " + giacca.getsaldocapo() + "€");
console.log("Saldo acquisto capo: " + giacca.getacquistocapo() + "€");
var jeans = new Abbigliamento(8, 6698, "inverno", "jeans", 1299, 5, "jeans", 30, 36.6, "negozio", 70);
console.log(jeans);
console.log("Saldo del capo: " + jeans.getsaldocapo() + "€");
console.log("Saldo acquisto capo: " + jeans.getacquistocapo() + "€");
