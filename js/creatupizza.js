document.addEventListener("DOMContentLoaded",init);

function init(){

  eventos();  
    
}

function eventos(){

   let crearPizza = document.getElementById("crearPizza")

  crearPizza.addEventListener("click", function () {
    let masaRadio = document.getElementsByName("masa");
    let baseRadio = document.getElementsByName("base");
    let ingredientesCheckbox = Array.from(document.getElementsByClassName("ingrediente"));
    
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
    
    document.getElementById("masa").textContent = masa;
    document.getElementById("base").textContent = base;
    document.getElementsByClassName("ingrediente").textContent = ingrediente.join(", ");
  });
}
