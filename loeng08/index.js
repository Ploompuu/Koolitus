let kasutajaNimi = prompt("Sisesta Nimi")

let tervitusElement = document.getElementById("tervitus")

if (kasutajaNimi === "Kalle" || kasutajaNimi === "Malle") {
    tervitusElement.innerHTML = `<h2>Tere, kallis s6ber ${kasutajaNImi}</h2>`
    for (let index = 1; index <= 10; index += 1) {
        tervitusElement.innerHTML += `<p>tere-tere</p>`
    }

} else if (!kasutajaNimi) {
    tervitusElement.innerHTML = `<p class="punane">Jätsid nime sisestamata</p>`

} else {
    tervitusElement.innerHTML = `<p>Tere, ${kasutajaNimi}</p>`
    tervitusElement.innerHTML += `<h2>Tähed sinu numes:</h2>`
    for (let index = 0; index < kasutajaNimi.length; index++) {

    }
    tervitusElement.innerHTML += `<div>täht nr ${index} : ${kasutajaNimi[index]}</div>`
}