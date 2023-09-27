/*
Nivel 2: Mis primeras repes
A - Mostrando el 1, 2, 3, 4 y 5
Generá una repe que muestre los números del 1 al 5.

B- Mostrando los números del 1 al N
Generá una repe que muestre los números del 1 al N.

HINT: modularizá convenientemente.
*/
function contadorHasta5() {
  alert(`cuenta hasta 5`);
  for (let i = 1; i <= 5; i++) {
    alert(`Valor ${i}`);
  }
}

function contadorHastaN(nro) {
  alert(`Cuenta hasta N`);
  for (let i = 1; i <= nro; i++) {
    alert(`Valor ${i}`);
  }
}

function prueba() {
  let n = Number(prompt("Ingres el Valor de N "));
  contadorHasta5();
  contadorHastaN(n);
}

prueba();
