<script lang="ts">
    import { ui } from '../../../stores';

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
        z-index: var(--zindex-overlay);
    }
</style>

<div class="overlay" on:click="{handleClick}"></div>
