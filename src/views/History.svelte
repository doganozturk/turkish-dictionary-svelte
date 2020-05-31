<script>
    import DetailHeader from '../components/Detail/DetailHeader/DetailHeader.svelte';
    import DetailNoContent from '../components/Detail/DetailNoContent/DetailNoContent.svelte';

    const historyData = [];
</script>

<style>
    .history {
        display: flex;
        justify-content: center;
        flex: 1;
    }
</style>

<DetailHeader title="Geçmiş" />
<main class="history">
    {#if !historyData.length}
        <DetailNoContent
            icon="tdk-icon-history"
            noContentText="Henüz geçmiş yok." />
    {/if}
</main>
