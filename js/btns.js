window.addEventListener('load', () => {
    Array.from(document.getElementsByClassName('btns')).forEach((e) => {
        e.addEventListener('click', () => {
            switch (e.innerHTML) {
                case 'Bíceps':
                    let divBiceps = document.getElementById('biceps');
                    let estilosBiceps = window.getComputedStyle(divBiceps);
                    Array.from(document.getElementsByClassName('btns')).forEach((e) => {
                        e.style.cssText = 'background-color:crimson;color:#fff';
                    });
                    e.style.cssText = 'background-color:#fff;color:#2f2f2f';
                    if (estilosBiceps.display == 'none') {
                        divBiceps.style.setProperty('display', 'flex');
                    } else {
                        divBiceps.style.setProperty('display', 'none');
                    }
                    break;
                case 'Tríceps':
                    Array.from(document.getElementsByClassName('btns')).forEach((e) => {
                        e.style.cssText = 'background-color:crimson;color:#fff';
                    });
                    e.style.cssText = 'background-color:#fff;color:#2f2f2f';
                    let divTriceps = document.getElementById('triceps');
                    let estilosTriceps = window.getComputedStyle(divTriceps);
                    if (estilosTriceps.display == 'none') {
                        divTriceps.style.setProperty('display', 'flex');
                    } else {
                        divTriceps.style.setProperty('display', 'none');
                    }
                    break;
                case 'Pecho':
                    Array.from(document.getElementsByClassName('btns')).forEach((e) => {
                        e.style.cssText = 'background-color:crimson;color:#fff';
                    });
                    e.style.cssText = 'background-color:#fff;color:#2f2f2f';
                    let divPecho = document.getElementById('pecho');
                    let estilosPecho = window.getComputedStyle(divPecho);
                    if (estilosPecho.display == 'none') {
                        divPecho.style.setProperty('display', 'flex');
                    } else {
                        divPecho.style.setProperty('display', 'none');
                    }
                    break;
                case 'Hombros':
                    Array.from(document.getElementsByClassName('btns')).forEach((e) => {
                        e.style.cssText = 'background-color:crimson;color:#fff';
                    });
                    e.style.cssText = 'background-color:#fff;color:#2f2f2f';
                    let divHombros = document.getElementById('hombros');
                    let estilosHombros = window.getComputedStyle(divHombros);
                    if (estilosHombros.display == 'none') {
                        divHombros.style.setProperty('display', 'flex');
                    } else {
                        divHombros.style.setProperty('display', 'none');
                    }
                    break;
                case 'Dorsales':
                    Array.from(document.getElementsByClassName('btns')).forEach((e) => {
                        e.style.cssText = 'background-color:crimson;color:#fff';
                    });
                    e.style.cssText = 'background-color:#fff;color:#2f2f2f';
                    let divDorsales = document.getElementById('dorsales');
                    let estilosDorsales = window.getComputedStyle(divDorsales);
                    if (estilosDorsales.display == 'none') {
                        divDorsales.style.setProperty('display', 'flex');
                    } else {
                        divDorsales.style.setProperty('display', 'none');
                    }
                    break;
                case 'Antebrazos':
                    Array.from(document.getElementsByClassName('btns')).forEach((e) => {
                        e.style.cssText = 'background-color:crimson;color:#fff';
                    });
                    e.style.cssText = 'background-color:#fff;color:#2f2f2f';
                    let divAntebrazos = document.getElementById('antebrazos');
                    let estilosAntebrazos = window.getComputedStyle(divAntebrazos);
                    if (estilosAntebrazos.display == 'none') {
                        divAntebrazos.style.setProperty('display', 'flex');
                    } else {
                        divAntebrazos.style.setProperty('display', 'none');
                    }
                    break;
                case 'Piernas':
                    Array.from(document.getElementsByClassName('btns')).forEach((e) => {
                        e.style.cssText = 'background-color:crimson;color:#fff';
                    });
                    e.style.cssText = 'background-color:#fff;color:#2f2f2f';
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