const { Mascota } = require("./Mascota");
const { Persona } = require("./Persona");

let objetoPersona = new Persona('Pako', '421221212', 25);

console.log('El nombre de nuestra persona es ' + 
  objetoPersona.nombre + 
  ' y su edad es ' + 
  objetoPersona.edad)


// --------------------------------------------------

let objetoPersonaDos = new Persona('Caco', '1231232', 50);

objetoPersonaDos.dni = '000000'

console.log('El nombre de nuestra persona 2 es ' + 
  objetoPersonaDos.nombre + 
  ' y su edad es ' + 
  objetoPersonaDos.edad +
  ' y su DNI es ' +
  objetoPersonaDos.dni)

console.log(objetoPersonaDos.presentarse())
