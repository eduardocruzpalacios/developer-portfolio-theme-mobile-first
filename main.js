var i = 0;
var txt = 'Desarrollador web y Programador FrontEnd';
var speed = 75;

function typing() {
    if (i < txt.length) {
    document.getElementById("home_msg").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typing, speed);
  }
};

ScrollReveal().reveal('.container', {delay: 500 });

document.querySelector('.an_ld').addEventListener('mouseover', () => {
    console.log('Log de prueba de LinkedIn');
    document.querySelector('.an_ld').classList.toggle('animate__heartBeat');
});

document.querySelector('.an_tw').addEventListener('mouseover', () => {
    console.log('Log de prueba de Twitter');
    document.querySelector('.an_tw').classList.toggle('animate__heartBeat');
});

document.querySelector('.an_gh').addEventListener('mouseover', () => {
    console.log('Log de prueba de Github');
    document.querySelector('.an_gh').classList.toggle('animate__heartBeat');
});