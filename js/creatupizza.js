document.addEventListener("DOMContentLoaded", function () {
    const pizzaForm = document.getElementById("pizza-form");
    const crearPizzaButton = document.querySelector("input[type='button']");
    const masaRadios = document.querySelectorAll("input[name='masa']");
    const baseRadios = document.querySelectorAll("input[name='base']");
    const ingredientCheckboxes = document.querySelectorAll("input[type='checkbox']");
  
    crearPizzaButton.addEventListener("click", function () {
      // Verificar masa
      let masaSeleccionada = false;
      for (const radio of masaRadios) {
        if (radio.checked) {
          masaSeleccionada = true;
          break;
        }
      }
      // Verificar base
      let baseSeleccionada = false;
      for (const radio of baseRadios) {
        if (radio.checked) {
          baseSeleccionada = true;
          break;
        }
      }
      // Verificar ingredientes
      let ingredientesSeleccionados = [];
      for (const checkbox of ingredientCheckboxes) {
        if (checkbox.checked) {
          ingredientesSeleccionados.push(checkbox.value);
        }
      }
      // Mensaje
      if (masaSeleccionada && baseSeleccionada && ingredientesSeleccionados.length > 0) {
        const mensaje = "Haz creado tu pizza correctamente, estos son tus ingredientes escogidos en tu pizza:\n" +
          `- Masa: ${masaSeleccionada}\n` +
          `- Base: ${baseSeleccionada}\n` +
          `- Ingredientes: ${ingredientesSeleccionados.join(", ")}\n`;
        alert(mensaje);
      } else {
        alert("Error, selecciona el mínimo de requisitos para poder crear tu pizza.");
      }
    });
  });
  