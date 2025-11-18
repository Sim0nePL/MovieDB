<script lang="ts">
    import type { Snippet } from 'svelte';

    let { children } : { children?: Snippet } = $props();
    let searchValue: string = $state('');
</script>

<header>
    <h1><a href="/">Movie <span>DB</span></a></h1>
    {@render children?.()}
</header>

<style>
    header {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        padding: 20px 60px;
        margin-bottom: 50px;
    }

    h1 {
        font-family: var(--font-expletus-sans);
        text-align: center;
        font-size: 80px;
        margin-bottom: 30px;
    }

    a {
        text-decoration: none;
    }

    @media screen and (max-width: 1160px) {
        header {
            flex-direction: column;
            align-items: center;
            padding: 40px 30px;

            margin-bottom: 0;
        }

    }
</style>