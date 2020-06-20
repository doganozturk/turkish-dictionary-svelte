<script>
    import SearchResultsItem from '../SearchResultsItem/SearchResultsItem.svelte';

    export let results = [];
    export let searchTerm = '';
</script>

<style>
    .search-results {
        height: 100%;
        padding: 16px;
        background-color: var(--white);
    }
</style>

<ul class="search-results">
    {#each results as result (result)}
        <SearchResultsItem data={result} {searchTerm} />
    {/each}
</ul>
