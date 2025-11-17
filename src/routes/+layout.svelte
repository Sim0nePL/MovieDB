<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Movie DB - Świat Filmów</title>
</svelte:head>

{@render children()}

<style>
	:global {
		@import url('https://fonts.googleapis.com/css2?family=Expletus+Sans:ital,wght@0,400..700;1,400..700&display=swap');
		@import url('https://fonts.googleapis.com/css2?family=Vend+Sans:ital,wght@0,300..700;1,300..700&display=swap');

		:root {
			--color-white: #e3e3e3;
			--color-primary: #e87d2c;
			--color-primary-dim: #cd8233;
			--color-background: #915f28;
			--color-dark-high: #2f2f2f;
			--color-dark-mid: #262626;
			--color-dark-low: #1b1b1b;

			--font-expletus-sans: 'Expletus Sans', sans-serif;
			--font-vend-sans: 'Vend Sans', sans-serif;
		}

		* {
			box-sizing: border-box;
			margin: 0;

			color: var(--color-white);
		}

		body {
			width: 100vw;
			min-height: 100vh;
			background: linear-gradient(150deg, var(--color-dark-low) 20%, var(--color-background) 100%);
			padding: 20px 100px;
		}

		span {
			color: var(--color-primary);
		}

		@media screen and (max-width: 635px) {
			body {
				padding: 20px 40px;
			}
		}
	}
</style>
