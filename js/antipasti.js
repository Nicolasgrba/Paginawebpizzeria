function crearListaAntipasti(url, listaClase) {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        var antipasti = data.carta_de_antipastis;
        var antipastiList = document.querySelector(`.${listaClase}`);
  
        antipasti.forEach(antipasti => {
          var antipastiItem = document.createElement('li');
          antipastiItem.innerHTML = `<h3><u>${antipasti.nombre}</u></h3>
                                <p> ${antipasti.ingredientes.join(', ')}</p>
                                <p> ${antipasti.precio}€</p>`;
          antipastiList.appendChild(antipastiItem);
        });
      });
  }
  
  crearListaAntipasti('json/antipasti.json', 'antipasti');
  crearListaAntipasti('json/antipasti2.json', 'antipasti2');
  