/*Abrir y cerrar CV*/

const abrirCV = document.querySelector('#abrirCV');
const divCV = document.querySelector('.contenedor-cv');
const cuerpo = document.querySelector('.scroll-activo');

abrirCV.addEventListener('click', () => {
    divCV.classList.toggle('contenedor-cv-activado');
    cuerpo.classList.toggle('scroll-inactivo');
});

const cerrarMenuCV = document.querySelector('.cerrar-cv');

cerrarMenuCV.addEventListener('click', () => {
    divCV.classList.remove('contenedor-cv-activado');
    cuerpo.classList.remove('scroll-inactivo');
});