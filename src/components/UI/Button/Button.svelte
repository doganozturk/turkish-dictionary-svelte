<script>
    export let bg = 'transparent';
</script>

<button class="button" style={`background-color: ${bg};`}>
    <slot />
    <slot name="text" />
</button>

<style>
    .button {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        padding: 0;
        border: none;
        border-radius: 50%;
        background-color: transparent;
    }
</style>
