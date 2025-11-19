<script lang="ts">
	import MediaItem from './MediaItem.svelte';

	let { title, medias, popupMedia = $bindable(), popupVisible = $bindable() }: { title: string, medias?: | any, popupMedia?: any, popupVisible?: any } = $props();

	let scrollValue = $state(0);

</script>

<h2>{title}</h2>
<div>
	<button class="previous" onclick={() => {
		scrollValue -= 180 + 10;
	}}>
		&larr;
	</button>
	<ul>
		{#each medias as media (media.id)}
			<MediaItem mediaId={media.id} mediaType={media.item_type} imgURL={media.image} {scrollValue} onclick={() =>{
				popupMedia={media}; 
				popupVisible = true;	
			}}></MediaItem>
		{/each}
	</ul>
	<button class="next" onclick={() => {
		scrollValue += 180 + 10;
	}}>
		&rarr;
	</button>
</div>


<style>
	h2 {
		font-family: var(--font-expletus-sans);
		font-size: 42px;
		margin-left: 40px;
	}

	
	div {
		position: relative;
		padding: 20px;
		
      background-color: var(--color-dark-low);
      border-radius: 10px;
		overflow: visible;
		overflow-x: hidden;
	}
	
	ul {
		position: relative;
		display: flex;
		padding: 0;
		gap: 10px;
		list-style-type: none;
	}

	button {
		position: absolute;
		top: 0;
		height: 100%;
		padding: 20px 30px;
		background: linear-gradient(90deg, rgba(79, 79, 79, 0.1),var(--color-dark-low));
		background-size: 150%;
		background-position: left;
		border: none;

		font-family: var(--font-vend-sans);
		font-size: 24px;
		z-index: 10;

		transition: background-position 0.2s ease;
	}

	.next {
		right: 0;
	}
	.previous {
		left: 0
	}

	button:hover {
		background-position: right;
	}

</style>
