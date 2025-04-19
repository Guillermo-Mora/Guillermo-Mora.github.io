// Cargar el archivo lang.json
let translations = {};

fetch('lang.json')
    .then(response => response.json())
    .then(data => {
        translations = data;
        // Establecer idioma por defecto (español)
        setLanguage('es');
    })
    .catch(error => console.error('Error loading language file:', error));

function setLanguage(lang) {
    // Guardar preferencia en localStorage
    localStorage.setItem('language', lang);

    // Actualizar todos los elementos con data-key
    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.getAttribute('data-key');
        if (translations[lang] && translations[lang][key]) {
            // Para elementos que contienen HTML
            if (element.hasAttribute('data-html')) {
                element.innerHTML = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });

    // Actualizar enlace de CV
    const cvLink = document.getElementById('cvDownloadLink');
    if (lang === 'en') {
        cvLink.href = "doc/Guillermo-Mora-Mortes-CV-EN.pdf";
    } else {
        cvLink.href = "doc/Guillermo-Mora-Mortes-CV.pdf";
    }

    // Actualizar atributos title
    document.querySelectorAll('[data-title-key]').forEach(element => {
        const titleKey = element.getAttribute('data-title-key');
        if (translations[lang] && translations[lang][titleKey]) {
            element.setAttribute('title', translations[lang][titleKey]);
        }
    });
}

// Selecciona todos los botones de idioma
document.querySelectorAll('.lang-option').forEach(button => {
    button.addEventListener('click', function () {
        const selectedLang = this.getAttribute('data-lang');
        setLanguage(selectedLang);
    });
});

// Cargar idioma al iniciar
document.addEventListener('DOMContentLoaded', function () {
    const savedLang = localStorage.getItem('language') || 'es';
    setLanguage(savedLang);
});