
var num = document.querySelector('input#vn')
var list = document.querySelector('select#flista')
var res = document.querySelector('div#res')
var valores = []

function isNumber(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}

function inLista(n, l){
    if(l.indexOF(Number(n)) != -1) {
        return true
    } else {
        return false
    }

}


function adicionar(){
    if(isNumber(num.value) && !inLista(num.value, valores)) {
        window.alert('tudo ok')

    } else {
        window.alert("Valor invalido ou ja inserido")
    }
}