import { Animal } from "./Animal";

export class Gato extends Animal{
  tamanioDeOrejas: string = 'grandes';

  hablar(): void {
    console.log('miau')
  }

}