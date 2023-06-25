
function saltarLinea() {

    document.write("<br>");	
    document.write("<br>");	
    document.write("<br>");	

}  

function imprimir(frase) {

    document.write(frase);
    saltarLinea();

}


//3
let numeroMiembros = parseInt(prompt("Ingrese la cantidad de miembros de su familia"));
let contador = 1;
let totalEdades = 0;

while (contador <= numeroMiembros) {

    edad = parseInt(prompt("ingrese la edad del familiar"));
    totalEdades = totalEdades + edad;
    contador++;

} 

mediaEdades = totalEdades/numeroMiembros;

imprimir("La media de las edades de la familia es " + mediaEdades);

imprimir("fin");