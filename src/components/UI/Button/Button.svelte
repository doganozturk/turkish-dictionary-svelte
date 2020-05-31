<script>
    export let bg = 'transparent';
</script>

<style>
    .button {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        padding: 0;
        border: none;
        background-color: transparent;
    }
</style>

<button class="button" style={`background-color: ${bg};`} on:click>
    <slot />
    <slot name="text" />
</button>
