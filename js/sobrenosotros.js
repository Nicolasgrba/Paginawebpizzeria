fetch('json/sobrenosotros.json')
  .then(response => response.json())
  .then(data => {
    var sobreNosotrosData = data.SobreNosotros;
    var container = document.getElementById('sobreNosotros');

    var titleElement = document.createElement('h1');
    var contentElement = document.createElement('p');

    titleElement.classList.add('h1', 'm-2');
    contentElement.classList.add('texto1', 'ms-1');

    titleElement.innerText = sobreNosotrosData.titulo;
    contentElement.innerHTML = `
    <strong>Proyecto:</strong> ${sobreNosotrosData.proyecto}<br>
    <strong>Integrantes:</strong> ${sobreNosotrosData.integrantes.map(integrante => `${integrante.nombre} - ${integrante.rol}`).join(', ')}<br>
    <strong>Descripción del Proyecto:</strong> ${sobreNosotrosData.descripcionProyecto}<br>
    <strong>Secciones:</strong> ${sobreNosotrosData.secciones.map(seccion => `<br>${seccion.nombre}: ${seccion.descripcion}`).join('')}
  `;

  container.appendChild(titleElement);
  container.appendChild(contentElement);
})
