

// Defino el valor del tickets

const valorTickets = 200;

// Defino porcentajes de descuento
let descuentoEstudiante = 80;
let descuentoTrainee = 50;
let descuentoJunior = 15;
 
// Elementos variables

let nombre          =     document.getElementById("nombre");
let apellido        =     document.getElementById("apellido");
let email           =     document.getElementById("exampleInputEmail1");
let tickets         =     document.getElementById("cantidadTickets");
let categoría       =     document.getElementById("categoriaSelect");


 // Para determinar si el correo electrónico es válido o no
 const emailValido = email => {
    return/^[^\s@]+@[^\s@]+\. [^\s@]+$/.test(email);
}

// funcion para quitar el estilo de error a los elementos del form

function quitarClaseError(){
    let x = document.querySelectorAll(".form-control, .form-select");
    let i;
    for (i = 0; i < x.length; i++) {
        x[i].classList.remove('is-invalid');
    }
}

function resetTotalAPagar(){
    quitarClaseError();
    TotalPago.innerHTML = "";
 
}



// Calculo total a pagar
function TotalAPagar(){

    quitarClaseError();

    if (nombre.value ===""){

        alert("Por favor, escribí tu nombre.");
        nombre.classList.add("is-invalid");
        nombre.focus();
        return;
    }  
    if (apellido.value === ""){
        alert("Por favor, escribí tu apellido.");
        apellido.classList.add("is-invalid");
        apellido.focus();
        return;
    }

    if (email.value === "") {
        alert("Por favor, escribí tu email.");
        email.classList.add("is-invalid");
        email.focus();
        return;
    }

    /*if (! emailValido(email.value)) {
        alert("Por favor, escribí un correo electrónico válido");
        email.classList.add("is-invalid");
        email.focus();
        return;
    }*/

    //Verifico si está ingresado al menos 1 ticket, sino que aplique un estilo de error, haga foco en el campo y se detenga
    if ((cantidadTickets.value == 0) || (isNaN(cantidadTickets.value)) ) {
        alert("Por favor, ingresá correctamente cantidad de tickets.");
        cantidadTickets.classList.add("is-invalid");
        cantidadTickets.focus();
        return;
    }

    //Verifico que haya seleccionado una categoría, sino que aplique un estilo de error, haga foco en el campo y se detenga
    if (categoría.value == "") {
        alert("Por favor, seleccioná una categoría.");
        categoría.classList.add("is-invalid");
        categoría.focus();
        return;
    }

    //Multiplico cantidad de tickets por el valor
   
    let totalValorTickets = (tickets.value) * valorTickets;
 
    
   /*Aplico descuentos según categoría*/
  
   let categoriaSelect = categoría
   
      if(categoriaSelect.value==0){
       totalValorTickets = totalValorTickets;
      }
      else if(categoriaSelect.value==1){
   
        totalValorTickets = totalValorTickets - (totalValorTickets * descuentoEstudiante/100);
      }
      else if(categoriaSelect.value==2){
        totalValorTickets = totalValorTickets - (totalValorTickets*descuentoTrainee/100);
      }
      else if(categoriaSelect.value==3){
        totalValorTickets = totalValorTickets - (totalValorTickets*descuentoJunior/100);
      }
    


   //Aplico descuentos según categoría

     


     /*switch(categoría.value){

        case '0':
            totalValorTickets = totalValorTickets;
            break;
        case '1':
            totalValorTickets = totalValorTickets - (descuentoEstudiante / 100 * totalValorTickets);
            break;
        case '2':
            totalValorTickets = totalValorTickets - (descuentoTrainee / 100 * totalValorTickets);
            break;
        case '3':
            totalValorTickets = totalValorTickets - (descuentoJunior / 100 * totalValorTickets);
            break;
            default:
                System.out.printLn("esa categoría no es valida");
  
     }*/
     //Inserto el valor en el HTML 
    TotalPago.innerHTML = totalValorTickets;
}
//Botón Resumen recibe un escuchador y la funcion del cálculo
btnResumen.addEventListener('click', TotalAPagar);

//Función para el botón Borrar para que borre el valor
btnBorrar.addEventListener('click', resetTotalAPagar);












