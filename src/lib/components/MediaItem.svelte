<script lang="ts">
	import AddToFavourite from "./AddToFavourite.svelte";

   let { mediaId, mediaType, imgURL, scrollValue, onclick } : 
      { mediaId : Number, mediaType : string, imgURL : string, scrollValue? : Number, onclick?: any} = $props();

</script>

<li style="transform: translateX(-{scrollValue}px);">
   <button {onclick}>
      <img src="{imgURL}" alt="MEDIA" width="180" height="270">
   </button>
   <div class="favourite_pos">
      <AddToFavourite {mediaId} {mediaType} size=40></AddToFavourite>
   </div>
</li>

<style>
   button {
      padding: 0;
      background: 0;
      outline: 0;
      border: 0;
   }

   li {
      position: relative;
      padding: 0;
      width: 180px;
      height:270px;

      transition: transform 0.4s ease;
   }

   .favourite_pos {
      position: absolute;
      width: 40px;
      height: 40px;
      bottom: 0px;
      right: 0px;

      background: none;
      border: none;
      padding: 0;

      opacity: 0;
      
      transition: opacity 0.2s ease;
   }

   li:hover .favourite_pos {
      opacity: 1;
   }

   img {
      border-radius: 5px;
      opacity: 0.8;

      transition: opacity 0.2s ease;
   }

   li:hover img {
      z-index: 10;
      border-radius: 10px;
      opacity: 1.0;

      transform: scale(1.1);

      transition: transform 0.1s ease;
   }

</style>