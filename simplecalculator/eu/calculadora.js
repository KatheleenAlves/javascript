
function calculate() {
    let n1 = Number(document.getElementById("n1").value)
    let n2 = Number(document.getElementById("n2").value)
    let options = document.getElementsByName("radioOperacoes")
    let result = document.getElementById("result")
    let calculation = 0

    if (n1 == '' || n2 == '') {
        alert("Preencha todos os campos!")
    } else {
        if (options[0].checked) {
            calculation = n1 + n2
        } else if (options[1].checked) {
            calculation = n1 - n2
        } else if (options[2].checked) {
            calculation = n1 * n2
        } else {
            calculation = n1 / n2
        }
    }
    result.innerHTML = `The result is ${calculation}`
}