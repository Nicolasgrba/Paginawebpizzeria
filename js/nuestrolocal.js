
fetch('json/nuestrolocal.json')  
  .then(response => response.json())
  .then(data => {
    var nuestroLocalData = data.NuestroLocal;
    var container = document.getElementById('nuestroLocal');

  
    var titleElement = document.createElement('h1');
    var contentElement = document.createElement('p');


    titleElement.classList.add('h1', 'm-2');
    contentElement.classList.add('texto1', 'ms-1');


    titleElement.innerText = nuestroLocalData.titulo;
    contentElement.innerText = `${nuestroLocalData.descripcion} ${nuestroLocalData.ubicacion}`;


    container.appendChild(titleElement);
    container.appendChild(contentElement);
  })