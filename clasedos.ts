import { Perro } from "./Perro";
import { Persona } from "./Persona";

let objetoPersona = new Persona();

console.log('persona uno: ' + objetoPersona.getNombre());

objetoPersona.setNombre('Ako')

console.log('persona uno despues del setter: ' + objetoPersona.getNombre());

let perro = new Perro('peludito', true, 'hembra', 'pichicho');