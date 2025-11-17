<script>
   import Header from "$lib/components/Header.svelte";
	import MediaList from "$lib/components/MediaList.svelte";
</script>

<Header/>
<main>
	<MediaList mediaType="movie"></MediaList>
	<MediaList mediaType="tvshow"></MediaList>
</main>