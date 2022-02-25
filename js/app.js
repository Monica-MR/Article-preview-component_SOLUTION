
const button = document.querySelector('#btn-share');

cargarEventListener();

function cargarEventListener(){
    button.addEventListener('click', showSocial);
}

function showSocial(){

    const footer = document.querySelector('#footer');
    const autor = document.querySelector('#autor');
    const social = document.querySelector('#social');
    const btnIcon = document.querySelector('#btn-icon');

    autor.classList.toggle('hidden');
    social.classList.toggle('show');
    footer.classList.toggle('bgGris');
    button.classList.toggle('bgGrisClaro');
    btnIcon.classList.toggle('invert');
}