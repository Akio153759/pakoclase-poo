import { PersonaDos } from "./clases/PersonaDos";
import { Persona } from "./Persona";

let objetoPersona = new Persona();

console.log('El nombre de nuestra persona es ' + 
  objetoPersona.getNombre() + 
  ' y su edad es ' + 
  objetoPersona.getEdad())


// --------------------------------------------------

let objetoPersonaDos = new Persona();

objetoPersonaDos.setDni('000000');

console.log('El nombre de nuestra persona 2 es ' + 
  objetoPersonaDos.getNombre() + 
  ' y su edad es ' + 
  objetoPersonaDos.getEdad() +
  ' y su DNI es ' +
  objetoPersonaDos.getDni())

console.log(objetoPersonaDos.presentarse())