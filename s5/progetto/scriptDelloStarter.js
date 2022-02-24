 //con questa funzione salvo e aggiorno i dati in localstorage
 function salvaDatiNelDb(aggiunta){

    /*salvataggio dati*/
    
        /* versione estesa
        if( localStorage.getItem('elementiSalvati') == null ){
            var db = [aggiunta]
        }else{
        var db = JSON.parse(localStorage.getItem('elementiSalvati'))
        db.push(aggiunta)
    }
    */

    var ls = localStorage.getItem('elementiSalvati')
    
    var db = ls ? JSON.parse(ls) : []
    db.push(aggiunta)
    
    localStorage.setItem('elementiSalvati',JSON.stringify(db))
}

//con questa funzione rimuovo un elemento da localstorage
function rimuoviElementodaDb(el){

    let ls = localStorage.getItem('elementiSalvati')
    let db = JSON.parse(ls)

    let indiceElemento = db.indexOf(el.innerHTML)

    db.splice(indiceElemento,1)

    localStorage.setItem('elementiSalvati',JSON.stringify(db))
}