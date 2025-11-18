<script lang="ts">
   import Header from "$lib/components/Header.svelte";
	import MediaBrowse from "$lib/components/MediaBrowse.svelte";
   import MediaList from "$lib/components/MediaList.svelte";
	import { onMount } from "svelte";

   const SearchMedia = async (item_type: string, page: number = 1) => {
      const url = `https://whatson-api.onrender.com/?ratings_filters=rottentomatoes_critics&popularity_filters=imdb_popularity&item_type=${item_type}&minimum_ratings=3.5&release_date=new&page=${page}&limit=20`
      // const url = `https://whatson-api.onrender.com/?item_type=${item_type}&minimum_ratings=4.0&release_date=new&page=${page}&limit=10`

      try {
         const response = await fetch(url);
         if(!response.ok) {
               throw new Error(`Response status: ${response.status}`);
         }

         const result = await response.json();
         return result;
      } catch (error: any) {
         console.error(error.message)
      }
   }

   let moviesData: any = $state();
   let seriesData: any = $state();

   onMount(async () => {
      moviesData = await SearchMedia('movie');
      seriesData = await SearchMedia('tvshow');
   })
</script>

<Header>
   <MediaBrowse/>
</Header>

<main>
   {#if (moviesData ?? undefined) !== undefined && (seriesData ?? undefined) !== undefined}
      <MediaList title="Movies" medias={moviesData.results}></MediaList>
      <MediaList title="Series" medias={seriesData.results}></MediaList>
      <MediaList title="Favourites" medias={seriesData.results}></MediaList>
      <MediaList title="To watch" medias={seriesData.results}></MediaList>
   {/if}
</main>