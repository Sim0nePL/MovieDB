<script lang="ts">
	import type { Snippet } from "svelte";

   let { id, children, value = $bindable(), postfix } : {id?: string, children?: Snippet, value?: number | null, postfix?: string} = $props();
</script>

<div>
   <input id="{id}" type="number" bind:value={value}>
   <label for="{id}">
      {@render children?.()} {postfix}
   </label>
</div>

<style>
   div {
      padding: 10px 25px;

      background: var(--color-dark-mid);
      border-radius: 10px;
      cursor: pointer;

      transition: background-color 0.2s ease;
   }

   input, label {
      font-family: var(--font-vend-sans);
      font-size: 18px;

      outline: none;
      background: none;
      border: none;
   }

   input {
      width: 4ch;
      text-align: center;
   }

   input[type=number]::-webkit-inner-spin-button, 
   input[type=number]::-webkit-outer-spin-button,
   input[type=number] { 
      appearance: none; 
      -moz-appearance: textfield;
      margin: 0;
   }

</style>