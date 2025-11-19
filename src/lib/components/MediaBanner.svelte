<script lang="ts">
	import AddToFavourite from "./AddToFavourite.svelte";


	let { media, onclick } = $props();
</script>

<button {onclick} class="media__card">
	<img src={media.image} alt="{media.title} Poster" width="130px" />
	<div class="info">
		<div class="info__title">
			<h3>{media.title}</h3>
			<div class="info__utilities">
				<AddToFavourite mediaId={media.id} mediaType={media.item_type} size="30px"></AddToFavourite>
			</div>
		</div>
		<div class="tagline">
			<p>{media.tagline}</p>
		</div>
		<div class="genres">
			<h4>Genres</h4>
			{#each media.genres as genre}
				<p class="tag">{genre}</p>
			{/each}
		</div>
		<div class="info__bottom">
			{#if media.release_date != null}
				<div class="release_year">
					<h5>Release Year</h5>
					<p>{media.release_date.split('-')[0]}</p>
				</div>
			{/if}
			{#if media.runtime != null}
				<div class="runtime">
					<h5>Runtime</h5>
					<p>{media.runtime / 60} min</p>
				</div>
			{/if}
			{#if media.seasons_number != null}
				<div class="seasons_number">
					<h5>Seasons</h5>
					<p>{media.seasons_number}</p>
				</div>
			{/if}
			{#if media.seasons_number != null}
				<div class="stats">
					<h5>Status</h5>
					<p>{media.status}</p>
				</div>
			{/if}
		</div>
	</div>
</button>

<style>
	.media__card {
		display: flex;
		margin-bottom: 10px;
		min-width: 550px;
		outline: none;
		border: none;
		width: 100%;

		background: linear-gradient(
			120deg,
			var(--color-dark-low) 30%,
			var(--color-dark-mid) 85%,
			var(--color-primary) 100%
		);
		background-size: 200%;
		background-position: left top;
		border-radius: 15px;

		transition: background-position 0.4s ease;
	}

	.media__card:hover {
		background-position: right bottom;
	}

	.info__bottom {
		display: flex;
		gap: 10px;
	}

	.info__bottom > * {
		text-align: center;
	}

	.info__utilities {
		display: flex;
		flex-wrap: nowrap;
		height: fit-content;
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
		margin-bottom: 5px;
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

	h5 {
		font-family: var(--font-vend-sans);
		font-size: 12px;
		font-weight: 300;
	}

	p {
		font-family: var(--font-vend-sans);
		font-size: 18px;
	}
</style>
