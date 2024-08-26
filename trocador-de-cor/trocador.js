document.getElementById("btn-color").addEventListener("click", function(){
    /*Arredonda o número (Math.floor) 
    
    */
    const corAleatoria = Math.floor(Math.random() * 16777215).toString(16)

    document.body.style.background  = "#" + corAleatoria

    console.log(corAleatoria)
}) 