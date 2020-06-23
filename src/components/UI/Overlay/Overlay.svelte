<script>
    import { onMount, onDestroy } from 'svelte';
    import { ui } from '../../../stores';

    let unsubscribe;

    onMount(() => {
        unsubscribe = ui.subscribe((state) => {
            console.log('OVERLAY_COMPONENT');
            console.log(state);
        });
    });

    onDestroy(() => {
        unsubscribe();
    });

    function handleClick() {
        ui.reset();
    }
</script>

<style>
    .overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: var(--black);
        opacity: 0.7;
        z-index: 2;
    }
</style>

<div class="overlay" on:click={handleClick} />
