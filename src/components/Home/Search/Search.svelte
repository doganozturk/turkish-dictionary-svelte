<script>
    import { createEventDispatcher } from 'svelte';
    import Icon from '../../UI/Icon/Icon.svelte';
    import Button from '../../UI/Button/Button.svelte';
    import SearchHelper from '../SearchHelper/SearchHelper.svelte';
    import SearchRecent from '../SearchRecent/SearchRecent.svelte';

    const dispatch = createEventDispatcher();

    let searchMode = false;
    let searchTerm = '';

    function handleToggleSearchMode(isActive) {
        searchMode = isActive;

        if (!isActive) {
            searchTerm = '';
        }

        dispatch('toggleSearchMode', isActive);
    }

    function handleInputDelete() {
        searchTerm = '';
    }

    function handleHelperWordAdded({ detail }) {
        searchTerm += detail;
    }
</script>

<style>
    .search {
        position: relative;
        width: 100%;
        height: 52px;
    }
    .search.search--active {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 48px;
        padding-left: 16px;
        padding-right: 16px;
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
        border: 1px solid #f3a5b1;
        box-shadow: 0 2px 4px rgba(207, 28, 55, 0.16);
    }

    .search-icon {
        position: absolute;
        top: 15px;
        left: 15px;
    }

    .close-icon {
        position: absolute;
        top: 15px;
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
</style>

<div class="search" class:search--active={searchMode}>
    {#if searchMode}
        <div class="close-icon" on:click={handleInputDelete}>
            <Icon name="tdk-icon-close" size={18} />
        </div>
    {:else}
        <div class="search-icon">
            <Icon name="tdk-icon-search" />
        </div>
    {/if}

    <input
        type="text"
        bind:value={searchTerm}
        placeholder={searchMode ? '' : "Türkçe Sözlük'te Ara"}
        on:focus={() => handleToggleSearchMode(true)}
        on:blur={searchMode ? () => {} : () => handleToggleSearchMode(false)} />
    {#if searchMode}
        <div class="search__cancel">
            <Button on:click={() => handleToggleSearchMode(false)}>
                <span slot="text" class="cancel__text">Vazgeç</span>
            </Button>
        </div>
    {/if}
</div>

{#if searchMode}
    <SearchHelper on:helperWord={handleHelperWordAdded} />
    <SearchRecent />
{/if}
