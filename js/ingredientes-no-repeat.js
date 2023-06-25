let ingredientes = [];
  let cantidad = parseInt(prompt("¿Cuántos ingredientes vas a añadir?"));
  let contador = 1;

  while(contador <= cantidad) {
    let ingrediente = prompt("Informe el ingrediente " + contador);
    let existe = false;
    for(var posicion = 0; posicion < ingredientes.length; posicion++) {
      if(ingredientes[posicion] == ingrediente){
        existe = true;
    alert("repetido " + ingrediente);
        break;
      }
     }
     if(existe == false) {
      ingredientes.push(ingrediente);
      contador++;
     }
   }
   console.log(ingredientes);