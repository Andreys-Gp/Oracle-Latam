


function saltarLinea() {

    document.write("<br>");	
    document.write("<br>");	
    document.write("<br>");	

}  

function imprimir(frase) {

    document.write(frase);
    saltarLinea();

}


var multiplicador = 1

imprimir("WHILE");

while (multiplicador <= 10) {

    imprimir(7 * multiplicador);
    multiplicador++; 

}



imprimir("FOR");

for (var multiplicador = 1;multiplicador <= 10;multiplicador++) {

    imprimir(7 * multiplicador);


}
