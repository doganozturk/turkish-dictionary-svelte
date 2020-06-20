<script>
    import DetailContent from '../../Detail/DetailContent/DetailContent.svelte';

    const recentSearches = [
        {
            id: 1,
            word: 'kalem',
            type: 1,
        },
        {
            id: 9,
            word: 'feyz',
            type: 1,
        },
        {
            id: 5,
            word: 'kalem savaşçısı',
            type: 3,
        },
    ];
</script>

<div class="search-recent">
    <DetailContent detailData={recentSearches} title="SON ARAMALAR" />
</div>
