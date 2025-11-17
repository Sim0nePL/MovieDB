<script lang="ts">
	import searchIcon from '$lib/assets/icons8-search-64.png';

	let { id, value = $bindable(), ...props }: { id? : string, value?: string } = $props();
</script>

<div {id} class="textInput">
	<input bind:value={value} {...props} type="text" />
	<img src={searchIcon} alt="Search Icon" />
</div>

<style>
	div {
		position: relative;

		background-color: var(--color-dark-mid);
		border: 2px solid var(--color-dark-high);
		border-radius: 10px;
	}

	input {
		width: 100%;
		height: 100%;

		font-family: var(--font-vend-sans);
		font-size: 20px;

		background: none;
		border: none;
		outline: none;

		padding: 5px 20px;

		transition:
				background-color 0.15s ease,
				border 0.15s ease;
	}

	div:hover {
		background-color: var(--color-dark-high);
		border-color: var(--color-primary-dim);
	}

	img {
		position: absolute;
		right: 15px;
		top: 50%;
		transform: translateY(-50%);
		height: 70%;
	}
</style>
