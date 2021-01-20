export class Serie {

  constructor() {
    this.id = '';
    this.imagen1 = '';
    this.imagen2 = '';
    this.imagen3 = '';
    this.titulo = '';
    this.categorias = [''];
    this.numCapitulos = 0;
    this.anyoEmision = 0;
    this.sinopsis = '';
    this.puntuacion = 0;
  }

  id: string;
  imagen1: string;
  imagen2: string;
  imagen3: string;
  titulo: string;
  categorias: [string];
  numCapitulos: number;
  anyoEmision: number;
  sinopsis: string;
  puntuacion: number;
}
