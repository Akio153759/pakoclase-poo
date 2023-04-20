export abstract class Animal {

  protected genero: string;

  protected raza: string;

  abstract tamanioDeOrejas: string;

  constructor(genero: string, raza: string) {
    this.genero = genero;
    this.raza = raza;
  }

  comer(): void {

  }

  dormir(): void {

  }

  abstract hablar(): void;
}