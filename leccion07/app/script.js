const mounth = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
let userMounth
let mounth2
let showInformation = document.getElementById('showInformation')

const season = (mounth2) => {
    switch (mounth2) {
        case 0:
        case 1:
        case 11:
            showInformation.innerHTML = `<p> El mes es  ${mounth[mounth2]} y la estación es Invierno</p>`
            break
        case 2:
        case 3:
        case 4:
            showInformation.innerHTML = `<p> El mes es  ${mounth[mounth2]} y la estación es Primavera</p>`
            break
        case 5:
        case 6:
        case 7:
            showInformation.innerHTML = `<p> El mes es  ${mounth[mounth2]} y la estación es Verano</p>`
            break
        case 8:
        case 9:
        case 10:
            showInformation.innerHTML = `<p> El mes es  ${mounth[mounth2]} y la estación es Otroño</p>`
            break
        default:
            askMounth()
    }
}

const verifyNumber = (mounth2) => {
    if (isNaN(mounth2)) {
        askMounth()
    } else {
        mounth2 = mounth2 - 1
        season(mounth2)
    }
}

const askMounth = () => {
    userMounth = prompt('Introduce un mes (número)')
    mounth2 = Number(userMounth)
    verifyNumber(mounth2)
}

window.onload = () => {
    askMounth()
}