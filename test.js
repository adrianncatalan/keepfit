window.addEventListener('load', () => {
    // let bloque = document.getElementsByClassName('bloque');
    let tabla = document.createElement('table');
    let thead = document.createElement('thead');
    let tbody = document.createElement('tbody');
    tabla.className = "tabla";


    for (let j = 1; j < 7; j++) {
        let filasHead = document.createElement("th");
        filasHead.innerHTML = 'Lunes'
        thead.append(filasHead);

        for (let k = 1; k < 7; k++) {
            let celdas = document.createElement("td");
            filasHead.appendChild(celdas);


        }

        tabla.append(filasHead)


    }
    document.body.append(tabla);
})

