
function crearListaPasta(url, listaClase) {
  fetch(url)
    .then(response => response.json())
    .then(data => {
      var pasta = data.carta_de_pasta;
      var pastaList = document.querySelector(`.${listaClase}`);

      pasta.forEach(pasta => {
        var pastaItem = document.createElement('li');
        pastaItem.innerHTML = `<h3><u>${pasta.nombre}</u></h3>
                                <p> ${pasta.ingredientes.join(', ')}</p>
                                <p> ${pasta.precio}€</p>`;
        pastaList.appendChild(pastaItem);
      });
    });
}

crearListaPasta('json/pasta.json', 'pasta');
crearListaPasta('json/pasta2.json', 'pasta2');
  