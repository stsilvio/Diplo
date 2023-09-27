/*
Nivel 3: Profesiones
A - Las artistas
Diseñá una repe que permita armar una sola cadena de texto donde estén tus 5 colores 
favoritos. Los colores deben preguntarse al usuario de a uno.

B- L@s enfermer@s.
Esto de ser artístas no nos funcionó. Mejor nos dedicamos a la medicina integral. 
Vamos a tomar la presión a 10 personas. Si la presión es mayor a 11 entonces debemos 
alertar al paciente para que baje el consumo de sal.
*/

function colores() {
  let colores = "";
  for (let i = 0; i < 5; i++) {
    colores = colores + " " + prompt("Ingrese un color favorito");
  }
  alert(colores);
}

colores();
