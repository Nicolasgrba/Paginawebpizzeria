function crearListaBebidas(url, listaClase) {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        var bebidas = data.carta_de_bebidas;
        var bebidasList = document.querySelector(`.${listaClase}`);
  
        bebidas.forEach(bebida => {
          var bebidasItem = document.createElement('li');
          bebidasItem.innerHTML = `<h3><u>${bebida.nombre}</u></h3>
                                <p> ${bebida.tipo}</p>
                                <p> ${bebida.precio}€</p>`;
          bebidasList.appendChild(bebidasItem);
        });
      });
  }
  
  crearListaBebidas('json/bebidas.json', 'bebidas');
  crearListaBebidas('json/bebidas2.json', 'bebidas2');
  