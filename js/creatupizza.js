document.addEventListener("DOMContentLoaded",init);

function init(){

  eventos();  
    
}

function eventos(){

  crearPizza.addEventListener("click", function () {
    let masaRadio = document.getElementsByName("masa");
    let baseRadio = document.getElementsByName("base");
    let ingredientesCheckbox = document.getElementsByName("ingrediente");
    
    let masa = "";
    masaRadio.forEach((radio) => {
      if (radio.checked) {
        masa = radio.value;
      }
    });
    
    let base = "";
    baseRadio.forEach((radio) => {
      if (radio.checked) {
        base = radio.value;
      }
    });
    
    let ingrediente = [];
    ingredientesCheckbox.forEach((checkbox) => {
      if (checkbox.checked) {
        ingrediente.push(checkbox.value);
      }
    });
      if (masa !== "" && base !== "" && ingrediente.length > 0) {
        document.getElementById("masa").textContent = masa;
        document.getElementById("base").textContent = base;
        document.getElementById("ingredientes").textContent = ingrediente.join(", ");
        
        let error = new bootstrap.Modal(document.getElementById("error"));
        error.hide();
        let exampleModal = new bootstrap.Modal(document.getElementById("exampleModal"));
        exampleModal.show();

      } else{
        let exampleModal = new bootstrap.Modal(document.getElementById("exampleModal"));
        exampleModal.hide();
        let error = new bootstrap.Modal(document.getElementById("error"));
        error.show();
      }
  
    
    document.getElementById("masa").textContent = masa;
    document.getElementById("base").textContent = base;
    document.getElementById("ingredientes").textContent = ingrediente.join(", ");
  });
}