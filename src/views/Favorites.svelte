<script lang="ts">
    import DetailFeature from '../components/Detail/DetailFeature/DetailFeature.svelte';
    import DetailNoContent from '../components/Detail/DetailFeature/DetailNoContent/DetailNoContent.svelte';
    import { Word, WordType } from '../models';

    const favoriteData: Word[] = [
        new Word('kalem', WordType.WORD),
        new Word('gül', WordType.WORD),
        new Word('selam', WordType.WORD),
        new Word('rüzgar', WordType.WORD),
        new Word('feyz', WordType.WORD),
    ];
</script>

<DetailFeature data={favoriteData} headerTitle="Favoriler">
    <DetailNoContent icon="tdk-icon-fav" noContentText="Henüz favori yok." />
</DetailFeature>
