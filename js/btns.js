window.addEventListener('load', () => {
    var none = false;
    Array.from(document.getElementsByClassName('btns')).forEach((e) => {
        e.addEventListener('click', () => {
            console.log(e.innerHTML);
            switch (e.innerHTML) {
                case 'Bíceps':
                    document.getElementById('biceps').style.display = 'flex';
                    none = true;
                    break;
                case 'Tríceps':
                    document.getElementById('triceps').style.display = 'flex';
                    none = true;
                    break;
                case 'Pecho':
                    document.getElementById('pecho').style.display = 'flex';
                    none = true;
                    break;
                case 'Hombros':
                    document.getElementById('hombro').style.display = 'flex';
                    none = true;
                    break;
                case 'Dorsales':
                    document.getElementById('dorsales').style.display = 'flex';
                    none = true;
                    break;
                case 'Antebrazos':
                    document.getElementById('antebrazos').style.display = 'flex';
                    none = true;
                    break;
                case 'Piernas':
                    document.getElementById('piernas').style.display = 'flex';
                    none = true;
                    break;
                default:
                    break;
            }
        });
    });
});