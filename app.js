let rayon = document.getElementById('rayon')
let diametre = document.getElementById('diametre')
let perimetre = document.getElementById('perimetre')
let aireBase = document.getElementById('aireBase')
let hauteur = document.getElementById('hauteur')
let aireLaterale = document.getElementById('aireLaterale')
let aireTotale = document.getElementById('aireTotale')
let volume = document.getElementById('volume')
btnReset = document.getElementById('reset')
let modal = document.getElementById('modal')
let modal2 = document.getElementById('modal2')
numVerif = {
    rayon: rayon.value,
    diametre: diametre.value,
    perimetre: perimetre.value,
    aireBase: aireBase.value
}
numVerif2 = {
    hauteur: hauteur.value,
    aireLaterale: aireLaterale.value,
    aireTotale: aireTotale.value,
    volume: volume.value
}
let isBelowZero = (currentValue) => currentValue <= 0


function rayonF() {
    let number = Number(rayon.value)
    let number2 = Number(hauteur.value)

    if (number <= 0) {
        rayon.classList.replace("is-link", "is-danger")
        modal.classList.add("is-active")
    } else {
        diametre.value = (number * 2).toFixed(3)
        perimetre.value = (diametre.value * Math.PI).toFixed(3)
        aireBase.value = (Math.PI * Math.pow(number, 2)).toFixed(3)

        updateNumbers()
        dangerToLink()
    }
}

function diametreF() {
    let number = Number(diametre.value)

    if (number <= 0) {
        diametre.classList.replace("is-link", "is-danger")
        modal.classList.add("is-active")
    } else {
        rayon.value = (number / 2).toFixed(3)

        updateNumbers()
        dangerToLink()
        rayonF()
    }
}

function perimetreF() {
    let number = Number(perimetre.value)

    if (number <= 0) {
        perimetre.classList.replace("is-link", "is-danger")
        modal.classList.add("is-active")
    } else {
        diametre.value = (number / Math.PI).toFixed(3)
        rayon.value = (diametre.value / 2).toFixed(3)
        aireBase.value = (Math.PI * Math.pow(rayon.value, 2)).toFixed(3)

        updateNumbers()
        dangerToLink()
        rayonF()
    }
}

function aireBaseF() {
    let number = Number(aireBase.value)

    if (number <= 0) {
        aireBase.classList.replace("is-link", "is-danger")
        modal.classList.add("is-active")
    } else {
        rayon.value = Math.sqrt(number / Math.PI).toFixed(3)
        diametre.value = (rayon.value * 2).toFixed(3)
        perimetre.value = (diametre.value * Math.PI).toFixed(3)

        updateNumbers()
        dangerToLink()
        rayonF()
    }
}

function hauteurF() {
    let number2 = Number(hauteur.value)

    if (Object.values(numVerif).some(isBelowZero)) {
        modal2.classList.add("is-active")
        hauteur.classList.replace("is-link", "is-danger")
    } else if (number2 <= 0) {
        modal.classList.add("is-active")
        hauteur.classList.replace("is-link", "is-danger")
    } else {
        volume.value = (aireBase.value * number2).toFixed(3)
        aireLaterale.value = (perimetre.value * number2).toFixed(3)
        aireTotale.value = (2 * Number(aireBase.value) + Number(aireLaterale.value)).toFixed(3)

        updateNumbers2()
        dangerToLink()
    }
}

function aireLateraleF() {
    let number = Number(aireLaterale.value)

    if (Object.values(numVerif).some(isBelowZero)) {
        modal2.classList.add("is-active")
        aireLaterale.classList.replace("is-link", "is-danger")
    } else if (number <= 0) {
        modal.classList.add("is-active")
        aireLaterale.classList.replace("is-link", "is-danger")
    } else {
        aireBase.value = Math.PI * Math.pow(rayon.value, 2)
        diametre.value = 2 * rayon.value
        perimetre.value = diametre.value * Math.PI
        aireTotale.value = (2 * Number(aireBase.value) + Number(aireLaterale.value)).toFixed(12)
        hauteur.value = aireLaterale.value / perimetre.value
        volume.value = aireBase.value * hauteur.value

        updateNumbers2()
        dangerToLink()
        rayonF()
    }
}

function aireTotaleF() {
    let number = Number(aireTotale.value)

    if (Object.values(numVerif).some(isBelowZero)) {
        modal2.classList.add("is-active")
        aireTotale.classList.replace("is-link", "is-danger")
    } else if (number <= 0) {
        modal.classList.add("is-active")
        aireTotale.classList.replace("is-link", "is-danger")
    } else {
        aireBase.value = Math.PI * Math.pow(rayon.value, 2)
        diametre.value = 2 * rayon.value
        perimetre.value = diametre.value * Math.PI
        hauteur.value = (number - 2 * aireBase.value) / perimetre.value
        aireLaterale.value = perimetre.value * hauteur.value
        volume.value = aireBase.value * hauteur.value

        updateNumbers2()
        dangerToLink()
        rayonF()
    }
}

function volumeF() {
    let number = Number(volume.value)

    if (Object.values(numVerif).some(isBelowZero)) {
        modal2.classList.add("is-active")
        volume.classList.replace("is-link", "is-danger")
    } else if (number <= 0) {
        modal.classList.add("is-active")
        volume.classList.replace("is-link", "is-danger")
    } else {
        aireBase.value = Math.PI * Math.pow(rayon.value, 2)
        diametre.value = 2 * rayon.value
        perimetre.value = diametre.value * Math.PI
        hauteur.value = number / aireBase.value
        aireLaterale.value = perimetre.value * hauteur.value
        aireTotale.value = (2 * Number(aireBase.value) + Number(aireLaterale.value)).toFixed(12)

        updateNumbers2()
        dangerToLink()
        rayonF()
    }
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

btnReset.onclick = function () {
    rayon.value = ""
    diametre.value = ""
    perimetre.value = ""
    aireBase.value = ""
    hauteur.value = ""
    aireLaterale.value = ""
    aireTotale.value = ""
    volume.value = ""
    dangerToLink()
    updateNumbers()
    updateNumbers2()
}

function dangerToLink() {
    rayon.classList.replace("is-danger", "is-link")
    diametre.classList.replace("is-danger", "is-link")
    perimetre.classList.replace("is-danger", "is-link")
    aireBase.classList.replace("is-danger", "is-link")
    hauteur.classList.replace("is-danger", "is-link")
    aireLaterale.classList.replace("is-danger", "is-link")
    aireTotale.classList.replace("is-danger", "is-link")
    volume.classList.replace("is-danger", "is-link")
}

function updateNumbers() {
    numVerif.rayon = rayon.value
    numVerif.diametre = diametre.value
    numVerif.perimetre = perimetre.value
    numVerif.aireBase = aireBase.value
}

function updateNumbers2() {
    numVerif2.hauteur = hauteur.value,
        numVerif2.aireLaterale = aireLaterale.value,
        numVerif2.aireTotale = aireTotale.value,
        numVerif2.volume = volume.value
}