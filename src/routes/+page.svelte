<script lang="ts">
   import Header from "$lib/components/Header.svelte";
   import MediaList from "$lib/components/MediaList.svelte";
   import HeaderRight from "$lib/components/HeaderRight.svelte"
    import Button from "$lib/components/Button.svelte";
</script>

<Header>
    <HeaderRight/>
</Header>
<main>
	<MediaList mediaType="movie"></MediaList>
	<MediaList mediaType="tvshow"></MediaList>
</main>