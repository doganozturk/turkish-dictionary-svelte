<script lang="ts">
    import { fade } from 'svelte/transition';
    import Icon from '../Icon/Icon.svelte';

    export let text = '';
    export let icon = '';
</script>

<style>
    .snackbar-container {
        position: fixed;
        top: 0;
        left: 0;
        display: flex;
        align-items: flex-end;
        justify-content: center;
        width: 100%;
        height: 100%;
        z-index: var(--zindex-overlay);
        pointer-events: none;
    }

    .snackbar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: auto;
        height: 48px;
        margin-bottom: 100px;
        padding: 14px 12px;
        border-radius: 6px;
        background: var(--text-paragraph);
        box-shadow: 0 4px 12px rgba(72, 81, 91, 0.16);
        z-index: var(--zindex-modal);
    }

    .snackbar__text {
        margin-left: 8px;
        font-size: var(--font-size-xs);
        font-weight: bold;
        color: var(--white);
    }
</style>

<div class="snackbar-container" transition:fade="{{ duration: 500 }}">
    <div class="snackbar">
        <Icon name="{icon}" color="var(--white)" />
        <span class="snackbar__text">{text}</span>
    </div>
</div>
