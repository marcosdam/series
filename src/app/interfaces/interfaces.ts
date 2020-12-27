// Interfaz Elemento (para el menú)
export interface Elemento {
    icon: string;
    name: string;
    redirectTo: string;
}

// Interfaz Principal
export interface Principal {
    titulo: string;
    imagen: string;
    categoria: string;
}
// Interfaz Categoría
export interface Categoria {
    titulo: string;
    imagen: string;
    categoria: string;
}
// Interfaz Serie
export interface Serie {
    imagen1: string;
    imagen2: string;
    imagen3: string;
    titulo: string;
    categorias: string[];
    numCapitulos: number;
    anyoEmision: number;
    sinopsis: string;
    puntuacion: number;
}
