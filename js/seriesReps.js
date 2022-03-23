window.addEventListener('load', () => {

    let seriesReps = document.getElementsByClassName('seriesReps');

    Array.from(seriesReps).forEach((e) => {
        e.addEventListener('click', () => {
            Array.from(seriesReps).forEach((e) => {
                e.style.cssText = 'background-color:crimson;color:#fff';
            });
            e.style.cssText = 'background-color:#fff;color:#2f2f2f';
        })
    })

});