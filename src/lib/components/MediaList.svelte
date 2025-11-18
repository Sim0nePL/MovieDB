<script lang="ts">
	import MediaItem from './MediaItem.svelte';

	let { title, medias }: { title: string, medias?: | any } = $props();

	let scrollValue = $state(0);

</script>

<h2>{title}</h2>
<div>
	<ul>
		{#each medias as media (media.id)}
			<MediaItem mediaId={media.id} mediaType={media.item_type} imgURL={media.image} {scrollValue}></MediaItem>
		{/each}
	</ul>
	<button onclick={() => {
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
		right: 0;
		height: 100%;
		padding: 20px 30px;
		background: linear-gradient(90deg, rgba(79, 79, 79, 0.1),var(--color-dark-low));
		background-size: 150%;
		background-position: left;
		border: none;

		font-family: var(--font-vend-sans);
		font-size: 24px;

		transition: background-position 0.2s ease;
	}

	button:hover {
		background-position: right;
	}

</style>
