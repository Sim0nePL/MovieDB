<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Button from '$lib/components/Button.svelte';
	import TextInput from '$lib/components/TextInput.svelte';

	import { onMount } from 'svelte';

	let searchValue = $state('');

	onMount(() => {
		const params = new URLSearchParams(location.search);
		searchValue = params.get('q') ?? '';
	});
</script>

<Header rightSide={false} />
<Button>{searchValue}</Button>
<TextInput bind:value={searchValue} placeholder="Witam Wszystkich"/>
