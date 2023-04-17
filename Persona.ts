export class Persona {

  // atributo/propiedades de la clas Persona
  // modificador de acceso
  private nombre: string;


  // atributo/propiedades de la clase Persona
  private dni: string;


  // atributo/propiedades de la clase Persona
  private edad: number;

  // Es un metodo mas de la clase Persona. es el metodo que inicializa al objeto.
  constructor(nombre: string, dni: string, edad: number) {
    // la palabra reservada this, hace referencia a esta clase. Se utiliza para acceder a los distintos atributos y metodos de esta clase
    this.nombre = nombre;
    this.dni = dni;
    this.edad = edad;
  }

  // Metodo que se encarga de setear nombre
  // recibimos el nombre por parametro
  // setter
  setNombre(nombre: string): void {
    // y aca lo setemos
    this.nombre = nombre;
  }

  // Metodo que se encarga de recuperar el nombre
  // getter
  getNombre(): string {
    // retornamos el nombre
    return this.nombre;
  }

  // metodo de la clase Persona
  cebarMate(): void {
    console.log('CEBANDO UN MATE ...')
  }

  private bajarseLosPantalones(): void {
    console.log('bajando los lompas')
  }

  // metodo de la clase Persona
  hacerCaca(): void {
    this.bajarseLosPantalones()
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