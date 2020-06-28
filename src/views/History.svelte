<script>
    import DetailFeature from '../components/Detail/DetailFeature/DetailFeature.svelte';
    import DetailNoContent from '../components/Detail/DetailFeature/DetailNoContent/DetailNoContent.svelte';

    let historyData = [
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
</script>

<DetailFeature data={historyData} headerTitle="Geçmiş">
    <DetailNoContent
        icon="tdk-icon-history"
        noContentText="Henüz geçmiş yok." />
</DetailFeature>
