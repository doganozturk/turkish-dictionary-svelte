<script>
    import { onMount, onDestroy } from 'svelte';
    import { uiStore } from '../../../stores/ui';

    let unsubscribe;

    onMount(() => {
        unsubscribe = uiStore.subscribe(value => {
            console.log('OVERLAY_COMPONENT');
            console.log(value);
        });
    });

    onDestroy(() => {
        unsubscribe();
    });

    function handleClick() {
        uiStore.update(value => ({
            ...value,
            overlay: false,
            about: false,
        }))
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

<div class="overlay" on:click={handleClick}></div>
