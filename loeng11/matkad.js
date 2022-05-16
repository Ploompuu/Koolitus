console.log("Matkad")

const matk1 = {
    nimetus: "Kevadine matk ümber Türi järve",
    kuupäev: "05.05.2022",
    kohtadeArv: 20,
    pildiURL: "./assets/apelsin.jpg"
}

const matk2 = {
    nimetus: "Kevadine rattamatk Kõrvemaal",
    kuupäev: "10.05.2022",
    kohtadeArv: 25,
    pildiURL: "./assets/banaan.png"
}

const matk3 = {
    nimetus: "Kiirkõnni matk Pärnus",
    kuupäev: "30.05.2022",
    kohtadeArv: 10,
    pildiURL: "./assets/porgand.jpg"
}

const matk4 = {
    nimetus: "Süstamatk ümber Hiiumaa",
    kuupäev: "30.06.2022",
    kohtadeArv: 10,
    pildiURL: "./assets/porgand.jpg"
}


const matkad = [
    matk1,
    matk2,
    matk3,
    matk4
]

function matkaTervitus(matk) {
    console.log(`Teretulemast matkale ${matk.nimetus} mis algab ${matk.kuupäev}`)
    console.log(`Kokku saab matkale tulla ${matk.kohtadeArv} osalejat`)
    const matkadElement = document.getElementById("matkad")
    matkadElement.innerHTML += `
    <div>
        <h2>${matk.nimetus}</h2>
        <div>Matka toimumisaeg: ${matk.kuupäev}</div>
        <img src="${matk.pildiURL}" width="300">
        <div>KOhtade arv: ${matk.kohtadeArv}</div>
    </div>

    `

}




//matkaTervitus(matk1)
//matkaTervitus(matk2)
//matkaTervitus(matk3)


for (let matkaObjekt of matkad) {
    matkaTervitus(matkaObjekt)
}

function lisaMatk() {
    const uusMatk = {
        nimetus: document.getElementById("matka_nimetus").value,
        kuupäev: document.getElementById("matka_kuupaev").value,
        kohtadeArv: document.getElementById("matka_osalejaid").value,
        pildiURL: "./assets/porgand.jpg"
    }

    matkad.push(uusMatk)
    console.log(matkad)
    matkaTervitus(uusMatk)
}