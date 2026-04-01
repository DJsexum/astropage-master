export enum Categorias {
    ELECTRONICA = "Electrónica",
    ROPA = "Ropa",
    ALIMENTOS = "Alimentos",
}

export type Producto = {
    nombre: string;
    precio: number;
    categoria: Categorias;
};