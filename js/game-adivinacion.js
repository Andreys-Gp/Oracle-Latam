function saltarLinea() {

    document.write("<br>");	
    document.write("<br>");	
    document.write("<br>");	

}  

function imprimir(frase) {

    document.write(frase);
    saltarLinea();

}

let numeroPensado = Math.round(Math.random()*10);
let numeroLanzado = parseInt(prompt("Ingrese un número entre 0-10"))

if (numeroPensado == numeroLanzado){

    imprimir("usted acertó")

}

else {

    imprimir("usted erró, el número pensado era " + numeroPensado)

}