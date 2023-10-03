function descubrir() {
  var descubiertas;
  var tarjetasPendientes;
  var totalDescubiertas = document.querySelectorAll(
    ".descubierta:not(.acertada)"
  );

  if (totalDescubiertas.length > 1) {
    return;
  }

  this.classList.add("descubierta");
  document.querySelector("#sonido-carta")
  .cloneNode()
  .play();

  descubiertas = document.querySelectorAll(".descubierta:not(.acertada)");
  if (descubiertas.length < 2) {
    return;
  }

  comparar(descubiertas);
  contador();
  tarjetasPendientes = document.querySelectorAll(".tarjeta:not(.acertada)");
  if (tarjetasPendientes.length === 0) {
    setTimeout(finalizar, 1000);
  }
}

function comparar(tarjetasAComparar) {
  if (tarjetasAComparar[0].textContent === tarjetasAComparar[1].textContent) {
    acierto(tarjetasAComparar);
  } else {
    errar(tarjetasAComparar);
  }
}
