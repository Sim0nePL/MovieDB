<script lang="ts">
	import type { Snippet } from 'svelte';

	let { children, activated = $bindable() }: { children: Snippet, activated?: boolean | number | null } = $props();
</script>

<p class={activated ? 'activated' : ''}>{@render children()}</p>

<style>
	p {
		display: inline-block;
		padding: 10px 25px;

		background-color: var(--color-dark-mid);
		border-radius: 10px;
		cursor: pointer;

		font-family: var(--font-vend-sans);
		font-size: 18px;
		user-select: none;

		transition: background-color 0.2s ease;
	}

	.activated {
		background-color: var(--color-primary);
      box-shadow: inset 0px -4px 8px 0px rgba(25, 25, 25, 0.75);
	}
</style>
