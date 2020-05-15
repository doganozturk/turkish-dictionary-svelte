<script>
    export let redBg = false;
</script>

<button class:red-bg={redBg}>
    <slot />
    <slot name="text" />
</button>

<style>
    button {
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

    button.red-bg {
        background-color: var(--tdk-main);
    }
</style>
