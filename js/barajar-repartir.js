function barajaTarjetas(lasTarjetas) {
  var resultado;
  var totalTarjetas = lasTarjetas.concat(lasTarjetas);
  resultado = totalTarjetas.sort(function () {
    return 0.5 - Math.random();
  });
  return resultado;
}

function reparteTarjetas(lasTarjetas) {
  var mesa = document.querySelector("#mesa");
  var tarjetasBarajadas = barajaTarjetas(lasTarjetas);
  mesa.innerHTML = "";

  tarjetasBarajadas.forEach(function (icon) {
    var tarjeta = document.createElement("div");

    tarjeta.innerHTML =
      "<div class='tarjeta' data-valor= " +
      icon +
      ">" +
      "<div class='tarjeta__contenido'>" +
      icon +
      "</div>" +
      "</div>";

    mesa.appendChild(tarjeta);
  });
}
