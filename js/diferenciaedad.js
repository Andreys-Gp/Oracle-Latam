

    function saltarLinea() {
        document.write("<br>");
    }

    function imprimir(frase) {
        document.write(frase)
        saltarLinea();
    }

    var miEdad = 18;
    var edadHermano = 15;

    imprimir("Nuestra diferencia de edad es " + (miEdad - edadHermano));
    function imprimirMensaje(mensaje){
        function mostrarMensaje(){
            console.log(mensaje);
        }
    
        mostrarMensaje();
    }  
      
    imprimirMensaje("Hola, es un placer conocerte!");