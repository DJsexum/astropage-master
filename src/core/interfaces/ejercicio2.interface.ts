export interface Vehiculo {
    id: number
    marca: string
    modelo: string
    anio: number
}

export interface Coche extends Vehiculo {
    puertas: number
}

export type VehiculoResumen = Pick<Vehiculo, "marca" | "modelo">;
