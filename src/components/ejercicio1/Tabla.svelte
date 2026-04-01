<script lang="ts">
    import { Categorias } from "../../core/interfaces/ejercicio1.interface";
    import { inventario, precioFinal, nota } from "./Logica.svelte";
</script>

<table>
    <thead>
        <tr>
            <th>Producto</th>
            <th>Precio Final</th>
            <th>Nota</th>
        </tr>
    </thead>
    <tbody>
        {#each inventario as producto}
            <tr>
                <td>{producto.nombre}</td>
                <td>${precioFinal(producto).toFixed(2)}</td>
                <td>{nota(producto) ?? "Sin nota"}</td>
            </tr>
        {/each}
    </tbody>
</table>
<p style="font-weight: bold;">
    Total: {inventario
        .reduce((total, p) => total + precioFinal(p), 0)
        .toFixed(2)}
</p>


<table>
    <thead>
        <tr>
            <th>Producto</th>
            <th>Precio Final</th>
            <th>Nota</th>
        </tr>
    </thead>
    <tbody>
        {#each inventario.filter((p) => p.categoria === Categorias.ELECTRONICA) as producto}
            <tr>
                <td>{producto.nombre}</td>
                <td>${precioFinal(producto).toFixed(2)}</td>
                <td>{nota(producto) ?? "Sin nota"}</td>
            </tr>
        {/each}
    </tbody>
</table>
<p style="font-weight: bold;">
    Total: {inventario.filter((p) => p.categoria === Categorias.ELECTRONICA)
        .reduce((total, p) => total + precioFinal(p), 0)
        .toFixed(2)}
</p>

<style>
    table {
        width: 100%;
        border-collapse: collapse;
    }

    th,
    td {
        border: 1px solid #ddd;
        padding: 8px;
        text-align: left;
    }

    th {
        background-color: #f2f2f2;
    }
</style>
