const miAgenda = new Agenda();
const listaContactos = document.getElementById('listaContactos');
const contacForm = document.getElementById('form-contactos');

function agregarContacto(event){
    event.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const apellidoP = document.getElementById('apellidoP').value;
    const apellidoM = document.getElementById('apellidoM').value;
    const fechaNac = document.getElementById('fechaNac').value;
    const email = document.getElementById('email').value;
    const direccion = document.getElementById('direccion').value;
    const telefono = document.getElementById('telefono').value;

    const contacto = new Contacto(nombre, apellidoP, apellidoM, fechaNac, email, direccion,telefono)
    
    miAgenda.agregarContacto(contacto)
    actualizarListaContactos();
    limpiarCajas();
}
function eliminarContacto(nombreContacto) {
  // Encontrar el contacto a eliminar en el objeto Agenda
  const contactoAEliminar = miAgenda.buscarContacto(nombreContacto);

  // Eliminar el contacto del objeto Agenda
  miAgenda.eliminarContacto(contactoAEliminar);

  // Actualizar la lista de contactos en la interfaz de usuario
  actualizarListaContactos();
  limpiarCajas();
}

function editarContacto(nombre, apellidoP, apellidoM, fechaNac, email, direccion, telefono) {
  contacForm['nombre'].value = nombre;
  contacForm['apellidoP'].value = apellidoP;
  contacForm['apellidoM'].value = apellidoM;
  contacForm['fechaNac'].value = fechaNac;
  contacForm['email'].value = email;
  contacForm['direccion'].value = direccion;
  contacForm['telefono'].value = telefono;

  // Agregar un botón "Guardar"
  const guardarBtn = document.createElement('button');
  guardarBtn.textContent = 'Guardar';
  guardarBtn.classList.add('btn', 'btn-primary', 'mt-2');
  guardarBtn.addEventListener('click', (event) => {
    event.preventDefault();
    const nombreEditado = contacForm['nombre'].value;
    const apellidoPEditado = contacForm['apellidoP'].value;
    const apellidoMEditado = contacForm['apellidoM'].value;
    const fechaNacEditado = contacForm['fechaNac'].value;
    const emailEditado = contacForm['email'].value;
    const direccionEditado = contacForm['direccion'].value;
    const telefonoEditado = contacForm['telefono'].value;

    // Encontrar el contacto a editar en el objeto Agenda
    const contactoAEditar = miAgenda.buscarContacto(nombre);

    // Actualizar los valores del contacto editado
    contactoAEditar.nombre = nombreEditado;
    contactoAEditar.apellidoP = apellidoPEditado;
    contactoAEditar.apellidoM = apellidoMEditado;
    contactoAEditar.fechaNac = fechaNacEditado;
    contactoAEditar.email = emailEditado;
    contactoAEditar.direccion = direccionEditado;
    contactoAEditar.telefono = telefonoEditado;

    // Actualizar la lista de contactos en la interfaz de usuario
    actualizarListaContactos();

    // Eliminar el botón "Guardar"
    guardarBtn.parentNode.removeChild(guardarBtn);

    limpiarCajas();
  });

  // Agregar el botón "Guardar" fuera del formulario
  contacForm.parentNode.insertBefore(guardarBtn, contacForm.nextSibling);
}




function limpiarCajas() {
  document.getElementById('nombre').value = '';
  document.getElementById('apellidoP').value = '';
  document.getElementById('apellidoM').value = '';
  document.getElementById('fechaNac').value = '';
  document.getElementById('email').value = '';
  document.getElementById('direccion').value = '';
  document.getElementById('telefono').value = '';
}


function actualizarListaContactos(){
    
  listaContactos.innerHTML = '';
  miAgenda.contactos.forEach((contacto) => {
      const li = document.createElement('li');
      li.innerHTML = `
        <li class="contact" id="lista-contactos">
            <h5 class="card-title"><span id="nombre">${contacto.nombre}</span> ${contacto.apellidoP} ${contacto.apellidoM}</h5>
            <p>Fecha de nacimiento: ${contacto.fechaNac}</p>
            <p>Email: ${contacto.email}</p>
            <p>Dirección: ${contacto.direccion}</p>
            <p class="telefono">Teléfono: ${contacto.telefono}</p>
            <button class="btn btn-success" id="editar" onclick="editarContacto('${contacto.nombre}', '${contacto.apellidoP}', '${contacto.apellidoM}', '${contacto.fechaNac}', '${contacto.email}', '${contacto.direccion}', '${contacto.telefono}')">🗑 Editar</button>
            <button class="btn btn-danger" id="eliminar" onclick="eliminarContacto('${contacto.nombre}')">🖉 Eliminar</button>
        </li>
      `;
  // Agregar el evento click al elemento de la lista
  li.addEventListener('click', () => {
    // Obtener el nombre del contacto y mostrarlo en la consola
    const nombreContacto = li.querySelector('#nombre').textContent;
    console.log(nombreContacto);
  });


      listaContactos.appendChild(li);
  });
}

function buscarContacto() {
  const inputBusqueda = document.getElementById('busqueda').value;
  const resultadosBusqueda = miAgenda.buscarContacto(inputBusqueda);
  
  // Limpiar la lista de contactos
  listaContactos.innerHTML = '';

  // Si no hay resultados, mostrar un mensaje indicando que no se encontraron contactos
  if (resultadosBusqueda.length === 0) {
    const mensaje = document.createElement('p');
    mensaje.textContent = 'No se encontraron resultados para la búsqueda realizada.';
    listaContactos.appendChild(mensaje);
  } else {
    // Si hay resultados, mostrarlos en la lista de contactos
    resultadosBusqueda.forEach((contacto) => {
      const li = document.createElement('li');
      li.innerHTML = `
        <li class="contact" id="lista-contactos">
            <h5 class="card-title"><span id="nombre">${contacto.nombre}</span> ${contacto.apellidoP} ${contacto.apellidoM}</h5>
            <p>Fecha de nacimiento: ${contacto.fechaNac}</p>
            <p>Email: ${contacto.email}</p>
            <p>Dirección: ${contacto.direccion}</p>
            <p class="telefono">Teléfono: ${contacto.telefono}</p>
            <button class="btn btn-success" id="editar" onclick="editarContacto('${contacto.nombre}', '${contacto.apellidoP}', '${contacto.apellidoM}', '${contacto.fechaNac}', '${contacto.email}', '${contacto.direccion}', '${contacto.telefono}')">🗑 Editar</button>
            <button class="btn btn-danger" id="eliminar" onclick="eliminarContacto('${contacto.nombre}')">🖉 Eliminar</button>
        </li>
      `;
      
      // Agregar el evento click al elemento de la lista
      li.addEventListener('click', () => {
        // Obtener el nombre del contacto y mostrarlo en la consola
        const nombreContacto = li.querySelector('#nombre').textContent;
        console.log(nombreContacto);
      });

      listaContactos.appendChild(li);
    });
  }
}

document.getElementById('buscar').addEventListener('click', buscarContacto);

document.getElementById('agregar').addEventListener('click', agregarContacto);