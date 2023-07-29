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
}

function hauteurF() {
    let number2 = Number(hauteur.value)

    volume.value = aireBase.value * number2
    aireLaterale.value = perimetre.value * number2
    aireTotale.value = (2 * Number(aireBase.value) + Number(aireLaterale.value)).toFixed(12)
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

function aireLateraleF() {
    let number = Number(aireLaterale.value)

    aireBase.value = Math.PI * Math.pow(rayon.value, 2)
    diametre.value = 2 * rayon.value
    perimetre.value = diametre.value * Math.PI
    aireTotale.value = (2 * Number(aireBase.value) + Number(aireLaterale.value)).toFixed(12)
    hauteur.value = aireLaterale.value / perimetre.value
    volume.value = aireBase.value * hauteur.value
    rayonF()
}

function aireTotaleF() {
    let number = Number(aireTotale.value)

    aireBase.value = Math.PI * Math.pow(rayon.value, 2)
    diametre.value = 2 * rayon.value
    perimetre.value = diametre.value * Math.PI
    hauteur.value = (number - 2 * aireBase.value) / perimetre.value
    aireLaterale.value = perimetre.value * hauteur.value
    volume.value = aireBase.value * hauteur.value
    rayonF()
}

function volumeF() {
    let number = Number(volume.value)

    aireBase.value = Math.PI * Math.pow(rayon.value, 2)
    diametre.value = 2 * rayon.value
    perimetre.value = diametre.value * Math.PI
    hauteur.value = number / aireBase.value
    aireLaterale.value = perimetre.value * hauteur.value
    aireTotale.value = (2 * Number(aireBase.value) + Number(aireLaterale.value)).toFixed(12)
    rayonF()
}


rayon.onchange = function () {
    rayonF()
}

hauteur.onchange = function () {
    hauteurF()
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

aireLaterale.onchange = function () {
    aireLateraleF()
}

aireTotale.onchange = function () {
    aireTotaleF()
}

volume.onchange = function () {
    volumeF()
}