fetch('json/antipasti.json')
    .then(response => response.json())
    .then(data => {
        var antipasti = data.carta_de_antipastis;
        var antipastiList = document.querySelector('.antipasti');

        antipasti.forEach(antipasti => {
            var antipastiItem = document.createElement('li');
            antipastiItem.innerHTML = `<h3><u>${antipasti.nombre}</u></h3>
                              <p> ${antipasti.ingredientes.join(', ')}</p>
                              <p> ${antipasti.precio}€</p>`;
            antipastiList.appendChild(antipastiItem);
        });
    });


fetch('json/antipasti2.json')
    .then(response => response.json())
    .then(data => {
        var antipasti = data.carta_de_antipastis;
        var antipastiList = document.querySelector('.antipasti2');

        antipasti.forEach(antipasti => {
            var antipastiItem = document.createElement('li');
            antipastiItem.innerHTML = `<h3><u>${antipasti.nombre}</u></h3>
                              <p> ${antipasti.ingredientes.join(', ')}</p>
                              <p> ${antipasti.precio}€</p>`;
            antipastiList.appendChild(antipastiItem);
        });
    });
