<script>
    import DetailHeader from '../components/Detail/DetailHeader/DetailHeader.svelte';
    import DetailNoContent from '../components/Detail/DetailNoContent/DetailNoContent.svelte';
    import DetailNav from '../components/Detail/DetailNav/DetailNav.svelte';
    import DetailContent from '../components/Detail/DetailContent/DetailContent.svelte';

    const historyData = [
        {
            id: 1,
            word: 'kalem',
            type: 1, // Sözcük
        },
        {
            id: 2,
            word: 'gül',
            type: 1,
        },
        {
            id: 3,
            word: 'kalemiyle yaşamak (veya geçinmek)',
            type: 2, // Atasözleri & Deyimler
        },
        {
            id: 4,
            word: 'kalemine dolamak',
            type: 2,
        },
        {
            id: 5,
            word: 'kalem savaşçısı',
            type: 3, // Birleşik Kelimeler
        },
        {
            id: 6,
            word: 'kalem erbabı',
            type: 3,
        },
    ];

    let filtered = historyData.filter((data) => data.type === 1);

    function filterHistoryData(event) {
        filtered = historyData.filter((data) => data.type === event.detail);
    }
</script>

<style>
    .history {
        display: flex;
        flex-direction: column;
        flex: 1;
    }
</style>

<DetailHeader title="Geçmiş" />
<main class="history">
    {#if !historyData.length}
        <DetailNoContent
            icon="tdk-icon-history"
            noContentText="Henüz geçmiş yok." />
    {:else}
        <DetailNav on:filter={filterHistoryData} />
        <DetailContent detailData={filtered} />
    {/if}
</main>
