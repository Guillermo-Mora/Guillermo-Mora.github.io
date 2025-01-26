/*Obtener fecha actual*/

const currentYear = new Date().getFullYear();
document.getElementById("year").innerHTML = currentYear;

/*---*/

/*Hacer el menú desplegable*/

const button = document.querySelector('#menuButton');
const menu = document.querySelector('.menu-js');
const header = document.querySelector('.header-js');

button.addEventListener('click', () => {
    menu.classList.toggle('activado');
    header.classList.toggle('activado');
});

/*Cerrar el menú cuando se haga clic en cualquier opción del menú*/

const menuLinks = document.querySelectorAll('.menu-js a');

menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('activado');
        header.classList.remove('activado');
    });
});

/*---*/

/*ESTO DE AQUI ABAJO TENGO QUE CAMBIARLO A UN ARCHIVO JS DIFERENTE PARA QUE SOLO AFECTE A LA PAGINA DE INICIO*/

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

/*---*/