<script>
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();
    const data = ['ç', 'ğ', 'ı', 'ö', 'ş', 'ü', 'â', 'î', 'û'];
</script>

<style>
    .search-helper {
        display: flex;
        align-items: center;
        height: 48px;
        margin-top: 16px;
        background-color: #f0f0f0;
        overflow-x: scroll;
    }

    .search-helper__item {
        font-size: var(--font-size-sm);
        font-weight: bold;
        color: var(--text-paragraph);
    }
    .search-helper__item:first-child {
        padding-left: 19px;
    }
    .search-helper__item + .search-helper__item {
        margin-left: 32px;
    }
    .search-helper__item:last-child {
        padding-right: 16px;
    }
</style>

<div class="search-helper">
    {#each data as word (word)}
        <span
            class="search-helper__item"
            on:click={() => dispatch('helperWord', word)}>
            {word}
        </span>
    {/each}
</div>
