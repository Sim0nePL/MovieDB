<script lang='ts'>
   import FavouriteIcon from '$lib/assets/icons8-star-100.png'
   import FavouriteFilledIcon from '$lib/assets/icons8-star-filled-100.png'
	import { onMount } from 'svelte';

   let { mediaId, mediaType, size } = $props();

   let isFavourite = $state(false);

   type Media = {
      id: number,
      type: string
   }

   onMount(() => {
      // @ts-ignore
      let favourites: Media[] = JSON.parse(localStorage.getItem('favourites')) || [];

      isFavourite = favourites.filter((item: any) => item.id == mediaId).length > 0;
   })


   function Clicked() {
      // @ts-ignore
      let favourites: Media[] = JSON.parse(localStorage.getItem('favourites')) || [];

      if(isFavourite) {
         favourites = favourites.filter((item: Media) => item.id != mediaId);
      } else {
         favourites.push({
            id: mediaId,
            type: mediaType
         })
      }
      
      localStorage.setItem('favourites', JSON.stringify(favourites));
      isFavourite = favourites.filter((item: Media) => item.id == mediaId).length > 0;
   }

</script>
<!-- mouseclick_preventdefault to prevent open popup when clicked MediaBanner -->
<button onclick={Clicked} class="mouseclick_preventdefault"> 
   <img class="{isFavourite ? 'hidden' : ''} mouseclick_preventdefault" src={FavouriteIcon} alt="Favourite" width={size} height={size}>
   <img class="{isFavourite ? '' : 'hidden'} mouseclick_preventdefault" src={FavouriteFilledIcon} alt="Favourite" width={size} height={size}>
</button>

<style>
   button {
      background: none;
      border: none;
      outline: none;

      padding: 0;
      margin: 0;
   }

   .hidden {
      display: none;
   }
</style>