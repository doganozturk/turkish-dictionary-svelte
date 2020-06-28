<script>
    import DetailContentItemDeletable from '../DetailContentItemDeletable/DetailContentItemDeletable.svelte';
    import DetailContentItemSearch from '../DetailContentItemSearch/DetailContentItemSearch.svelte';

    export let type = 'deletable'; // 'deletable', 'search'
    export let detailData = [];
    export let title = '';

    const componentMapping = {
        deletable: DetailContentItemDeletable,
        search: DetailContentItemSearch,
    };
</script>

<style>
    .detail-content {
        padding: 24px 16px 0 16px;
    }

    .detail-content__title {
        font-size: var(--font-size-xs);
        color: var(--text-paragraph-2);
    }

    .detail-content__title + .detail-content__list {
        margin-top: 12px;
    }
</style>

<div class="detail-content">
    {#if title}
        <h1 class="detail-content__title">{title}</h1>
    {/if}
    <ul class="detail-content__list">
        {#each detailData as data (`${data.word}_${data.id}`)}
            <svelte:component this={componentMapping[type]} {data} />
        {/each}
    </ul>
</div>
