buttonAdd = document.getElementById("addTask");


buttonAdd.addEventListener("click",function(){
let  inputTask = document.getElementById("inputTask").value
let newTaskPosition = document.getElementById("TaskList")
var li = document.createElement("li")
li.innerHTML=inputTask
li.classList.add("item")
li.addEventListener("click",function(){
    li.remove()
    rimuoviElementodaDb(li)
} )
newTaskPosition.appendChild(li)
salvaDatiNelDb(inputTask)



})

function creaHTML(){
let newTaskPosition = document.getElementById("TaskList")    
var elementiSalvati =JSON.parse(localStorage.getItem("elementiSalvati"))
elementiSalvati.forEach(function(elemento){
var li = document.createElement("li")
li.innerHTML=elemento
li.classList.add("item")
li.addEventListener("click",function(){
    li.remove()
    rimuoviElementodaDb(li)
} )
newTaskPosition.appendChild(li)
})
}






















 //con questa funzione salvo e aggiorno i dati in localstorage
 function salvaDatiNelDb(inputTask){

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
    db.push(inputTask)
    
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