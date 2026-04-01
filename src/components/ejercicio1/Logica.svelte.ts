import { type Producto, Categorias } from "../../core/interfaces/ejercicio1.interface.ts";

export const precioFinal = (p: Producto): number => {
    let precioFinal = p.precio;
    try {
        if (p.precio < 0)
            throw new Error("El precio no puede ser negativo");

        if (p.precio > 1000) {
            precioFinal = p.precio * 0.9; // Descuento del 10%
        }

        return precioFinal;
    } catch (_err) { }

    return 0;
};

export const nota = (p: Producto): string | null => {
    if (p.categoria === Categorias.ALIMENTOS) {
        return "Este producto es perecedero";
    } else {
        return null;
    }
};

export const inventario: Producto[] = [
    { nombre: "Laptop", precio: 1500, categoria: Categorias.ELECTRONICA },
    { nombre: "Camiseta", precio: 20, categoria: Categorias.ROPA },
    { nombre: "Leche", precio: 1.5, categoria: Categorias.ALIMENTOS },
    { nombre: "Pan", precio: -2, categoria: Categorias.ALIMENTOS },
    {
        nombre: "Smartphone",
        precio: 800,
        categoria: Categorias.ELECTRONICA,
    },
];