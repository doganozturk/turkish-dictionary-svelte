<script>
    import { search } from '../../../stores';
    import SearchResultsItem from '../SearchResultsItem/SearchResultsItem.svelte';
</script>

<style>
    .search-results {
        height: 100%;
        padding: 16px;
        background-color: var(--white);
    }
</style>

<ul class="search-results">
    {#each $search.searchResults as result (result)}
        <SearchResultsItem data={result} />
    {/each}
</ul>
