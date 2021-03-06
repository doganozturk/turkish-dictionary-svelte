<script lang="ts">
    import debounce from 'lodash-es/debounce';
    import { search } from '../../../stores';
    import { autocompleteService } from '../../../services';
    import Icon from '../../UI/Icon/Icon.svelte';
    import Button from '../../UI/Button/Button.svelte';
    import SearchHelper from './SearchHelper/SearchHelper.svelte';
    import SearchRecent from './SearchRecent/SearchRecent.svelte';
    import SearchResults from './SearchResults/SearchResults.svelte';
    import DetailNoContent from '../../Detail/DetailNoContent/DetailNoContent.svelte';

    function handleToggleSearchMode(isActive: boolean): void {
        search.set('searchMode', isActive);

        if (!isActive) {
            search.set('searchTerm', '');
            search.set('searchResults', []);

            return;
        }

        if (!$search.autocompleteData[0]) {
            const data = autocompleteService.getAutocompleteData();

            search.set('autocompleteData', data);
        }
    }

    function handleInputDelete() {
        search.set('searchTerm', '');
        search.set('searchResults', []);
    }
</script>

<style>
    .search {
        position: relative;
        width: 100%;
        height: 52px;
    }
    .search.search--active {
        position: fixed;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        height: 80px;
        padding: 16px;
        background-color: var(--tdk-page-bg);
        z-index: var(--zindex-normal);
    }

    .search input {
        width: 100%;
        height: 100%;
        padding: 10px 10px 10px 50px;
        color: var(--text-paragraph);
        font-size: var(--font-size-sm);
        background: var(--white);
        border: 1px solid transparent;
        border-radius: 8px;
        box-shadow: 0 4px 24px rgba(0, 0, 0, 0.1);
    }
    .search.search--active input {
        padding-left: 16px;
        color: var(--text-heading);
        font-weight: bold;
        border: 1px solid #d1d1d1;
        box-shadow: 0 2px 4px rgba(91, 91, 91, 0.16);
        transition: border-color 200ms;
    }
    .search.search--active input:focus {
        border-color: #f3a5b1;
        box-shadow: 0 2px 4px rgba(207, 28, 55, 0.16);
    }

    .search-icon {
        position: absolute;
        top: 15px;
        left: 15px;
    }

    .close-icon {
        position: absolute;
        top: 30px;
        right: 86px;
    }

    .search__cancel {
        width: 50px;
        margin-left: 14px;
    }

    .cancel__text {
        font-size: var(--font-size-sm);
        color: var(--text-heading);
    }

    .search-no-result {
        display: flex;
        height: 100%;
        background-color: var(--white);
    }
</style>

<div class="search" class:search--active="{$search.searchMode}">
    {#if $search.searchMode}
        <div class="close-icon" on:click="{handleInputDelete}">
            <Icon name="tdk-icon-close" size="{18}" />
        </div>
    {:else}
        <div class="search-icon">
            <Icon name="tdk-icon-search" />
        </div>
    {/if}

    <input
        type="text"
        autocapitalize="off"
        autocomplete="off"
        placeholder="{$search.searchMode ? '' : "Türkçe Sözlük'te Ara"}"
        bind:value="{$search.searchTerm}"
        on:keyup="{debounce(search.fetchResults, 750)}"
        on:focus="{() => handleToggleSearchMode(true)}"
        on:blur="{$search.searchMode ? () => {} : () => handleToggleSearchMode(false)}"
    />

    {#if $search.searchMode}
        <div class="search__cancel">
            <Button on:click="{() => handleToggleSearchMode(false)}">
                <span slot="text" class="cancel__text">Vazgeç</span>
            </Button>
        </div>
    {/if}
</div>

{#if $search.searchMode}
    <SearchHelper />

    {#if !$search.searchResults.length && !$search.searchTerm}
        <SearchRecent />
    {/if}

    {#if !$search.searchResults.length && $search.searchTerm}
        <div class="search-no-result">
            <DetailNoContent
                icon="tdk-icon-book"
                noContentText="Aradığınız sözcük bulunamadı."
            />
        </div>
    {/if}

    {#if $search.searchResults.length}
        <SearchResults />
    {/if}
{/if}
