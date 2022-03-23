window.addEventListener('load', () => {
    Array.from(document.querySelectorAll('th')).forEach((e) => {
        e.addEventListener('click', () => {
            switch (e.innerHTML) {
                case 'Lunes':
                    Array.from(document.querySelectorAll('th')).forEach((e) => {
                        e.style.cssText = 'background-color:#2f2f2f;color:#fff';
                    });
                    e.style.cssText = 'background-color:#fff;color:crimson';
                    break;
                case 'Martes':
                    Array.from(document.querySelectorAll('th')).forEach((e) => {
                        e.style.cssText = 'background-color:#2f2f2f;color:#fff';
                    });
                    e.style.cssText = 'background-color:#fff;color:crimson';
                    break;
                case 'Miércoles':
                    Array.from(document.querySelectorAll('th')).forEach((e) => {
                        e.style.cssText = 'background-color:#2f2f2f;color:#fff';
                    });
                    e.style.cssText = 'background-color:#fff;color:crimson';
                    break;
                case 'Jueves':
                    Array.from(document.querySelectorAll('th')).forEach((e) => {
                        e.style.cssText = 'background-color:#2f2f2f;color:#fff';
                    });
                    e.style.cssText = 'background-color:#fff;color:crimson';
                    break;
                case 'Viernes':
                    Array.from(document.querySelectorAll('th')).forEach((e) => {
                        e.style.cssText = 'background-color:#2f2f2f;color:#fff';
                    });
                    e.style.cssText = 'background-color:#fff;color:crimson';
                    break;
                case 'Sábado':
                    Array.from(document.querySelectorAll('th')).forEach((e) => {
                        e.style.cssText = 'background-color:#2f2f2f;color:#fff';
                    });
                    e.style.cssText = 'background-color:#fff;color:crimson';
                    break;
                case 'Domingo':
                    Array.from(document.querySelectorAll('th')).forEach((e) => {
                        e.style.cssText = 'background-color:#2f2f2f;color:#fff';
                    });
                    e.style.cssText = 'background-color:#fff;color:crimson';
                    break;
                default:
                    break;
            }
        })

    });
});