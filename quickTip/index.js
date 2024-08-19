function update(){
    let bill = Number(document.getElementById("txtBill").value)
    let tipPercent = document.getElementById("tipInput").value
    let split = Number(document.getElementById("splitInput").value)
    let percent = document.getElementById("tipPercent")
    let valueTip = document.getElementById("tipTotal")
    let spanTotal = document.getElementById("spanTotal")
    let person = document.getElementById("person")
    let billEach = document.getElementById("billEach")

    let tipTotal = bill*tipPercent/100
    let total = bill+tipTotal

    percent.innerHTML = `${tipPercent}%`
    valueTip.innerHTML = tipTotal
    spanTotal.innerHTML = total
    person.innerHTML = `${split} person`
    billEach.innerHTML = total/split

    if(bill <= 0)
        alert("Informe um valor maior que 0")
}