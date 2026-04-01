<script lang="ts">

    import type 
    {
        Coche,
        VehiculoResumen,
    } from "../../core/interfaces/ejercicio2.interface";

    import { actualizarPropiedad } from "./Logica.svelte";

    const coche: Coche = $state
    ({
        id: 1,
        marca: "Toyota",
        modelo: "Corolla",
        anio: 2020,
        puertas: 4,
    });

    const vehiculoResumen: VehiculoResumen = $state
    ({
        marca: "Honda",
        modelo: "Civic",
    });

</script>

<div>

    <h2 class = "text-red-500">Detalles del Coche</h2>
    <p>Marca: {coche.marca}</p>
    <p>Modelo: {coche.modelo}</p>
    <p>Año: {coche.anio}</p>
    <p>Puertas: {coche.puertas}</p>

    <button onclick={() => actualizarPropiedad(coche, "anio", 2024)}>
        Cambiar Año a 2024
    </button>

</div>

<div>

    <h2>Resumen del Vehículo</h2>
    <p>Marca: {vehiculoResumen.marca}</p>
    <p>Modelo: {vehiculoResumen.modelo}</p>

    <button onclick={() => actualizarPropiedad(vehiculoResumen, "modelo", "Accord")}>
        Cambiar Modelo a Accord
    </button>
    
</div>