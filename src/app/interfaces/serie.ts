export class Serie {

    constructor() {
        this._id = '';
        this.imagen1 = '';
        this.imagen2 = '';
        this.imagen3 = '';
        this.titulo = '';
        this.categorias = [''];
        this.numCapitulos = null;
        this.anyoEmision = null;
        this.sinopsis = '';
        this.puntuaciones = [{email: '', nota: 0}];
    }

    _id: string;
    imagen1: string;
    imagen2: string;
    imagen3: string;
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
