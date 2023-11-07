fetch('json/bebidas.json')
    .then(response => response.json())
    .then(data => {
        var bebidas = data.carta_de_bebidas;
        var bebidasList = document.querySelector('.bebidas');

        bebidas.forEach(bebidas => {
            var bebidasItem = document.createElement('li');
            bebidasItem.innerHTML = `<h3><u>${bebidas.nombre}</u></h3>
                              <p> ${bebidas.tipo}</p>
                              <p> ${bebidas.precio}€</p>`;
            bebidasList.appendChild(bebidasItem);
        });
    });

    fetch('json/bebidas2.json')
    .then(response => response.json())
    .then(data => {
        var bebidas = data.carta_de_bebidas;
        var bebidasList = document.querySelector('.bebidas2');

        bebidas.forEach(bebidas => {
            var bebidasItem = document.createElement('li');
            bebidasItem.innerHTML = `<h3><u>${bebidas.nombre}</u></h3>
                              <p> ${bebidas.tipo}</p>
                              <p> ${bebidas.precio}€</p>`;
            bebidasList.appendChild(bebidasItem);
        });
    });
