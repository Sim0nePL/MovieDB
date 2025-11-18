<script lang="ts">
   import FavouriteIcon from '$lib/assets/icons8-star-100.png';
   import WatchLaterIcon from '$lib/assets/icons8-clock-48.png';

	let { title, tagline, image, genres } = $props();
</script>

<div class="media__card">
   <img src={image} alt="{title} Poster" width="180px">
   <div class="info">
      <div class="info__title">
         <h3>{title}</h3>
         <div class="info__utilities">
            <img src={FavouriteIcon} alt="Add to favourites list" width="30px">
            <img src={WatchLaterIcon} alt="Add to watch later list" width="30px">
         </div>
      </div>
      <div class="tagline">
         <p>{tagline}</p>
      </div>
      <div class="genres">
         <h4>Genres</h4>
         {#each genres as genre}
            <p class="tag">{genre}</p>
         {/each}
      </div>
      
      
   </div>
</div>

<style>
   .media__card {
      display: flex;
      margin-bottom: 10px;

      background: linear-gradient(120deg, var(--color-dark-low) 30%, var(--color-dark-mid) 85%, var(--color-primary) 100%);
      background-size: 200%;
      background-position: left top;
      border-radius: 15px;

      transition: background-position 0.4s ease;
   }

   .media__card:hover {
      background-position: right bottom;
   }

   .info {
      flex: 1;

      padding: 10px 20px;
   }

   .info__title {
      display: flex;
      justify-content: space-between;
   }

   .tag {
      display: inline;
      padding: 5px 5px;
      font-size: 14px;
      font-weight: 300;
   }

   .genres {
      margin-top: 10px;
   }

   img {
      border-radius: 5px;
   }

   h3 {
      font-family: var(--font-expletus-sans);
      font-size: 28px;
   }

   h4 {
      font-family: var(--font-vend-sans);
      font-size: 18px;
   }

   p {
      font-family: var(--font-vend-sans);
      font-size: 18px;
   }

</style>