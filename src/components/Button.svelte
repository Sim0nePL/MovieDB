<script lang="ts">
let {text} = $props();
</script>
<button>{text}</button>
<style>
    button
    {
        background: var(--dark-low);
        padding: 5px 40px;
        outline: none;
        border: 1px solid var(--primary) ;
        border-radius: 10px;
        font-size: 20px;
        margin-left: 10px;
    }
</style>