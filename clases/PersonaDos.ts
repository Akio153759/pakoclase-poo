export class PersonaDos {

  // atributo/propiedades de la clas Persona
  // modificador de acceso
  nombre: string;


  // atributo/propiedades de la clase Persona
  dni: string;


  // atributo/propiedades de la clase Persona
  edad: number;

  // Es un metodo mas de la clase Persona. es el metodo que inicializa al objeto.
  constructor(nombre: string, dni: string, edad: number) {
    // la palabra reservada this, hace referencia a esta clase. Se utiliza para acceder a los distintos atributos y metodos de esta clase
    this.nombre = nombre;
    this.dni = dni;
    this.edad = edad;
  }

  // metodo de la clase Persona
  cebarMate(): void {
    console.log('CEBANDO UN MATE ...')
  }


  // metodo de la clase Persona
  hacerCaca(): void {
    console.log('HACIENDO UNA CACONA ...')
  }

  // metodo de la clase Persona
  jugarLol(): void {
    console.log('TILTEANDOME ...')
  }

  // metodo de la clase Persona
  presentarse(): string {
    return 'Hola soy yo, ' + this.nombre
  }
}