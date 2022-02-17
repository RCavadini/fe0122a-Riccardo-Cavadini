function buttonImput(button){
    document.getElementById("Result").value = document.getElementById("Result").value += button.id
}
function solve(){
    document.getElementById("Result").value =eval(document.getElementById("Result").value)
}
function deleteAll(){
    document.getElementById("Result").value = ""
}