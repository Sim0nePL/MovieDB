<script lang="ts">
	import CloseIcon from '$lib/assets/icons8-close-48.png';
	import AddToFavourite from './AddToFavourite.svelte';
	import CloseButton from './CloseButton.svelte';

	let { media, visible = $bindable() }: { media: any; visible?: number | boolean | null} = $props();
</script>

<button class="mouseclick_closepopup {visible ? 'visible' : ''}" onclick={(e: any) => {
	if(e.target.classList.contains("mouseclick_closepopup"))
		visible = false }} 
	id="media__popup">
	<div class="popup">
		<img src={media.image} alt="{media.title} poster" />
		<div class="popup__info">
			<div class="title__row">
				<h1>{media.title}</h1>
				<div class="title__options">
					<AddToFavourite mediaId={media.id} mediaType={media.item_type} size=40/>
					<CloseButton onclick={() => {
						visible = false;
					}}></CloseButton>
				</div>
			</div>
			<div class="description">
				<p>{media.tagline}</p>
			</div>
			<h2>Genres</h2>
			<ul class="genres__list">
				{#each media.genres as genre}
					<li>{genre}</li>
				{/each}
			</ul>
			{#if media.production_companies}
				<h2>Studios</h2>
				<ul class="studios__list">
					{#each media.production_companies as studio}
						<li>{studio}</li>
					{/each}
				</ul>
			{/if}
			{#if media.platforms_links}
				<h2>Watch On</h2>
				<ul class="platforms__list">
					{#each media.platforms_links as platforms_links}
						<li class="clickable"><a href={platforms_links.link_url}>{platforms_links.name}</a></li>
					{/each}
				</ul>
			{/if}
			{#if media.runtime}
			<h2>Duration</h2>
			<ul class="platforms__list">
				<li>{media.runtime / 60} min</li>
			</ul>
			{/if}

			<div class="footer">
				{#if media.release_date}
				<div class="release__year">
					<h3>Release Year</h3>
					<p>{media.release_date.split('-')[0]}</p>
				</div>
				{/if}
				{#if media.status}
				<div class="status">
					<h3>Status</h3>
					<p>{media.status}</p>
				</div>
				{/if}
				{#if media.seasons_number}
				<div class="seasons">
					<h3>Seasons</h3>
					<p>{media.seasons_number}</p>
				</div>
				{/if}
			</div>
		</div>
	</div>
</button>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100..700;1,100..700&display=swap');
	button {
		position: fixed;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;

		background: rgba(25, 25, 25, 0.25);
		backdrop-filter: blur(5px);
		border: none;
		outline: none;
		z-index: -100;

		transition:
			background-color 0.2s ease,
			backdrop-filter 0.2s ease;

		padding: 20vh 10vw;

      opacity: 0;

      transition: opacity 0.2s ease, z-index 0.2s ease;
	}

   .visible {
      opacity: 1;
      z-index: 100;
   }

   .visible > .popup {
      transform: translateY(0);
   }

	.popup {
		display: flex;
		background: linear-gradient(60deg, var(--color-dark-low) 70%, var(--color-dark-mid) 100%);
		border-radius: 20px;
      
      transform: translateY(400px);
      transition: transform 0.2s ease;
	}

	.popup > img {
		height: 60vh;
	}

	.popup__info {
		gap: 5px;

		width: 100%;
		padding: 20px 40px;
		text-align: left;
	}

	.title__options {
		display: flex;
		justify-content: flex-end;

		height: 40px;
	}

	.title__row {
		display: flex;
		justify-content: space-between;
	}

	.description {
		padding: 5px 15px;
		margin-bottom: 10px;
	}

	.footer {
		display: flex;
		gap: 60px;
		margin-top: 20px;
		text-align: center;
	}

	ul {
		display: flex;
		flex-wrap: wrap;
		gap: 10px;
		padding: 5px 15px;
		list-style-type: none;
	}

	li {
		background: var(--color-dark-mid);
		padding: 5px 25px;
		border-radius: 5px;
		transition: background-color 0.2s ease;
	}

	.clickable:hover {
		background: var(--color-dark-high);
	}

	h1 {
		font-family: var(--font-expletus-sans);
		font-size: 36px;
	}

	h2 {
		font-family: 'Josefin Sans', sans-serif;
		font-size: 28px;
		font-weight: 600;
	}

	h3 {
		font-family: var(--font-expletus-sans);
		font-size: 22px;
	}

	li {
		font-family: var(--font-vend-sans);
	}

	a {
		text-decoration: none;
	}

	p {
		font-family: var(--font-vend-sans);
	}

	img {
		height: 100%;
		border-radius: 15px;
	}

	@media screen and (max-width: 1250px) {
		.popup {
			flex-direction: column;
		}

		.popup > img {
			object-fit: cover;
			height: 30vh;
		}
	}

	@media screen and (max-width: 600px) {
		button {
			padding: 0;
		}

		.popup__info {
			display: flex;
			flex-direction: column;
			align-items: center;
			text-align: center;
		}
	}
</style>
