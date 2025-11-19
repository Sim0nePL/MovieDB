<script lang="ts">
   import Header from "$lib/components/Header.svelte";
	import MediaBrowse from "$lib/components/MediaBrowse.svelte";
   import MediaList from "$lib/components/MediaList.svelte";
	import MediaPopup from "$lib/components/MediaPopup.svelte";
	import { onMount } from "svelte";

   const SearchMedia = async (item_type: string, page: number = 1) => {
      const url = `https://whatson-api.onrender.com/?ratings_filters=rottentomatoes_critics&popularity_filters=imdb_popularity&item_type=${item_type}&minimum_ratings=3.5&release_date=new&page=${page}&limit=20`

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

   const SearchFavouritesMedia = async () => {
      
      type Media = {
         id: number,
         type: string
      }
      
      //@ts-ignore
      let favouritesList: Media[] = JSON.parse(localStorage.getItem('favourites')) || [];
      let promises = await favouritesList.map(async (media) => {
         const url = `https://whatson-api.onrender.com/${media.type}/${media.id}`
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
      })

      return await Promise.all(promises);
   }

   let moviesData: any = $state();
   let seriesData: any = $state();

   let favouritesData: any = $state([]);
   let toWatchData: any = $state([]);

   let popupMedia: any = $state();
   let popupVisible: boolean = $state(false);

   
   onMount(async () => {
      moviesData = await SearchMedia('movie');
      seriesData = await SearchMedia('tvshow');

      favouritesData = await SearchFavouritesMedia();
   })
</script>

<Header>
   <MediaBrowse/>
</Header>

<main>
   {#if (moviesData ?? undefined) !== undefined && (seriesData ?? undefined) !== undefined}
      <!-- API querries -->
      <MediaList title="Movies" medias={moviesData.results} bind:popupMedia={popupMedia} bind:popupVisible={popupVisible}></MediaList>
      <MediaList title="Series" medias={seriesData.results} bind:popupMedia={popupMedia} bind:popupVisible={popupVisible}></MediaList>

      <!-- Favourites -->
      {#if favouritesData.length > 0}
      <MediaList title="Favourites" medias={favouritesData}></MediaList>
      {/if}   
   {/if}
</main>

{#if popupMedia}
   <MediaPopup media={popupMedia.media} bind:visible={popupVisible}></MediaPopup>
{/if}
