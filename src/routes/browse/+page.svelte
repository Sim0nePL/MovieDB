<script lang="ts">
	import { onMount } from 'svelte';

	import Header from '$lib/components/Header.svelte';
	import Button from '$lib/components/Button.svelte';
	import MediaBanner from '$lib/components/MediaBanner.svelte';

	import TextInput from '$lib/components/TextInput.svelte';
	import FilterButton from '$lib/components/FilterButton.svelte';
	import RadioButton from '$lib/components/RadioButton.svelte';
	import NumberInput from '$lib/components/NumberInput.svelte';

	let media: Media_Scheme = {
		types: {
			values: [
				{
					value: 'movie',
					name: 'Movie'
				},
				{
					value: 'tvshow',
					name: 'Tv Show'
				}
			],
			result: 'tvshow'
		},
		genres: [
			{
				value: 'Action',
				enabled: false
			},
			{
				value: 'Action & Adventure',
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
				enabled: false,
			},
			{
				value: 'Crime',
				enabled: false,
			},
			{
				value: 	`Documentary`,
				enabled: false,
			},
			{
				value: 'Drama',
				enabled: false,
			},
			{
				value: 'Family',
				enabled: false,
			},
			{
				value: 'Fantasy',
				enabled: false,
			},
			{
				value: 'History',
				enabled: false,
			},
			{
				value: 'Horror',
				enabled: false,
			},
			{
				value: 'Mystery',
				enabled: false,
			},
			{
				value: 'Romance',
				enabled: false,
			},
			{
				value: 'Sci-Fi & Fantasy',
				enabled: false,
			},
			{
				value: 'Science Fiction',
				enabled: false,
			},
			{
				value: 'Thriller',
				enabled: false,
			},
			{
				value: 'TV Movie',
				enabled: false,
			},
			{
				value: 'War',
				enabled: false,
			},
		],
		duration: {
			from: {
				value: null,
				enabled: false
			},
			to: {
				value: null,
				enabled: false
			}
		},
		ratings: {
			services: [
				{
					value: 'imdb',
					name: 'IMDB',
				},
				{
					value: 'metacritics',
					name: 'Metacritic',
				},
				{
					value: 'rotten_tomatoes',
					name: 'Rotten Tomatoes',
				}
			],
			service: "imdb",
			from: {
				value: null,
				enabled: false
			},
			to: {
				value: null,
				enabled: false
			}

		}
	};

	let response = [
		{
			_id: 'aHR0cHM6Ly93d3cuYWxsb2NpbmUuZnIvc2VyaWVzL2ZpY2hlc2VyaWVfZ2VuX2NzZXJpZT03MTU3Lmh0bWw=',
			allocine: {
				id: 7157,
				url: 'https://www.allocine.fr/series/ficheserie_gen_cserie=7157.html',
				users_rating: 4.6,
				users_rating_count: 89659,
				critics_rating: 4.1,
				critics_rating_count: 7,
				popularity: 71
			},
			betaseries: {
				id: 'gameofthrones',
				url: 'https://www.betaseries.com/serie/gameofthrones',
				users_rating: 4.67,
				users_rating_count: 20167
			},
			id: 1399,
			image: 'https://fr.web.img5.acsta.net/pictures/23/01/03/14/13/0717778.jpg',
			imdb: {
				id: 'tt0944947',
				url: 'https://www.imdb.com/title/tt0944947/',
				users_rating: 9.2,
				users_rating_count: 2500658,
				popularity: 13,
				top_ranking: 13
			},
			is_active: true,
			item_type: 'tvshow',
			platforms_links: [],
			seasons_number: 8,
			status: 'Ended',
			title: 'Game of Thrones',
			trailer: 'https://www.dailymotion.com/embed/video/x86esn8',
			metacritic: {
				id: 'game-of-thrones',
				url: 'https://www.metacritic.com/tv/game-of-thrones',
				users_rating: 8.4,
				users_rating_count: 19777,
				critics_rating: 86,
				critics_rating_count: 171,
				must_see: true
			},
			mojo: null,
			rotten_tomatoes: {
				id: 'game_of_thrones',
				url: 'https://www.rottentomatoes.com/tv/game_of_thrones',
				users_rating: 85,
				users_rating_count: null,
				users_rating_liked_count: null,
				users_rating_not_liked_count: null,
				users_certified: false,
				critics_rating: 89,
				critics_rating_count: 337,
				critics_rating_liked_count: 312,
				critics_rating_not_liked_count: 25,
				critics_certified: false
			},
			updated_at: '2025-11-17T00:43:15.610Z',
			letterboxd: null,
			senscritique: {
				id: 225391,
				url: 'https://www.senscritique.com/serie/-/225391',
				users_rating: 8.2,
				users_rating_count: 166777
			},
			trakt: {
				id: 'game-of-thrones',
				url: 'https://trakt.tv/shows/game-of-thrones',
				users_rating: 89,
				users_rating_count: 142579
			},
			tmdb: {
				id: 1399,
				url: 'https://www.themoviedb.org/tv/1399',
				users_rating: 8.46,
				users_rating_count: 25775
			},
			tagline: 'Winter is coming.',
			release_date: '2011-01-01T00:00:00.000Z',
			directors: null,
			genres: ['Sci-Fi & Fantasy', 'Drama', 'Action & Adventure'],
			tv_time: {
				id: 121361,
				url: 'https://www.tvtime.com/show/121361',
				users_rating: 9.5
			},
			thetvdb: {
				id: 121361,
				slug: 'game-of-thrones',
				url: 'https://www.thetvdb.com/series/game-of-thrones'
			},
			original_title: 'Game of Thrones',
			production_companies: [
				'Revolution Sun Studios',
				'Television 360',
				'Generator Entertainment',
				'Bighead Littlehead'
			],
			networks: ['HBO'],
			is_adult: false,
			runtime: 3600,
			certification: 'TV-MA'
		},
		{
			_id: 'aHR0cHM6Ly93d3cuYWxsb2NpbmUuZnIvc2VyaWVzL2ZpY2hlc2VyaWVfZ2VuX2NzZXJpZT0yNTYzMy5odG1s',
			allocine: {
				id: 25633,
				url: 'https://www.allocine.fr/series/ficheserie_gen_cserie=25633.html',
				users_rating: 4.2,
				users_rating_count: 6861,
				critics_rating: 3.5,
				critics_rating_count: 16,
				popularity: null
			},
			betaseries: {
				id: 'house-of-the-dragon',
				url: 'https://www.betaseries.com/serie/house-of-the-dragon',
				users_rating: 4.32,
				users_rating_count: 1548
			},
			id: 94997,
			image: 'https://fr.web.img4.acsta.net/pictures/23/05/17/14/30/0480031.jpg',
			imdb: {
				id: 'tt11198330',
				url: 'https://www.imdb.com/title/tt11198330/',
				users_rating: 8.3,
				users_rating_count: 494810,
				popularity: null,
				top_ranking: 474
			},
			is_active: false,
			item_type: 'tvshow',
			platforms_links: [''],
			seasons_number: 4,
			status: 'Ongoing',
			title: 'Game of Thrones: House of the Dragon',
			trailer: 'https://www.dailymotion.com/embed/video/x8yjv6a',
			metacritic: {
				id: 'house-of-the-dragon',
				url: 'https://www.metacritic.com/tv/house-of-the-dragon',
				users_rating: 5.7,
				users_rating_count: 2063,
				critics_rating: 71,
				critics_rating_count: 83,
				must_see: false
			},
			mojo: null,
			rotten_tomatoes: {
				id: 'house_of_the_dragon',
				url: 'https://www.rottentomatoes.com/tv/house_of_the_dragon',
				users_rating: 77,
				users_rating_count: null,
				users_rating_liked_count: null,
				users_rating_not_liked_count: null,
				users_certified: false,
				critics_rating: 87,
				critics_rating_count: 100,
				critics_rating_liked_count: 83,
				critics_rating_not_liked_count: 17,
				critics_certified: false
			},
			updated_at: '2025-11-16T16:34:21.809Z',
			letterboxd: null,
			senscritique: {
				id: 40572227,
				url: 'https://www.senscritique.com/serie/-/40572227',
				users_rating: 7.4,
				users_rating_count: 14049
			},
			trakt: {
				id: 'house-of-the-dragon',
				url: 'https://trakt.tv/shows/house-of-the-dragon',
				users_rating: 81,
				users_rating_count: 16917
			},
			tmdb: {
				id: 94997,
				url: 'https://www.themoviedb.org/tv/94997',
				users_rating: 8.31,
				users_rating_count: 5567
			},
			tagline: 'All must choose.',
			release_date: '2022-01-01T00:00:00.000Z',
			directors: null,
			genres: ['Sci-Fi & Fantasy', 'Drama', 'Action & Adventure'],
			tv_time: {
				id: 371572,
				url: 'https://www.tvtime.com/show/371572',
				users_rating: 9.68
			},
			thetvdb: {
				id: 371572,
				slug: 'house-of-the-dragon',
				url: 'https://www.thetvdb.com/series/house-of-the-dragon'
			},
			original_title: 'House of the Dragon',
			networks: ['HBO'],
			production_companies: ['HBO', 'Bastard Sword', '1:26 Pictures', 'GRRM'],
			is_adult: false,
			runtime: 3600,
			certification: 'TV-MA'
		}
	];

	let searchValue = $state('');

	onMount(() => {
		const params = new URLSearchParams(location.search);
		searchValue = params.get('q') ?? '';
	});
</script>

<main>
	<section class="left">
		<Header />
		<h2>Title</h2>
		<TextInput bind:value={searchValue}></TextInput>
		<h2>Type</h2>
		<div class="filters">
			{#each media.types.values as media_type (media_type.value)}
				<RadioButton
					id={media_type.value}
					name="media_genre"
					value={media_type.name}
					bind:group={media.types.result}
				></RadioButton>
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
			<FilterButton id="ratings_from" bind:checked={media.duration.from.enabled}>From</FilterButton>
			<NumberInput postfix="min" bind:value={media.duration.from.value}></NumberInput>
			<FilterButton id="ratings_to" bind:checked={media.duration.to.enabled}>To</FilterButton>
			<NumberInput postfix="min" bind:value={media.duration.to.value}></NumberInput>
		</div>

		<h2>Ratings</h2>
		<div class="filters">
			{#each media.ratings.services as service (service.value)}
				<RadioButton id={service.value} name="rating_service" value={service.name} bind:group={media.ratings.service}></RadioButton>
			{/each}
			<FilterButton id="duration_from" bind:checked={media.duration.from.enabled}>From</FilterButton>
			<NumberInput bind:value={media.duration.from.value}></NumberInput>
			<FilterButton id="duration_to" bind:checked={media.duration.to.enabled}>To</FilterButton>
			<NumberInput bind:value={media.duration.to.value}></NumberInput>
		</div>
	</section>
	<section class="right">
		<h2>Found:</h2>
		<div>
			{#each response as media}
				<MediaBanner
					title={media.title}
					tagline={media.tagline}
					image={media.image}
					genres={media.genres}
				></MediaBanner>
			{/each}
		</div>
		<Button>&larr;</Button>
		<p class="right__page">Page 2/5</p>
		<Button>&rarr;</Button>
	</section>
</main>

<style>
	main {
		display: flex;
		flex-wrap: wrap;
		gap: 20px;
	}

	main > * {
		flex: 1;
	}

	.left {
		white-space: nowrap;
	}

	h2 {
		font-family: var(--font-expletus-sans);
		font-size: 36px;
		margin-left: 12px;
		margin-top: 20px;
	}

	.filters {
		display: flex;
		flex-wrap: wrap;
		gap: 5px;
	}

	.right__page {
		display: inline;
		padding: 5px 50px;
		background-color: var(--color-dark-mid);
		border: 2px solid var(--color-dark-high);
		border-radius: 10px;

		font-family: var(--font-vend-sans);
		font-weight: 300;
		font-size: 20px;
	}

	@media screen and (max-width: 1160px) {
		:global(body) {
			padding: 20px 40px;
		}
	}
</style>
