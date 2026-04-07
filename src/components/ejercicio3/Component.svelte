<script lang="ts">

    import { onMount } from "svelte";
    import type { Post } from "../../core/interfaces/ejercicio3.interface";

    let posts = $state<Post[]>([]);
    let userID = $state<number>(0);
    let originalPosts: Post[] = [];

    onMount(async () => 
    {
        console.log("onMount");

        const respuesta = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await respuesta.json();
        
        originalPosts = data;
        posts = data;
        
        console.log("posts: ", posts);
    });

    const filterPosts = (id: number) => 
    {
        if (id === 0 || isNaN(id)) 
        {
            alert("Por favor, ingresa un ID de usuario válido.");
            return;
        }

        const filtered = originalPosts.filter((post) => post.userId === id);

        if (filtered.length === 0)
        {
            console.log("No se encontraron posts para el ID de usuario: " + id);
            alert("No se encontraron posts para ese ID");
        }
            else
            {
                console.log("Se encontraron " + filtered.length + " posts para el ID de usuario: " + id);
                posts = filtered;
            }
    };

</script>

<div class="mb-2 p-2">

    <input
        class="border p-1" 
        bind:value={userID} 
        type="number" 
        step="1" 
        min="0"
    />

    <button
        onclick={() => filterPosts(userID)}
        class="bg-blue-500 text-white px-2 py-1 rounded"
    >

        Filtrar Post

    </button>

</div>

<table class="w-full border-collapse">

    <thead class="bg-gray-400 text-black">

        <tr>
        
            <th class="border p-2">ID</th>
            <th class="border p-2">UserId</th>
            <th class="border p-2 text-left">Title</th>
            <th class="border p-2 text-left">Body</th>

        </tr>

    </thead>

    <tbody class="bg-gray-200">

        {#each posts as post}

            <tr class="hover:bg-gray-300">

                <td class="border p-2 text-center">{post.id}</td>
                <td class="border p-2 text-center">{post.userId}</td>
                <td class="border p-2">{post.title}</td>
                <td class="border p-2 text-sm">{post.body}</td>

            </tr>

        {/each}

    </tbody>
    
</table>