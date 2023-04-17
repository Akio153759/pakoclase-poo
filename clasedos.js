const { Perro } = require("./Perro");
const { Persona } = require("./Persona");

let objetoPersona = new Persona('pako', '123123123', 25);

console.log('persona uno: ' + objetoPersona.getNombre());

objetoPersona.setNombre('Ako')

console.log('persona uno despues del setter: ' + objetoPersona.getNombre());

let perro = new Perro('peludito', true, 'hembra', 'pichicho');