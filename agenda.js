class Agenda {
  constructor() {
    this.contactos = [];
  }

  agregarContacto(contacto) {
    this.contactos.push(contacto);
  }

  eliminarContacto(contacto) {
    const index = this.contactos.indexOf(contacto);
    if (index !== -1) {
      this.contactos.splice(index, 1);
    }
  }

  buscarContacto(nombre) {
    return this.contactos.find((contacto) => contacto.nombre === nombre);
  }
}

class Contacto {
  constructor(nombre, apellidoP, apellidoM, fechaNac, email, direccion, telefono){
      this.nombre = nombre;
      this.apellidoP = apellidoP;
      this.apellidoM = apellidoM;
      this.fechaNac = fechaNac;
      this.email = email; 
      this.direccion = direccion; 
      this.telefono = telefono;
  }
}
