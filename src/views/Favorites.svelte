<script>
    import DetailFeature from '../components/Detail/DetailFeature/DetailFeature.svelte';
    import DetailNoContent from '../components/Detail/DetailFeature/DetailNoContent/DetailNoContent.svelte';

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
</script>

<DetailFeature data={favoriteData} headerTitle="Favoriler">
    <DetailNoContent icon="tdk-icon-fav" noContentText="Henüz favori yok." />
</DetailFeature>
