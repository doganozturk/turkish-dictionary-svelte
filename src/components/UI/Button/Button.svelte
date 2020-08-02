<script lang="ts">
    export let bg = 'transparent';
    export let disabled = false;
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
    .button[disabled] {
        opacity: 0.5;
    }
</style>

<button class="button" style={`background-color: ${bg};`} on:click {disabled}>
    <slot />
    <slot name="text" />
</button>
