const img = document.getElementById("img")
//Capturando o container pai para depois descobrir os filhos(botões)
const buttons = document.getElementById("buttons")

const trafficLight = (event) => {
   turnOn[event.target.id](); //Chamando evento
}

//Função dentro de objeto
const turnOn = {
    'red': () => img.src = 'img/vermelho.png',
    'yellow': () => img.src = 'img/amarelo.png',
    'green': () => img.src = 'img/verde.png'
}

const changeColor = () =>{

}


buttons.addEventListener("click", trafficLight)

