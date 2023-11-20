
function crearListaPizzas(url, listaClase) {
  fetch(url)
    .then(response => response.json())
    .then(data => {
      var pizzas = data.carta_de_pizzas;
      var pizzasList = document.querySelector(`.${listaClase}`);

      pizzas.forEach(pizza => {
        const pizzaItem = document.createElement('li');
        pizzaItem.innerHTML = `<h3><u>${pizza.nombre}</u></h3>
                                <p> ${pizza.ingredientes.join(', ')}</p>
                                <p> ${pizza.precio}€</p>`;
        pizzasList.appendChild(pizzaItem);
      });
    });
}

crearListaPizzas('json/pizzas.json', 'pizzas');
crearListaPizzas('json/pizzas2.json', 'pizzas2');
  