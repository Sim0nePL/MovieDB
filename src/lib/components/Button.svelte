<script lang="ts">
	import type { Snippet } from "svelte";
	import type { MouseEventHandler } from "svelte/elements";

   let { id, children, onclick, ...props } : { id? : string, children : Snippet, onclick? : MouseEventHandler<HTMLButtonElement> } = $props();

</script>

<button {id} {...props} {onclick}>
   {@render children()}
</button>

<style>
   button {
      padding: 5px 50px;
      background-color: var(--color-dark-mid);
      border: 2px solid var(--color-dark-high);
      border-radius: 10px;
      outline: none;

      font-family: var(--font-vend-sans);
      font-size: 20px;
      cursor: pointer;

      transition: background-color 0.15s ease, border 0.15s ease;
   }

   button:hover {
      background-color: var(--color-dark-high);
		border-color: var(--color-primary-dim);
   }

</style>