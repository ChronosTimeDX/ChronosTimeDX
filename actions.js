const buscador = document.getElementById('buscador');

buscador.addEventListener('input', function() {
    const filtro = buscador.value.toLowerCase();
    const tarjetas = document.querySelectorAll('.tarjeta');

    tarjetas.forEach(tarjeta => {
        const nombre = tarjeta.querySelector('h3').innerText.toLowerCase();
        if (nombre.includes(filtro)) {
            tarjeta.style.display = "block";
        } else {
            tarjeta.style.display = "none";
        }
    });
});
