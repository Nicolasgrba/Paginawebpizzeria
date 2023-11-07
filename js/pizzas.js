fetch('json/pizzas.json')
  .then(response => response.json())
  .then(data => {
    var pizzas = data.carta_de_pizzas;
    var pizzasList = document.querySelector('.pizzas');

    pizzas.forEach(pizza => {
      const pizzaItem = document.createElement('li');
      pizzaItem.innerHTML = `<h3><u>${pizza.nombre}</u></h3>
                              <p> ${pizza.ingredientes.join(', ')}</p>
                              <p> ${pizza.precio}€</p>`;
      pizzasList.appendChild(pizzaItem);
    });
  });

fetch('json/pizzas2.json')
  .then(response => response.json())
  .then(data => {
    var pizzas = data.carta_de_pizzas;
    var pizzasList = document.querySelector('.pizzas2');
    pizzas.forEach(pizza => {
      const pizzaItem = document.createElement('li');
      pizzaItem.innerHTML = `<h3><u>${pizza.nombre}</u></h3>
                            <p>${pizza.ingredientes.join(', ')}</p>
                            <p>${pizza.precio}€</p>`;
      pizzasList.appendChild(pizzaItem);
    });
  });  