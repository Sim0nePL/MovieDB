<script lang="ts">
	import { onMount } from 'svelte';

	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import Button from '$lib/components/Button.svelte';
	import MediaBanner from '$lib/components/MediaBanner.svelte';

	import TextInput from '$lib/components/TextInput.svelte';
	import FilterButton from '$lib/components/FilterButton.svelte';
	import RadioButton from '$lib/components/RadioButton.svelte';
	import NumberInput from '$lib/components/NumberInput.svelte';
	import BlankTile from '$lib/components/BlankTile.svelte';
	import MediaPopup from '$lib/components/MediaPopup.svelte';

	let media: Media_Querry = $state({
		title: '',
		types: {
			options: [
				{
					value: 'movie',
					name: 'Movie'
				},
				{
					value: 'tvshow',
					name: 'Tv Show'
				}
			],
			value: 'movie'
		},
		genres: [
			{
				value: 'Action',
				enabled: false
			},
			{
				value: 'Adventure',
				enabled: false
			},
			{
				value: 'Animation',
				enabled: false
			},
			{
				value: 'Comedy',
				enabled: false
			},
			{
				value: 'Crime',
				enabled: false
			},
			{
				value: 'Documentary',
				enabled: false
			},
			{
				value: 'Drama',
				enabled: false
			},
			{
				value: 'Family',
				enabled: false
			},
			{
				value: 'Fantasy',
				enabled: false
			},
			{
				value: 'History',
				enabled: false
			},
			{
				value: 'Horror',
				enabled: false
			},
			{
				value: 'Mystery',
				enabled: false
			},
			{
				value: 'Romance',
				enabled: false
			},
			{
				value: 'Science Fiction',
				enabled: false
			},
			{
				value: 'Thriller',
				enabled: false
			},
			{
				value: 'TV Movie',
				enabled: false
			},
			{
				value: 'War',
				enabled: false
			}
		],
		duration: {
			from: null,
			to: null,
		},
		ratings: {
			services: [
				{
					value: 'imdb_users',
					name: 'IMDB'
				},
				{
					value: 'metacritic_critics,metacritic_users',
					name: 'Metacritic'
				},
				{
					value: 'rottentomatoes_critics,rottentomatoes_users',
					name: 'Rotten Tomatoes'
				}
			],
			service: 'imdb_users',
			from: null,
		},
		limit: 15,
		page: 1
	});

	let result: any = $state(undefined);

	// Api Call - Returns Result
	const SearchMedia = async (page: number = 1) => {
		// TODO : Add Searching status
		let url = 'https://whatson-api.onrender.com/?'

		if(media.title != '')
			url += `title=${encodeURIComponent(media.title)}&`
		
		if(media.types.value != '')
			url += `item_type=${encodeURIComponent(media.types.value)}&`
		
		if(media.genres.filter((genre) => genre.enabled).length) {
			let genres = "";
			media.genres.forEach(genre => {
				if (genre.enabled)
					genres += encodeURIComponent(genre.value) + ',';
			});
			genres = genres.slice(0, -1);
			url += `genres=${genres}&`
		}
		
		let runtime = '';
		if(media.duration.from ?? 0 > 0) {
			runtime += `runtime=${(media.duration.from ?? 0) * 60}`
			if((media.duration.to ?? 0) == 0)
				runtime += ',9999'
		}

		if(media.duration.to ?? 0 > 0) {
			if(runtime == '')
				runtime += 'runtime=0'

			runtime += `,${(media.duration.to ?? 0) * 60}`
		}
		if(runtime != '')
			runtime += "&";

		url += runtime;

		if(media.ratings.from ?? 0 > 0)
			url += `minimum_ratings=${media.ratings.from}&`

		if(media.ratings.service != '')
			url += `ratings_filters=${media.ratings.service}&`

		url += `limit=${media.limit}&`
		url += `page=${page}`


		console.log(url);

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

   let popupMedia: any = $state();
   let popupVisible: boolean = $state(false);

	onMount(() => {
		const params = new URLSearchParams(location.search);
		media.title = params.get('q') ?? '';

		(async () => {
			result = await SearchMedia();
		})();
	});
</script>

<main>
	<section class="left">
		<Header/>
		<Button id="search_button" onclick={async () => {
			result = await SearchMedia();
		}}>Search</Button>
		<h2>Title</h2>
		<TextInput bind:value={media.title}></TextInput>
		<h2>Type</h2>
		<div class="filters">
			{#each media.types.options as media_type (media_type.value)}
				<RadioButton
					id={media_type.value}
					name="media_genre"
					value={media_type.value}
					bind:group={media.types.value}
				>{media_type.name}</RadioButton>
			{/each}
		</div>

		<h2>Genres</h2>
		<div class="filters">
			{#each media.genres as genre (genre.value)}
				<FilterButton id={genre.value} bind:checked={genre.enabled}>{genre.value}</FilterButton>
			{/each}
		</div>

		<h2>Duration</h2>
		<div class="filters">
			<BlankTile bind:activated={media.duration.from}>From</BlankTile>
			<NumberInput postfix="min" bind:value={media.duration.from}></NumberInput>
			<BlankTile bind:activated={media.duration.to}>To</BlankTile>
			<NumberInput postfix="min" bind:value={media.duration.to}></NumberInput>
		</div>

		<h2>Ratings</h2>
		<div>
			<div class="filters">
				{#each media.ratings.services as service (service.value)}
				<RadioButton
					id={service.value}
					name="rating_service"
					value={service.value}
					bind:group={media.ratings.service}
				>{service.name}</RadioButton>
			{/each}
			</div>
			<div class="filters">
				<BlankTile bind:activated={media.ratings.from}>From</BlankTile>
				<NumberInput bind:value={media.ratings.from}></NumberInput>
			</div>
		</div>
		<h5>Filters & Limits etc. doesn't work while searching by name ( API limitation )</h5>
		<h5>Emm... also pages broke when using filters because API returns wrong total_page value...</h5>
	</section>
	<section class="right">
		{#if result !== undefined} <!-- Check is result undefined in case api call threw error -->
		<h2>Found {result.total_results}:</h2>
		<div>
				{#each result.results as media}
					<MediaBanner {media} onclick={(e: any) => {
						if(!e.target.classList.contains("mouseclick_preventdefault")) {
							popupMedia = {media};
							popupVisible = true;
						}
					}} ></MediaBanner>
				{/each}
			</div>
			<Button onclick={async () => {
				if(result.page > 1)
					result = await SearchMedia(result.page - 1);
			}}>&larr;</Button>
			<p class="right_page-index">Page {result.page}/{result.total_pages}</p>
			<Button onclick={async () => {
				if (result.page < result.total_pages)
					result = await SearchMedia(result.page + 1);
			}}>&rarr;</Button>
		{/if}
	</section>
	{#if popupMedia}
   <MediaPopup media={popupMedia.media} bind:visible={popupVisible}></MediaPopup>
	{/if}
<Footer></Footer>
</main>

<style>
	main {
		display: flex;
		flex-wrap: wrap;
		/* flex-direction: column; */
		gap: 20px;
	}

	main > * {
		flex: 1;
	}

	.left {
		white-space: nowrap;
		position: relative;
	}

	:global(#search_button) {
		position: absolute;
		top: 220px;
		right: 0;
	}

	
	.filters {
		display: flex;
		flex-wrap: wrap;
		gap: 5px;
		margin-bottom: 5px;
	}
	
	.right_page-index {
		display: inline;
		padding: 5px 50px;
		background-color: var(--color-dark-mid);
		border: 2px solid var(--color-dark-high);
		border-radius: 10px;
		
		font-family: var(--font-vend-sans);
		font-weight: 300;
		font-size: 20px;
	}

	h2 {
		font-family: var(--font-expletus-sans);
		font-size: 36px;
		margin-left: 12px;
		margin-top: 10px;
	}

	h5 {
		font-family: var(--font-vend-sans);
		font-size: 16px;
		font-weight: 500;
	}
	
	@media screen and (max-width: 1160px) {
		:global(body) {
			padding: 20px 40px;
		}
	}
</style>
