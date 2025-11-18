<script lang="ts">
   let { children } = $props();
</script>

<p> {@render children()} </p>


<style>
   p {
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
</style>