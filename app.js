var icon = document.getElementById('icon');

icon.onclick = function() {
    document.body.classList.toggle('dark-theme');
    if(document.body.classList.contains("dark-theme")) {
        icon.src = "img/sun.webp";
    }else{
        icon.src = "img/moon.webp";
    }
}

const contenedorQR = document.getElementById('contenedorQR');
const formulario = document.getElementById('formulario');

const QR = new QRCode(contenedorQR);

formulario.addEventListener('submit', (e) => {
    e.preventDefault()
    QR.makeCode(formulario.URL.value);
    formulario.reset();
});