const iniciaCronometro = iniciaCronometro=>{
var segundos = 0;
var minutos = 1;
var segundosTexto;
var minutosTexto;


function actualizarContador() {
    segundos--;
    if (segundos < 0) {
        segundos = 59;
        minutos--;
    }
    if (minutos < 0){
        minutos = 0;
        segundos = 0;
        clearInterval(cronometro)
        timeOver();
    }

    segundosTexto = segundos;
    minutosTexto = minutos;
    if (segundos < 10) {
        segundosTexto = '0' + segundos;
    }
    if (minutos < 10) {
        minutosTexto = '0' + minutos;
    }

    document.querySelector('#minutos').innerText= minutosTexto;
    document.querySelector('#segundos').innerText= segundosTexto;
}

cronometro = setInterval(actualizarContador, 1000);

} 