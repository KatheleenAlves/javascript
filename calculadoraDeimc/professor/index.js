const calcular = document.getElementById("calcular")

function imc(){
    const nome = document.getElementById("nome").value
    const altura = document.getElementById("altura").value
    const peso = document.getElementById("peso").value
    const resultado = document.getElementById("resultado")

    //Validação de preenchimento de campos
    if(nome !== '' && altura !== '' && peso !== '' ){
        const imc = peso / altura**2

        let classificacao = ''

        if (imc > 35){
            classificacao = 'com obesidade extrema'
        }else if(imc >= 30){
            classificacao = 'com obesidade'       
        }
        else if(imc >=25 ){
            classificacao = 'com excesso de peso'
        }else if(imc > 18.5){
            classificacao = 'no peso normal'
        }else{
            classificacao = 'abaixo do peso'
        }

        resultado.textContent = `${nome} seu imc é ${imc.toFixed(1)} e você está ${classificacao}`
    }else{
        resultado.textContent = 'Preencha todos os campos!'
    }
}

calcular.addEventListener('click', imc) //Quando o evento de click ocorrer, a função "imc" é chamada

