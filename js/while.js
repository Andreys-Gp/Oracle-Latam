function saltarLinea() {
    document.write("<br>");
}

function imprimir(frase) {
    document.write(frase);
    saltarLinea();
}

let contador = 2;
while(contador <= 100) {
    imprimir(contador);
    contador = contador + 2; // incrementar de dos en dos
}
imprimir("FIN");