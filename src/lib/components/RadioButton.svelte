<script lang="ts">
   let { id, name, value, group = $bindable(), children } = $props();
</script>

<div>
   <input {id} {name} type="radio" value="{value}" bind:group={group} hidden>
   <label for="{id}"> {@render children?.() } </label>
</div>

<style>
   label {
      display: inline-block;
      padding: 10px 25px;

      background: var(--color-dark-mid);
      border-radius: 10px;
      cursor: pointer;

      font-family: var(--font-vend-sans);
      font-size: 18px;
      user-select: none;

      transition: background-color 0.2s ease;
   }

   input[type="radio"]:checked + label {
      background-color: var(--color-primary);
      box-shadow: inset 0px -4px 8px 0px rgba(25, 25, 25, 0.75);
   }
</style>