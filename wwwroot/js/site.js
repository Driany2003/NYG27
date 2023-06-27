// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

function mostrarCuentaRegresiva() {
  var fechaActual = new Date().getTime();

  // Obtener la fecha objetivo para el día 27 del mes actual
  var fechaObjetivo = new Date();
  fechaObjetivo.setDate(27);
  fechaObjetivo.setHours(0, 0, 0, 0);
  fechaObjetivo.setMonth(new Date().getMonth());
  fechaObjetivo.setFullYear(new Date().getFullYear());

  // Si la fecha actual es posterior al día 27 del mes actual, obtenemos la fecha objetivo para el día 27 del próximo mes
  if (fechaActual > fechaObjetivo.getTime()) {
    fechaObjetivo.setMonth(fechaObjetivo.getMonth() + 1);
  }

  var diferencia = fechaObjetivo.getTime() - fechaActual;

  // Calcular los días, horas, minutos y segundos restantes
  var dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  var horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
  var segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

  // Obtener los elementos HTML para mostrar la cuenta regresiva
  var daysElement = document.getElementById("dias");
  var hoursElement = document.getElementById("horas");
  var minutesElement = document.getElementById("minutos");
  var secondsElement = document.getElementById("segundos");

  // Actualizar el contenido con la cuenta regresiva
  daysElement.innerHTML = dias;
  hoursElement.innerHTML = horas;
  minutesElement.innerHTML = minutos;
  secondsElement.innerHTML = segundos;

  // Agregar la animación con Animate.css
  daysElement.classList.add("animate__animated", "animate__fadeIn");
  hoursElement.classList.add("animate__animated", "animate__fadeIn");
  minutesElement.classList.add("animate__animated", "animate__fadeIn");
  secondsElement.classList.add("animate__animated", "animate__fadeIn");

  // Actualizar cada segundo
  setTimeout(mostrarCuentaRegresiva, 1000);
}

// Llamar a la función para iniciar la cuenta regresiva
mostrarCuentaRegresiva();
