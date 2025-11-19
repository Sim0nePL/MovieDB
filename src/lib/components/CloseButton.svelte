<script lang="ts">
	import CloseIcon from '$lib/assets/icons8-close-48.png';
   
   let { onclick } = $props();
</script>

<button {onclick}>
   <img src={CloseIcon} alt="Close" width="40" height="40"/>
</button>

<style>
   button {
		background: none;
		border: none;
		outline: none;
		padding: 0;
	}
</style>