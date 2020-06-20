<script>
    import DetailContentItem from '../DetailContentItem/DetailContentItem.svelte';

    export let detailData = [];
    export let title = '';
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
        {#each detailData as data (data.id)}
            <DetailContentItem {data} />
        {/each}
    </ul>
</div>
