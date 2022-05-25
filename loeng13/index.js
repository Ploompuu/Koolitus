
const ylesanne1 = { kirjeldus: 'Tee hommikuvõimlemist', KasTehtud: true, tahtsus: 8, tahtaeg: 'enne kella kaheksat' }
const ylesanne2 = { kirjeldus: 'jaluta koeraga', KasTehtud: true, tahtsus: 8, tahtaeg: 'enne kella kaheksat' }
console.log(ylesanne1)

let ylesanded = [ylesanne1, ylesanne2]

ylesanded.push({ kirjeldus: 'tee hommikusöök', KasTehtud: true, tahtsus: 8, tahtaeg: 'enne kella kaheksat' })

//koosta ühe ülesande kirjelduse html element
function tagastaYlesanneHtml(i) {
    let tehtud = ''
    let tehtudKlass = ''
    if (ylesanded[index].KasTehtud) {
        tehtud = 'checked'
        tehtudKlass = 'class="tehtud"'
    }
    return `
    <div ${tehtudKlass}>
        <input type="chekcbox"> ${tehtud}>
        Oluline ülesanne: ${ylesanded[index].kirjeldus} ${ylesanded[index].tahtaeg}
    </div>
    `
}

const ylesandedElement = document.getElementById('ylesanded')
for (let i = 0; i < ylesanded.length; i++) {
    ylesandedElement.innerHTML += tagastaYlesanneHtml(i)
}