<script lang="ts">
    import Button from "$lib/components/Button.svelte";
    import TextInput from "$lib/components/TextInput.svelte";

    let searchValue: string = $state('');
</script>

<section>
    <h3>Odkryj świat <span>filmów</span>!</h3>
    <TextInput id="media_title-input" bind:value={searchValue} placeholder="Black Mirror" />
    <div class="buttons">
        <Button>Discover</Button>
        <Button
            onclick={() => {
                if (searchValue == '') return;
                location.href = `./browse?q=${searchValue}`;
            }}>Browse</Button
        >
    </div>
</section>

<style>
    section {
        text-align: end;
    }

    h3 {
        font-family: var(--font-expletus-sans);
        font-size: 36px;
        margin-bottom: 5px;
    }

    :global(#media_title-input) {
        width: max(30vw, 360px);
        margin-bottom: 5px;
    }

    @media screen and (max-width: 1160px) {
        section {
            text-align: center;
        }
    }
</style>