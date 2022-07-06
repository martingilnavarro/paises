let boton = document.querySelector('button');
function paisAlAzar() {
    let r = Math.floor(Math.random()*4);
    boton.innerHTML = ['Argentina', 'Brasil', 'Paraguay', 'Uruguay'][r];
    boton.removeEventListener('click', paisAlAzar);
}
boton.addEventListener('click', paisAlAzar);

let botonAgrandarBandera = document.getElementById('agrandarBandera');
let banderaArgentina = document.getElementById('banderaArgentina');
const agrandarBandera = () => banderaArgentina.width = '50';
botonAgrandarBandera.addEventListener('click', agrandarBandera);

