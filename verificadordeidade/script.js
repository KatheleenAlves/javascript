function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var anonascimento = document.getElementById("txtano")
    var resultado = document.getElementById("res")

    if(anonascimento.value.length == 0 || anonascimento.value > ano) //SE A QUANTIDADE DE STRING FOR IGUAL A ZERO, SIGNFICIA QUE O CAMPO ESTÁ VAZIO
    {
        alert("[ERRO]Verifique os dados e tente novamente!")
    }
    else{
        var fsexo = document.getElementsByName("radsex")
        var idade = ano - Number(anonascimento.value)
        var genero = '' //essas aspas significa uma string vazia
        var img = document.createElement("img")
        img.setAttribute('id', 'foto') //atribuindo um id para a tag "img"


        if(fsexo[0].checked){
            genero = 'homem'
            if(idade >= 0 && idade <10){
                //criança
                img.setAttribute('src', 'criancamenino.png')
            }else if(idade <21){
                //jovem
                img.setAttribute('src', 'adolescentemenino.png')
            }else if(idade <50){
                //adulto
                img.setAttribute('src', 'meiaidadehomem.png')
            }else{
                //idoso
                img.setAttribute('src', 'idoso.png')
            }
        }else if(fsexo[1].checked){
            genero = 'mulher'
            if(idade >= 0 && idade <10){
                //criança
                img.setAttribute('src', 'criancamenina.png')
            }else if(idade <21){
                //jovem
                img.setAttribute('src', 'adolescentemenina.png')
            }else if(idade <50){
                //adulto
                img.setAttribute('src', 'meiaidademulher.png')
            }else{
                //idoso
                img.setAttribute('src', 'idosa.png')
            }
        }
        resultado.style.textAlign = 'center'
        resultado.innerHTML = `Detectamos ${genero} com ${idade} anos`
        resultado.appendChild(img)
    }
}