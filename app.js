let rayon = document.getElementById('rayon')
let diametre = document.getElementById('diametre')
let perimetre = document.getElementById('perimetre')
let aireBase = document.getElementById('aireBase')
let hauteur = document.getElementById('hauteur')
let aireLaterale = document.getElementById('aireLaterale')
let aireTotale = document.getElementById('aireTotale')
let volume = document.getElementById('volume')




function rayonF() {
    
        let number = Number(rayon.value)
        let number2 = Number(hauteur.value)
    
        diametre.value = number * 2
        perimetre.value = diametre.value * Math.PI
        aireBase.value = Math.PI * Math.pow(number, 2)
    
        volume.value = aireBase.value * number2
        aireLaterale.value = perimetre.value * number2
        aireTotale.value = (2 * Number(aireBase.value) + Number(aireLaterale.value)).toFixed(10)
}

function diametreF() {
    let number = Number(diametre.value)

    rayon.value = number / 2
    rayonF()
}

function perimetreF() {
    let number = Number(perimetre.value)

    diametre.value = number / Math.PI
    rayon.value = diametre.value / 2
    aireBase.value = Math.PI * Math.pow(rayon.value, 2)
    rayonF()
}

function aireBaseF() {
    let number = Number(aireBase.value)

    rayon.value = Math.sqrt(number / Math.PI)
    diametre.value = rayon.value * 2
    perimetre.value = diametre.value * Math.PI
    rayonF()
}

rayon.onchange = function () {
    rayonF()
}

hauteur.onchange = function () {
    rayonF()
}

diametre.onchange = function () {
    diametreF()
}

perimetre.onchange = function () {
    perimetreF()
}

aireBase.onchange = function () {
    aireBaseF()
}

