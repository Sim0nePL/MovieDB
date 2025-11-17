<script lang="ts">
   let { mediaId, mediaType, imgURL, scrollValue } : 
      { mediaId : Number, mediaType : string, imgURL : string, scrollValue? : Number} = $props();

   let isFavourite = $state(false);
</script>

<li style="transform: translateX(-{scrollValue}px);">
   <img src="{imgURL}" alt="MEDIA" width="180" height="270">
   <input class="{ isFavourite ? 'activated' : '' }" type="button" onclick={() => {
      isFavourite = !isFavourite;
   }}>
</li>

<style>
   li {
      position: relative;
      padding: 0;
      width: 180px;
      height:270px;

      transition: transform 0.4s ease;
   }

   input {
      position: absolute;
      width: 40px;
      height: 40px;
      bottom: 0px;
      right: 0px;

      background: none;
      border: none;
      padding: 0;
      
      background-image: url("../assets/icons8-star-100.png");
      background-size: 40px 40px;
      cursor: pointer;

      opacity: 0;
      
      transition: opacity 0.2s ease;
   }

   .activated {
      background-image: url("../assets/icons8-star-filled-100.png");
   }

   li:hover input {
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