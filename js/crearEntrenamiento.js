window.addEventListener('load', () => {
    let th = document.querySelectorAll('th');
    let tbody = document.querySelector('tbody');
    let bloque = document.getElementsByClassName('bloque');
    let containerQuestion = document.getElementById('container-question');
    var reiniciar = false;

    for (let i = 0; i < bloque.length; i++) {
        bloque[i].addEventListener('click', () => {
            let select = parseInt(bloque[i].innerHTML);
            if (select === i + 1) {
                var estilos = window.getComputedStyle(containerQuestion);
                var display = estilos.getPropertyValue('display');
                if (display == 'flex') {
                    console.log('hola1')
                    containerQuestion.style.setProperty('display', 'none');
                    var btn = document.createElement('button');
                    btn.innerHTML = 'Reiniciar bloques de entrenamientos';
                    btn.className = 'btn';
                    var containerBtn = document.createElement('div');
                    containerBtn.className = 'containerBtn';
                    containerBtn.append(btn);
                    document.body.insertBefore(containerBtn, document.getElementById('containerTabla'));
                    var containerBtn = document.getElementsByClassName('containerBtn');
                    containerBtn[0].addEventListener('click', () => {
                        console.log("hola2");
                        containerBtn[0].style.setProperty('display', 'none');
                        containerQuestion.style.setProperty('display', 'flex');
                        reiniciar = true;
                        if (reiniciar) {
                            location.reload();
                        }
                    })
                }
                for (let j = 1; j <= select; j++) {
                    var filas = document.createElement('tr');
                    for (let k = 1; k <= th.length; k++) {
                        var celdas = document.createElement('td');
                        filas.append(celdas);
                        filas.className = 'filitas';
                    }
                    tbody.append(filas);
                }
            }
        })
    }
});