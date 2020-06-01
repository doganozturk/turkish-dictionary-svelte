<script>
    import DetailContentItem from '../DetailContentItem/DetailContentItem.svelte';

    export let detailData = [];
</script>

<style>
    .detail-content {
        padding: 24px 16px 0 16px;
    }
</style>

<div class="detail-content">
    <ul>
        {#each detailData as data (data.id)}
            <DetailContentItem {data} />
        {/each}
    </ul>
</div>
