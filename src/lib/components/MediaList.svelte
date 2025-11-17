<script lang="ts">
	import MediaItem from './MediaItem.svelte';

	let { mediaType }: { mediaType: 'movie' | 'tvshow' } = $props();

	let medias = [
		{
			id: 860,
			item_type: 'movie',
			image: 'https://fr.web.img6.acsta.net/pictures/18/11/27/09/03/3375141.jpg'
		},
		{
			id: 377290,
			item_type: 'movie',
			image: 'https://fr.web.img5.acsta.net/pictures/17/01/19/16/43/355915.jpg'
		},
		{
			id: 499088,
			item_type: 'movie',
			image: 'https://fr.web.img6.acsta.net/pictures/18/06/19/12/11/1098153.jpg'
		},
		{
			id: 375108,
			item_type: 'movie',
			image: 'https://fr.web.img3.acsta.net/pictures/16/06/09/14/28/215077.jpg'
		},
		{
			id: 10234,
			item_type: 'movie',
			image: 'https://fr.web.img2.acsta.net/medias/nmedia/18/36/11/07/20190465.jpg'
		},
		{
			id: 400605,
			item_type: 'movie',
			image: 'https://fr.web.img3.acsta.net/pictures/16/07/22/12/21/272873.jpg'
		},
		{
			id: 52748,
			item_type: 'movie',
			image: 'https://fr.web.img3.acsta.net/img/87/fe/87fe7215d0036fef431f38eb13fe8187.jpg'
		},
		{
			id: 45877,
			item_type: 'movie',
			image: 'https://fr.web.img5.acsta.net/pictures/16/04/26/16/24/062900.jpg'
		},
		{
			id: 15487,
			item_type: 'movie',
			image: 'https://fr.web.img4.acsta.net/medias/nmedia/18/35/66/22/18453398.jpg'
		},
		{
			id: 11859,
			item_type: 'movie',
			image: 'https://fr.web.img4.acsta.net/medias/nmedia/18/62/84/54/18655221.jpg'
		},
		{
			id: 441967,
			item_type: 'movie',
			image: 'https://fr.web.img2.acsta.net/pictures/17/05/23/16/29/524557.jpg'
		},
		{
			id: 411023,
			item_type: 'movie',
			image: 'https://fr.web.img3.acsta.net/pictures/16/10/24/11/33/460438.jpg'
		},
		{
			id: 80919,
			item_type: 'movie',
			image: 'https://fr.web.img6.acsta.net/medias/nmedia/18/35/58/79/18647155.jpg'
		},
		{
			id: 9727,
			item_type: 'movie',
			image: 'https://fr.web.img3.acsta.net/medias/nmedia/18/35/93/14/18436317.jpg'
		},
		{
			id: 10390,
			item_type: 'movie',
			image: 'https://fr.web.img5.acsta.net/medias/nmedia/images/affiches/048370.jpg'
		},
		{
			id: 9469,
			item_type: 'movie',
			image: 'https://fr.web.img3.acsta.net/medias/nmedia/images/affiches/048716.jpg'
		},
		{
			id: 2155,
			item_type: 'movie',
			image: 'https://fr.web.img5.acsta.net/pictures/13/12/23/15/44/104219.jpg'
		},
		{
			id: 82495,
			item_type: 'movie',
			image: 'https://fr.web.img6.acsta.net/medias/nmedia/00/00/01/19/69197493_af.jpg'
		}
	];

	let scrollValue = $state(0);

</script>

<h2>{mediaType}</h2>
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
