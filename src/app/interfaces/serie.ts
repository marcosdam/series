export class Serie {

    constructor() {
        this._id = '';
        this.imagenes = [''];
        this.titulo = '';
        this.categorias = [''];
        this.numCapitulos = null;
        this.anyoEmision = null;
        this.sinopsis = '';
        this.puntuaciones = [{email: '', nota: 0}];
    }

    _id: string;
    imagenes: [string];
    titulo: string;
    categorias: [string];
    numCapitulos: number;
    anyoEmision: number;
    sinopsis: string;
    puntuaciones: [{
        email: string,
        nota: number
    }];
}
