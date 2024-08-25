const img = document.getElementById("img")
//Capturando o container pai para depois descobrir os filhos(botões)
const buttons = document.getElementById("buttons")
let colorIndex = 0
let intervalId = null

const trafficLight = (event) => {
    stopAutomatic() //Toda vez que o evento for chamado, o stop automatic zera o intervalo
    turnOn[event.target.id](); //Chamando evento
}

const nextIndex = () =>{

   // colorIndex = colorIndex < 2 ? ++colorIndex : 0  // se for menor que 2 incrementa, se não 0

    if (colorIndex < 2){
        colorIndex++
    }else{
        colorIndex = 0
    }
}

const changeColor = () =>{
    const colors = ['red', 'yellow', 'green']
    const color = colors[colorIndex]
    turnOn[color]()
    nextIndex();

}   

const stopAutomatic = () => {
    clearInterval(intervalId)
}

//Função dentro de objeto
const turnOn = {
    'red': () => img.src = 'img/vermelho.png',
    'yellow': () => img.src = 'img/amarelo.png',
    'green': () => img.src = 'img/verde.png',
    // 'automatic': () => setTimeout(changeColor, 1000)  Executaria uma vez daqui a 1000ms
    'automatic': () => intervalId = setInterval(changeColor, 1000)   //Executa a cada 1000ms, intervalId armazena o intervalo do id, pq cada vez que clicamos gera um id
}


buttons.addEventListener("click", trafficLight)

