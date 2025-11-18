<script lang="ts">
   import Header from "$lib/components/Header.svelte";
	import MediaBrowse from "$lib/components/MediaBrowse.svelte";
   import MediaList from "$lib/components/MediaList.svelte";
</script>

<Header>
   <MediaBrowse/>
</Header>

<main>
	<MediaList mediaType="movie"></MediaList>
	<MediaList mediaType="tvshow"></MediaList>
</main>