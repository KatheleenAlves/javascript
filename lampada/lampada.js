const turnOn = document.getElementById("turnOn")
const turnOff = document.getElementById("turnOff")
const lamp = document.getElementById("lampada")

//CAPTURAR O CLICK
function ligar(){
    if (!estaQuebrada()){
        lamp.src = 'img/ligada.jpg'
    }   
}

function desligar(){
    if (!estaQuebrada()){
        lamp.src = 'img/desligada.jpg' 
    }
}

function quebrar(){
    lamp.src = 'img/quebrada.jpg'
}

function estaQuebrada(){
    return lamp.src.indexOf('quebrada') > -1
}

turnOn.addEventListener('click', ligar) //Capturar o link
turnOff.addEventListener('click', desligar) //Capturar o link
lamp.addEventListener('mouseover', ligar) //mouse em cima
lamp.addEventListener('mouseleave', desligar) //mouse sai
lamp.addEventListener('dblclick', quebrar) //double click



// function desligar(){
    
// }