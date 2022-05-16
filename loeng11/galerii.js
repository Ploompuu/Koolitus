const pildid = [
    './assets/apelsin.jpg',
    './assets/banaan.png',
    './assets/porgand.jpg',
    'https://nort.ee/wp-content/uploads/2022/04/NORT_logo-100x100.png'
]


let puuviljadeGalerii = ""

for (let puuvili of pildid) {
    puuviljadeGalerii += `<img src="${puuvili}" width=300>`
    console.log(puuviljadeGalerii)
}

let galeriiElement = document.getElementById("galerii")
galeriiElement.innerHTML = puuviljadeGalerii