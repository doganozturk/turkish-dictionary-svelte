<script lang="ts">
    import DetailFeature from '../components/Detail/DetailFeature/DetailFeature.svelte';
    import DetailNoContent from '../components/Detail/DetailFeature/DetailNoContent/DetailNoContent.svelte';
    import { FeatureData } from '../models';

    const favoriteData: FeatureData[] = [
        new FeatureData(1, 'kalem', 1),
        new FeatureData(2, 'gül', 1),
        new FeatureData(7, 'selam', 1),
        new FeatureData(8, 'rüzgar', 1),
        new FeatureData(9, 'feyz', 1),
    ];
</script>

<DetailFeature data={favoriteData} headerTitle="Favoriler">
    <DetailNoContent icon="tdk-icon-fav" noContentText="Henüz favori yok." />
</DetailFeature>
