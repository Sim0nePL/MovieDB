<script lang="ts">
	import Header from '../components/Header.svelte';
</script>

<Header></Header>
<main></main>

<style>
	:global {
		:root {
			--white: #e3e3e3;
			--primary: #9a2ed1;
			--primary-highlight: #7850dc;
			--primary-dim: #542689;
			--primary-background: #5a26a9;
			--dark-high: #2f2f2f;
			--dark-mid: #262626;
			--dark-low: #1b1b1b;
		}

		* {
			box-sizing: border-box;
			margin: 0;
            
            color: var(--white);
		}

		body {
			width: 100vw;
			min-height: 100vh;
			background: linear-gradient(131deg, var(--dark-low) 48%, var(--primary-background) 100%);
		}
	}
</style>
