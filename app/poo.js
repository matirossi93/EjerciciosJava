
// EJERCICIO NUMERO 2 

/* let cuenta = {
    titular: "Alex",
    saldo: 0,
    modelo: 2023,
    ingresar: function(dinero){
    if(dinero > 0) {

        this.saldo += dinero;
        console.log(`Se han ingresado ${dinero} euros en la cuenta`)
    } else {
        console.log("La cantidad ingresada debe ser mayor que 0")
    }
   },

   extraer: function(dinero) {

    if(dinero < this.saldo) {

        this.saldo -= dinero;
        console.log(`Se han retirado ${dinero} euros de la cuenta`)

    } else {
        console.log("No tienes suficiente dinero en la cuenta");
    }
   },

   informar: function(){

        console.log(`Cuenta de ${this.titular}, tiene un saldo de ${this.saldo}`);


   },
   
}
*/

// EJERCICIO NUMERO 4

/* class Producto {

    constructor(codigo, nombre, precio) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.precio = precio;

    }

    imprimeDatos(){
        console.log(`el codigo es ${this.codigo}`);
        console.log(`el nombre es ${this.nombre}`);
        console.log(`el precio es ${this.precio}`);
    }
}

const producto1 = new Producto("001", "lapiz", "$150");
const producto2 = new Producto("002", "lapicera", "$150");
const producto3 = new Producto("003", "goma", "$150");

const productos = [producto1, producto2, producto3];
   
productos.forEach(producto => {
    producto.imprimeDatos();
    console.log("-------")
}) */


// EJERCICIO NUMERO 7

/* class Contacto {
    constructor(nombre, telefono) {
      this.nombre = nombre;
      this.telefono = telefono;
    }
  
    // Método para comprobar si dos contactos son iguales por nombre
    esIgual(otroContacto) {
      return this.nombre === otroContacto.nombre;
    }
  }
  
  class Agenda {
    constructor(tamano = 10) {
      this.tamano = tamano;
      this.contactos = [];
    }
  
    // Método para añadir un contacto a la agenda
    aniadirContacto(contacto) {
      if (this.agendaLlena()) {
        console.log("La agenda está llena. No se puede añadir más contactos.");
      } else if (this.existeContacto(contacto)) {
        console.log("El contacto ya existe en la agenda.");
      } else {
        this.contactos.push(contacto);
        console.log(`Contacto ${contacto.nombre} añadido a la agenda.`);
      }
    }
  
    // Método para comprobar si un contacto existe en la agenda
    existeContacto(contacto) {
      return this.contactos.some(c => c.esIgual(contacto));
    }
  
    // Método para listar todos los contactos
    listarContactos() {
      console.log("Lista de contactos en la agenda:");
      this.contactos.forEach(contacto => {
        console.log(`Nombre: ${contacto.nombre}, Teléfono: ${contacto.telefono}`);
      });
    }
  
    // Método para buscar un contacto por nombre y mostrar su teléfono
    buscarContacto(nombre) {
      const contactoEncontrado = this.contactos.find(contacto => contacto.nombre === nombre);
      if (contactoEncontrado) {
        console.log(`Teléfono de ${nombre}: ${contactoEncontrado.telefono}`);
      } else {
        console.log(`No se encontró ningún contacto con el nombre ${nombre}.`);
      }
    }
  
    // Método para eliminar un contacto de la agenda
    eliminarContacto(contacto) {
      const indice = this.contactos.findIndex(c => c.esIgual(contacto));
      if (indice !== -1) {
        this.contactos.splice(indice, 1);
        console.log(`Contacto ${contacto.nombre} eliminado de la agenda.`);
      } else {
        console.log(`No se encontró ningún contacto igual a ${contacto.nombre} en la agenda.`);
      }
    }
  
    // Método para verificar si la agenda está llena
    agendaLlena() {
      return this.contactos.length >= this.tamano;
    }
  
    // Método para mostrar cuántos contactos más se pueden agregar
    huecosLibres() {
      const libres = this.tamano - this.contactos.length;
      console.log(`Número de huecos libres en la agenda: ${libres}`);
    }
  }
  
  // Función para mostrar el menú y recibir las selecciones del usuario
  function mostrarMenu() {
    const agenda = new Agenda();
  
    while (true) {
      const opcion = prompt(`Selecciona una opción:\n
        1. Añadir contacto
        2. Comprobar si un contacto existe
        3. Listar contactos
        4. Buscar contacto por nombre
        5. Eliminar contacto
        6. Verificar si la agenda está llena
        7. Verificar cuántos huecos libres quedan
        8. Salir
      `);
  
      switch (opcion) {
        case "1":
          const nombre = prompt("Ingrese el nombre del contacto:");
          const telefono = prompt("Ingrese el teléfono del contacto:");
          const nuevoContacto = new Contacto(nombre, telefono);
          agenda.aniadirContacto(nuevoContacto);
          break;
  
        case "2":
          const nombreBusqueda = prompt("Ingrese el nombre del contacto a comprobar:");
          const contactoBuscado = new Contacto(nombreBusqueda, "");
          if (agenda.existeContacto(contactoBuscado)) {
            console.log(`El contacto ${nombreBusqueda} existe en la agenda.`);
          } else {
            console.log(`El contacto ${nombreBusqueda} no existe en la agenda.`);
          }
          break;
  
        case "3":
          agenda.listarContactos();
          break;
  
        case "4":
          const nombreBuscar = prompt("Ingrese el nombre del contacto a buscar:");
          agenda.buscarContacto(nombreBuscar);
          break;
  
        case "5":
          const nombreEliminar = prompt("Ingrese el nombre del contacto a eliminar:");
          const contactoEliminar = new Contacto(nombreEliminar, "");
          agenda.eliminarContacto(contactoEliminar);
          break;
  
        case "6":
          if (agenda.agendaLlena()) {
            console.log("La agenda está llena.");
          } else {
            console.log("La agenda no está llena.");
          }
          break;
  
        case "7":
          agenda.huecosLibres();
          break;
  
        case "8":
          return; // Salir del programa
  
        default:
          console.log("Opción no válida. Por favor, seleccione una opción válida.");
      }
    }
  }
  
  // Ejecutar el menú
  mostrarMenu();
  */

//   EJERCICIO NUMERO 10

/* class Aeropuerto {
    
    constructor (nombreAeropuerto) {

        this.nombreAeropuerto = nombreAeropuerto;
        this.listaAviones = [];
    }

    agregarAvion(avion) {
        this.listaAviones.push(avion);
        console.log(`El avion ${avion} se agregado al aeropuerto ${this.nombre}`)


    }

    buscarAvion(nombreAvion) {

       const avionEncontrado = this.listaAviones.find(avion => avion.nombre === nombreAvion);

       if(avionEncontrado){
        console.log(`Avion encontrado ${avionEncontrado.nombre}, destino ${avionEncontrado.destino}`);

       } else {
        console.log(`No se encontro ningun avion con el nombre ${avionEncontrado}`);
       }

    }

    
}

class Aviones {

    constructor(nombre, capacidad, destino) {

        this.nombre = nombre;
        this.capacidad = capacidad;
        this.destino = destino;
        this.listaPasajeros = [];
    }

    abordar(pasajero) {

        if(this.capacidad > this.listaPasajeros.length){

            this.listaPasajeros.push(pasajero);
            console.log(`El pasajero ${pasajero} ha abordado el avion ${this.nombre}`)

        } else {
            console.log(`El avion ${this.nombre} esta lleno`);
        }
    }
}


const aeropuertoInternacional = new Aeropuerto ("Aeropuerto Internacional");

const avion1 = new Aviones ("Latam", 160, "Estambul");
const avion2 = new Aviones ("Gol", 140, "Buenos Aires");
const avion3 = new Aviones ("Aerolineas", 180, "Medellin");


aeropuertoInternacional.agregarAvion(avion1);
aeropuertoInternacional.agregarAvion(avion2);
aeropuertoInternacional.agregarAvion(avion3);

aeropuertoInternacional.buscarAvion("Gol"); */