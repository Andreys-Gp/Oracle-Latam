
/* let secreto=[2,4,6,1]; */
/* let secreto2=4;
let secreto3=5;
let secreto4=6;  */

/* let secreto =[];
secreto.push(Math.round(Math.random() * 10)); */
/* secreto.push(4);
secreto.push(5);
secreto.push(6); */

/* let secreto= Math.round(Math.random() * 10); */
 
  function aleatorio () {
return Math.round(Math.random() *10);
  }

  function sortearNumero(cantidad) {
     let secreto=[];
     let contador=1;
     while (contador<=cantidad) {
      numeroAleatorio=aleatorio();
      secreto.push(numeroAleatorio);
       contador++;
     }
     
     return secreto
  } 
  
  let secreto=sortearNumero(4);

let input= document.querySelector("input");
  input.focus(); 


function verificar(){

   let encontrado=false;
   
  for (let posicion= 0; posicion < 4; posicion++) {
    
    if (parseInt(input.value)==secreto.length) {
      alert("Usted acerto");
       encontrado=true;
      break;
  }
    }

    if (encontrado== false) {
      alert("ERROR SECRETO");
    }
    
  input.value="";
   input.focus(); 

  }

  let button = document.querySelector("button");

  button.onclick = verificar;
 

