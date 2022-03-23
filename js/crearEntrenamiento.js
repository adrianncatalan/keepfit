window.addEventListener('load', () => {
    let th = document.querySelectorAll('th');
    let tbody = document.querySelector('tbody');
    let bloque = document.getElementsByClassName('bloque');
    let containerBloque = document.getElementById('containerBloque');
    var reiniciar = false;

    for (let i = 0; i < bloque.length; i++) {
        bloque[i].addEventListener('click', () => {
            let select = parseInt(bloque[i].innerHTML);
            if (select === i + 1) {
                var estilos = window.getComputedStyle(containerBloque);
                var display = estilos.getPropertyValue('display');
                if (display == 'flex') {
                    document.getElementById('addTraining').style.display = 'inline';
                    containerBloque.style.setProperty('display', 'none');
                    document.getElementsByClassName('seleccionar')[0].style.setProperty('display', 'none');
                    var btn = document.createElement('button');
                    btn.innerHTML = 'Reiniciar plan de entrenamiento';
                    btn.className = 'btn';
                    var containerBtn = document.createElement('div');
                    containerBtn.className = 'containerBtn';
                    containerBtn.append(btn);
                    document.body.insertBefore(containerBtn, document.getElementById('main1'));
                    var containerBtn = document.getElementsByClassName('containerBtn');
                    containerBtn[0].addEventListener('click', () => {
                        containerBtn[0].style.setProperty('display', 'none');
                        containerBloque.style.setProperty('display', 'flex');
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