// Escriba un bucle for que iterará de 0 a 20. Para cada iteración, verificará si el número actual es
// par o impar, y lo informará en la pantalla (por ejemplo, "2 es par").
for (var i = 0; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i + ' es par');
    } else {
        console.log(i + ' es impar');
    }
}

//Escriba un bucle for que iterará de 0 a 10. Para cada iteración del bucle for, multiplicará el número
// por 9 y registrará el resultado (por ejemplo, "2 * 9 = 18"). 
var multiplier = 9;
for (var i = 0; i <= 10; i++) {
    var result = multiplier * i;
    console.log(multiplier + ' * ' + i + ' = ' + result);
}

//Bonificación: utilice un bucle for anidado para mostrar las tablas de cada multiplicador del 1 al
//10 (100 resultados en total)
for (var multiplier = 0; multiplier <= 10; multiplier++) {
    for (var i = 0; i <= 10; i++) {
      var result = multiplier * i;
      console.log(multiplier + ' * ' + i + ' = ' + result);
    }
   }