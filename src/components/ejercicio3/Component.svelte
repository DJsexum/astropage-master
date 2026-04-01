<script lang="ts">

    import { onMount } from "svelte";
    import type { Post } from "../../core/interfaces/ejercicio3.interface";

    let posts = $state <Post[]>([]);
    let userID = $state <number>(0);

    onMount(async () => 
    {

        console.log("onMount");

        const respuesta = await fetch
        (
            "https://jsonplaceholder.typicode.com/posts"
        );
        
        posts  = await respuesta.json();
        console.log("posts: ", posts);
    });

    const filterPosts = (userId: number) => 
    {
        if (userID === 0 || isNaN(userId)) 
        {
            alert("Por favor, ingresa un ID de usuario válido.");
            return;
        }

        const filteredPosts = Post
        .filter ((post) => post.userId === userId);
        .map ((post) => 
        {
            return 
            {
                id: post.id,
                title: post.title,
            };
        }
            if (filterPosts.length === 0)
            {
                console.log("No se encontraron posts para el ID de usuario: " + userID);
            }
                else
                {
                    console.log("se encontraron " + filterPosts.length + " posts para el ID de usuario: " + userID);
                }
    };

</script>

<div class="mb-2 p-2">

    <input class="border" bind:value={userID} type="number" step="1" min="0"/>
    <button onclick = {() => filterPosts (userID)}> Filtrar Post </button>

</div>

<table class = "w-full">

    <thead class = "bg-gray-400 text-black flex-1">

        <tr>

            <th>ID</th>
            <th>UserId</th>
            <th>Title</th>
            <th>Body</th>

        </tr>

    </thead>

    <tbody class = "bg-gray-200 flex-1">

        {#each posts as post}

            <tr class = "p-2 hover:bg-gray-300">

                <td>{post.id}</td>
                <td>{post.userId}</td>
                <td>{post.title}</td>
                <td>{post.body}</td>

            </tr>

        {/each}

    </tbody>

</table>