
  function saltarLinea(){
    document.write("<br>"); 
    document.write("<br>");
    document.write("<br>");
  }
 function imprimir(frase){
      saltarLinea();
      document.write(frase);
 }
  function calcularImc (peso,altura,nombre){
     imc= (peso/(altura*altura));
     imprimir("el imc calculado es: " + imc + " de " + nombre);
  }

    calcularImc(13,2,"Andres Practica");




    function saltarLinea() {

        document.write("<br>");
    }

    function mostrar(frase) {
        document.write(frase);
        saltarLinea();
    }

    var numero1 = prompt("Digite el primer número");
    var numero2 = prompt("Digite el segundo número");

    mostrar("El valor de " + numero1 + " veces " + numero2 + " es: " + (numero1 * numero2));
