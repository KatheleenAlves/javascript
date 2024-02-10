function contar(){
    let ini = document.getElementById("txti")
    let fim = document.getElementById("txtf")
    let passo = document.getElementById("txtp")
    let resultado = document.getElementById("res")

    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        resultado.innerHTML = 'Impossível contar!' 
        //alert("[ERRO] Faltam dados")
    }else{
        resultado.innerHTML = `Contando: <br>`
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if(p<=0){
            alert("Passo inválido! Considerando PASSO 1")
            p = 1
        }

        if (i < f){
            for(let c = i; c <= f; c+=p){
                resultado.innerHTML += ` ${c} \u{1F449}`
            }
        }else{
            //contagem regressiva
            for(let c = i; c>=f; c-=p){
                resultado.innerHTML += ` ${c} \u{1F449}`
            }
        }   
        resultado.innerHTML += `\u{1F3C1}`
    }
}