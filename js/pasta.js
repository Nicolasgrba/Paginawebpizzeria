fetch('json/pasta.json')
  .then(response => response.json())
  .then(data => {
    var pasta = data.carta_de_pasta;
    var pastaList = document.querySelector('.pasta');

    pasta.forEach(pasta => {
      var pastaItem = document.createElement('li');
      pastaItem.innerHTML = `<h3><u>${pasta.nombre}</u></h3>
                              <p> ${pasta.ingredientes.join(', ')}</p>
                              <p> ${pasta.precio}€</p>`;
      pastaList.appendChild(pastaItem);
    });
  });

  fetch('json/pasta2.json')
  .then(response => response.json())
  .then(data => {
    var pasta = data.carta_de_pasta;
    var pastaList = document.querySelector('.pasta2');

    pasta.forEach(pasta => {
      var pastaItem = document.createElement('li');
      pastaItem.innerHTML = `<h3><u>${pasta.nombre}</u></h3>
                              <p> ${pasta.ingredientes.join(', ')}</p>
                              <p> ${pasta.precio}€</p>`;
      pastaList.appendChild(pastaItem);
    });
  });

