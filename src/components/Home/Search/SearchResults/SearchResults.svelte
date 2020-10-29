<script lang="ts">
    import { search } from '../../../../stores';
    import SearchResultsItem from '../SearchResultsItem/SearchResultsItem.svelte';
</script>

<style>
    .search-results {
        position: relative;
        top: 128px;
        min-height: calc(100% - 128px);
        padding: 0 16px;
        background-color: var(--white);
    }
</style>

<ul class="search-results">
    {#each $search.searchResults as result, i (`${result}_${i}`)}
        <SearchResultsItem data="{result}" />
    {/each}
</ul>
