<script lang="ts">
   import Header from "$lib/components/Header.svelte";
   import HeaderRight from "$lib/components/HeaderRight.svelte";
   import MediaList from "$lib/components/MediaList.svelte";
</script>

<Header>
   <HeaderRight></HeaderRight>
</Header>

<main>
	<MediaList mediaType="movie"></MediaList>
	<MediaList mediaType="tvshow"></MediaList>
</main>