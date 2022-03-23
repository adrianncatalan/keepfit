window.addEventListener('load', () => {
    var none = true;
    Array.from(document.getElementsByClassName('btns')).forEach((e) => {
        e.addEventListener('click', () => {
            switch (e.innerHTML) {
                case 'Bíceps':
                    let divBiceps = document.getElementById('biceps');
                    let estilosBiceps = window.getComputedStyle(divBiceps);
                    if (estilosBiceps.display == 'none') {
                        divBiceps.style.setProperty('display', 'flex');
                    } else {
                        divBiceps.style.setProperty('display', 'none');
                    }
                    break;
                case 'Tríceps':
                    let divTriceps = document.getElementById('triceps');
                    let estilosTriceps = window.getComputedStyle(divTriceps);
                    if (estilosTriceps.display == 'none') {
                        divTriceps.style.setProperty('display', 'flex');
                    } else {
                        divTriceps.style.setProperty('display', 'none');
                    }
                    break;
                case 'Pecho':
                    let divPecho = document.getElementById('pecho');
                    let estilosPecho = window.getComputedStyle(divPecho);
                    if (estilosPecho.display == 'none') {
                        divPecho.style.setProperty('display', 'flex');
                    } else {
                        divPecho.style.setProperty('display', 'none');
                    }
                    break;
                case 'Hombros':
                    let divHombros = document.getElementById('hombros');
                    let estilosHombros = window.getComputedStyle(divHombros);
                    if (estilosHombros.display == 'none') {
                        divHombros.style.setProperty('display', 'flex');
                    } else {
                        divHombros.style.setProperty('display', 'none');
                    }
                    break;
                case 'Dorsales':
                    let divDorsales = document.getElementById('dorsales');
                    let estilosDorsales = window.getComputedStyle(divDorsales);
                    if (estilosDorsales.display == 'none') {
                        divDorsales.style.setProperty('display', 'flex');
                    } else {
                        divDorsales.style.setProperty('display', 'none');
                    }
                    break;
                case 'Antebrazos':
                    let divAntebrazos = document.getElementById('antebrazos');
                    let estilosAntebrazos = window.getComputedStyle(divAntebrazos);
                    if (estilosAntebrazos.display == 'none') {
                        divAntebrazos.style.setProperty('display', 'flex');
                    } else {
                        divAntebrazos.style.setProperty('display', 'none');
                    }
                    break;
                case 'Piernas':
                    let divPiernas = document.getElementById('piernas');
                    let estilosPiernas = window.getComputedStyle(divPiernas);
                    if (estilosPiernas.display == 'none') {
                        divPiernas.style.setProperty('display', 'flex');
                    } else {
                        divPiernas.style.setProperty('display', 'none');
                    }
                    break;
                default:
                    break;
            }
        });
    });
});