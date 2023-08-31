let rayon = document.getElementById('rayon')
let diametre = document.getElementById('diametre')
let perimetre = document.getElementById('perimetre')
let aireBase = document.getElementById('aireBase')
let hauteur = document.getElementById('hauteur')
let aireLaterale = document.getElementById('aireLaterale')
let aireTotale = document.getElementById('aireTotale')
let volume = document.getElementById('volume')
btnReset = document.getElementById('reset')
btnCalcul = document.getElementById('calcul')
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

    if (number <= 0) {
        rayon.classList.replace("is-link", "is-danger")
        modal.classList.add("is-active")
    } else {
        diametre.value = (number * 2).toFixed(3)
        perimetre.value = (diametre.value * Math.PI).toFixed(3)
        aireBase.value = (Math.PI * Math.pow(number, 2)).toFixed(3)

        resetEquation()
        rayonE()
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
        perimetre.value = (diametre.value * Math.PI).toFixed(3)
        aireBase.value = (Math.PI * Math.pow(rayon.value, 2)).toFixed(3)

        resetEquation()
        diametreE()
        updateNumbers()
        dangerToLink()
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

        resetEquation()
        perimetreE()
        updateNumbers()
        dangerToLink()
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

        resetEquation()
        aireBaseE()
        updateNumbers()
        dangerToLink()
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

        resetEquation2()
        hauteurE()
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
        aireTotale.value = (2 * Number(aireBase.value) + Number(aireLaterale.value)).toFixed(3)
        hauteur.value = (aireLaterale.value / perimetre.value).toFixed(3)
        volume.value = (aireBase.value * hauteur.value).toFixed(3)

        resetEquation2()
        aireLateraleE()
        updateNumbers2()
        dangerToLink()
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
        hauteur.value = ((number - 2 * aireBase.value) / perimetre.value).toFixed(3)
        aireLaterale.value = (perimetre.value * hauteur.value).toFixed(3)
        volume.value = (aireBase.value * hauteur.value).toFixed(3)

        resetEquation2()
        aireTotaleE()
        updateNumbers2()
        dangerToLink()
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
        hauteur.value = (number / aireBase.value).toFixed(3)
        aireLaterale.value = (perimetre.value * hauteur.value).toFixed(3)
        aireTotale.value = (2 * Number(aireBase.value) + Number(aireLaterale.value)).toFixed(3)


        resetEquation2()
        volumeE()
        updateNumbers2()
        dangerToLink()
    }
}



btnCalcul.onclick = function() {
    const rayonV = parseFloat(rayon.value)
    const diametreV = parseFloat(diametre.value)
    const perimetreV = parseFloat(perimetre.value)
    const aireBaseV = parseFloat(aireBase.value)
    const hauteurV = parseFloat(hauteur.value)
    const aireLateraleV = parseFloat(aireLaterale.value)
    const aireTotaleV = parseFloat(aireTotale.value)
    const volumeV = parseFloat(volume.value)

    const numberOfPart1 = [rayonV, diametreV, perimetreV, aireBaseV].filter((value) => !isNaN(value)).length
    const numberOfPart2 = [hauteurV, aireLateraleV, aireTotaleV, volumeV].filter((value) => !isNaN(value)).length

    if (numberOfPart1 === 1 && numberOfPart2 === 1) {
        if (!isNaN(rayonV) && !isNaN(hauteurV)) {
            rayonF()
            hauteurF()
        } else if (!isNaN(rayonV) && !isNaN(aireLateraleV)) {
            rayonF()
            aireLateraleF()
        } else if (!isNaN(rayonV) && !isNaN(aireTotaleV)) {
            rayonF()
            aireTotaleF()
        } else if (!isNaN(rayonV) && !isNaN(volumeV)) {
            rayonF()
            volumeF()
        } else if (!isNaN(diametreV) && !isNaN(hauteurV)) {
            diametreF()
            hauteurF()
        } else if (!isNaN(diametreV) && !isNaN(aireLateraleV)) {
            diametreF()
            aireLateraleF()
        } else if (!isNaN(diametreV) && !isNaN(aireTotaleV)) {
            diametreF()
            aireTotaleF()
        } else if (!isNaN(diametreV) && !isNaN(volumeV)) {
            diametreF()
            volumeF()
        } else if (!isNaN(perimetreV) && !isNaN(hauteurV)) {
            perimetreF()
            hauteurF()
        } else if (!isNaN(perimetreV) && !isNaN(aireLateraleV)) {
            perimetreF()
            aireLateraleF()
        } else if (!isNaN(perimetreV) && !isNaN(aireTotaleV)) {
            perimetreF()
            aireTotaleF()
        } else if (!isNaN(perimetreV) && !isNaN(volumeV)) {
            perimetreF()
            volumeF()
        } else if (!isNaN(aireBaseV) && !isNaN(hauteurV)) {
            aireBaseF()
            hauteurF()
        } else if (!isNaN(aireBaseV) && !isNaN(aireLateraleV)) {
            aireBaseF()
            aireLateraleF()
        } else if (!isNaN(aireBaseV) && !isNaN(aireTotaleV)) {
            aireBaseF()
            aireTotaleF()
        } else if (!isNaN(aireBaseV) && !isNaN(volumeV)) {
            aireBaseF()
            volumeF()
        }
    }
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
    resetEquation()
    resetEquation2()
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

function resetEquation() {
    ajout = document.querySelector('.equation')
    ajout.innerHTML = ""
}

function resetEquation2() {
    ajout2 = document.querySelector('.equation2')
    ajout2.innerHTML = ""
}