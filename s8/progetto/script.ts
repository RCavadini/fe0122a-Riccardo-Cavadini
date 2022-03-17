class Abbigliamento{
    id:number
    codprod:number
    collezione:string
    capo:string
    modello:number
    quantita:number
    colore:string
    prezzoivaesclusa:number
    prezzoivainclusa:number
    disponibile:string
    saldo:number
    
    constructor(id:number,codprod:number,collezione:string,capo:string,modello:number,quantita:number,colore:string,prezzoivaesclusa:number,prezzoivainclusa:number,disponibile:string,saldo:number){
        this.id=id
        this.codprod=codprod
        this.collezione=collezione
        this.capo=capo
        this.modello=modello
        this.quantita=quantita
        this.colore=colore
        this.prezzoivaesclusa=prezzoivaesclusa
        this.prezzoivainclusa=prezzoivainclusa
        this.disponibile=disponibile
        this.saldo=saldo

    }
    getsaldocapo():number{
        return (this.prezzoivainclusa/100)*this.saldo
    }
    getacquistocapo():number{
        return this.prezzoivainclusa-this.getsaldocapo()
    }
}


fetch("Abbigliamento.json")
.then(res=>res.json())
.then(data=>{
    data.forEach((item:Abbigliamento) => {
        let abbigliamento = new Abbigliamento(item.id,item.codprod,item.collezione,item.capo,item.modello,item.quantita,item.colore,item.prezzoivaesclusa,item.prezzoivainclusa,item.disponibile,item.saldo)
        console.log(abbigliamento)
        console.log("Saldo del capo: "+abbigliamento.getsaldocapo()+ "€")
        console.log("Saldo acquisto capo: "+abbigliamento.getacquistocapo()+ "€")
    });

})

let camicia = new Abbigliamento(6,9866,"primavera","camicia",1296,10,"viola",40,48.8,"magazzino",22)
console.log(camicia)
console.log("Saldo del capo: "+camicia.getsaldocapo()+ "€")
console.log("Saldo acquisto capo: "+camicia.getacquistocapo()+ "€")

let giacca = new Abbigliamento(7,6698,"estate","giacca",1298,40,"nero",60,73.2,"negozio",40)
console.log(giacca)
console.log("Saldo del capo: "+giacca.getsaldocapo()+ "€")
console.log("Saldo acquisto capo: "+giacca.getacquistocapo()+ "€")

let jeans = new Abbigliamento(8,6698,"inverno","jeans",1299,5,"jeans",30,36.6,"negozio",70)
console.log(jeans)
console.log("Saldo del capo: "+jeans.getsaldocapo()+ "€")
console.log("Saldo acquisto capo: "+jeans.getacquistocapo()+ "€")