<script>
    import Icon from '../../UI/Icon/Icon.svelte';

    export let data = '';
    export let searchTerm = '';

    $: word = makeSearchTermBold();

    function makeSearchTermBold() {
        const index = data.indexOf(searchTerm);

        if (index < 0) {
            return data;
        }

        const dataArr = data.split('');

        for (let i = index; i < index + searchTerm.length; i++) {
            dataArr[i] = `<strong>${dataArr[i]}</strong>`;
        }

        return dataArr.join('');
    }
</script>

<style>
    .search-results-item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        min-height: 84px;
        background-color: var(--white);
    }
    .search-results-item + .search-results-item {
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
    <span class="search-results-item__word">
        {@html word}
    </span>
    <span class="search-results-item__icon-chevron">
        <Icon name="tdk-icon-chevron-right" size={20} color="var(--tdk-main)" />
    </span>
</li>
