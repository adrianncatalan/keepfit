window.addEventListener('click', () => {
    let img = document.querySelectorAll('img');
    img.forEach((e) => {
        e.addEventListener('click', () => {
            switch (e.className) {
                case 'imgBiceps':
                    let imgBiceps = document.getElementsByClassName('imgBiceps');
                    Array.from(imgBiceps).forEach((e) => {
                        e.style.cssText = 'box-shadow: 2px 2px 2px 2px #fff';
                    });
                    e.style.cssText = 'box-shadow: 2px 2px 2px 2px crimson';
                    break;
                case 'imgTriceps':
                    let imgTriceps = document.getElementsByClassName('imgTriceps');
                    Array.from(imgTriceps).forEach((e) => {
                        e.style.cssText = 'box-shadow: 2px 2px 2px 2px #fff';
                    });
                    e.style.cssText = 'box-shadow: 2px 2px 2px 2px crimson';
                    break;

                case 'imgPecho':
                    let imgPecho = document.getElementsByClassName('imgPecho');
                    Array.from(imgPecho).forEach((e) => {
                        e.style.cssText = 'box-shadow: 2px 2px 2px 2px #fff';
                    });
                    e.style.cssText = 'box-shadow: 2px 2px 2px 2px crimson';
                    break;

                case 'imgHombros':
                    let imgHombros = document.getElementsByClassName('imgHombros');
                    Array.from(imgHombros).forEach((e) => {
                        e.style.cssText = 'box-shadow: 2px 2px 2px 2px #fff';
                    });
                    e.style.cssText = 'box-shadow: 2px 2px 2px 2px crimson';
                    break;

                case 'imgDorsales':
                    let imgDorsales = document.getElementsByClassName('imgDorsales');
                    Array.from(imgDorsales).forEach((e) => {
                        e.style.cssText = 'box-shadow: 2px 2px 2px 2px #fff';
                    });
                    e.style.cssText = 'box-shadow: 2px 2px 2px 2px crimson';
                    break;

                case 'imgAntebrazos':
                    let imgAntebrazos = document.getElementsByClassName('imgAntebrazos');
                    Array.from(imgAntebrazos).forEach((e) => {
                        e.style.cssText = 'box-shadow: 2px 2px 2px 2px #fff';
                    });
                    e.style.cssText = 'box-shadow: 2px 2px 2px 2px crimson';
                    break;

                case 'imgPiernas':
                    let imgPiernas = document.getElementsByClassName('imgPiernas');
                    Array.from(imgPiernas).forEach((e) => {
                        e.style.cssText = 'box-shadow: 2px 2px 2px 2px #fff';
                    });
                    e.style.cssText = 'box-shadow: 2px 2px 2px 2px crimson';
                    break;

                default:
                    break;
            }
        })
    });
});