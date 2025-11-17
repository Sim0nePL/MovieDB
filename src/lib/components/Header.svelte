<script lang="ts">
	import Button from "$lib/components/Button.svelte";
	import TextInput from "$lib/components/TextInput.svelte";

   let { rightSide = true } : { rightSide? : boolean } = $props();

   let searchValue : string = $state("");
</script>

<header>
   <h1>Movie <span>DB</span></h1>
   {#if rightSide}
      <div class="header__right">
         <h3>Odkryj świat <span>filmów</span>!</h3>
         <TextInput id="media_title-input" bind:value={searchValue} placeholder="Black Mirror"/>
         <div class="buttons">
            <Button>Discover</Button>
            <Button onclick={() => {
               if (searchValue == '')
                  return;
               location.href = `./browse?q=${searchValue}`
            } }>Browse</Button>
         </div>
	   </div>
   {/if}
</header>

<style>
   header {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      padding: 20px 60px;
      margin-bottom: 50px;
   }

   h1 {
      font-family: var(--font-expletus-sans);
      text-align: center;
      font-size: 80px;
      margin-bottom: 30px;
   }

	.header__right {
      text-align: end;
	}

	h3 {
		font-family: var(--font-expletus-sans);
		font-size: 36px;
      margin-bottom: 5px;
	}

   :global(#media_title-input) {
      width: max(30vw, 360px);
      margin-bottom: 5px;
   }

   @media screen and (max-width: 1160px) {
      header {
         flex-direction: column;
         align-items: center;
         padding: 40px 30px;

         margin-bottom: 0;
      }

      .header__right {
         text-align: center;
      }
   }
</style>