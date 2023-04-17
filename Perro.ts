import { Animal } from "./Animal";

export class Perro extends Animal {
  tipoDePelo: string;

  tieneCollar: boolean;

  constructor(tipoDePelo: string, tieneCollar: boolean, genero: string, raza: string) {
    // el super llama al constructor de la clase base
    super(genero, raza);
    this.genero
    this.tipoDePelo = tipoDePelo;
    this.tieneCollar = tieneCollar;
  }

  ladrar(): void {
    this.comer()
  }

  bostezar(): void {

  }

  moverLaCola(): void {

  }
}