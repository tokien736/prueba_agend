const miAgenda = new Agenda();
const listaContactos = document.getElementById('listaContactos');

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
}

function actualizarListaContactos(){
    listaContactos.innerHTML = '';
    miAgenda.contactos.forEach((contacto) => {
        const li = document.createElement('li');
        li.innerHTML = `
          <li class="contact">
            <h5 class="card-title nomb">${contacto.nombre} ${contacto.apellidoP} ${contacto.apellidoM}</h2>
            <p>Fecha de nacimiento: ${contacto.fechaNac}</p>
            <p>Email: ${contacto.email}</p>
            <p>Dirección: ${contacto.direccion}</p>
            <p class="telefono">Teléfono: ${contacto.telefono}</p>
            <button class="btn btn-success" id = "editar">🗑 Editar</button>
            <button class="btn btn-danger" id = "eliminar">🖉 Eliminar</button>
          </li>

        `;
        listaContactos.appendChild(li);
    });
}

document.getElementById('agregar').addEventListener('click', agregarContacto);
