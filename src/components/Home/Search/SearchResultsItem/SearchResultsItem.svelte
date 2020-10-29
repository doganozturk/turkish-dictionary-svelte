<script lang="ts">
    import { search } from '../../../../stores';
    import Icon from '../../../UI/Icon/Icon.svelte';
    import NavLink from '../../../UI/NavLink/NavLink.svelte';

    export let data = '';

    function makeSearchTermBold(term: string): string {
        const index = data.indexOf(term);

        if (index < 0) {
            return data;
        }

        const dataArr = data.split('');

        for (let i = index; i < index + term.length; i++) {
            dataArr[i] = `<strong>${dataArr[i]}</strong>`;
        }

        return dataArr.join('');
    }
</script>

<style>
    .search-results-item {
        display: flex;
        align-items: center;
        min-height: 84px;
        background-color: var(--white);
    }
    :global(.search-results-item a) {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        height: 100%;
    }
    .search-results-item:not(:first-child) {
        border-top: 1px solid #eef0f2;
    }

    .search-results-item__word {
        max-width: 250px;
        font-size: var(--font-size-md);
        line-height: 26px;
        color: var(--text-heading);
    }
</style>

<li class="search-results-item">
    <NavLink to="{`/detay/${data}`}">
        <span class="search-results-item__word">
            {@html makeSearchTermBold($search.searchTerm)}
        </span>
        <span class="search-results-item__icon-chevron">
            <Icon
                name="tdk-icon-chevron-right"
                size="{20}"
                color="var(--tdk-main)"
            />
        </span>
    </NavLink>
</li>
