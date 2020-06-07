<script>
    import DetailHeader from '../components/Detail/DetailHeader/DetailHeader.svelte';
    import DetailNoContent from '../components/Detail/DetailNoContent/DetailNoContent.svelte';
    import DetailNav from '../components/Detail/DetailNav/DetailNav.svelte';
    import DetailContent from '../components/Detail/DetailContent/DetailContent.svelte';

    const favoriteData = [
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
            id: 7,
            word: 'selam',
            type: 1,
        },
        {
            id: 8,
            word: 'rüzgar',
            type: 1,
        },
        {
            id: 9,
            word: 'feyz',
            type: 1,
        },
    ];

    let filtered = favoriteData.filter((data) => data.type === 1);

    function filterFavoriteData(event) {
        filtered = favoriteData.filter((data) => data.type === event.detail);
    }
</script>

<style>
    .favorites {
        display: flex;
        flex-direction: column;
        flex: 1;
    }
</style>

<DetailHeader title="Favoriler" />
<main class="favorites">
    {#if !favoriteData.length}
        <DetailNoContent
            icon="tdk-icon-fav"
            noContentText="Henüz favori yok." />
    {:else}
        <DetailNav on:filter={filterFavoriteData} />
        <DetailContent detailData={filtered} />
    {/if}
</main>
