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

const menuLinks = document.querySelectorAll('.menu-js a, .enlace-inicio');

menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('activado');
        header.classList.remove('activado');
    });
});

/*---*/


/*Eliminar los # al navegar a las diferentes secciones, ya que es una unica pagina. Y asi mantengo
la ULR limpia y es menos lioso*/
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });