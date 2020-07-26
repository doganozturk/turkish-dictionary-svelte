<script lang="ts">
    import DetailFeature from '../components/Detail/DetailFeature/DetailFeature.svelte';
    import DetailNoContent from '../components/Detail/DetailFeature/DetailNoContent/DetailNoContent.svelte';
    import { FeatureDataItem } from '../models';

    const favoriteData: FeatureDataItem[] = [
        new FeatureDataItem(1, 'kalem', 1),
        new FeatureDataItem(2, 'gül', 1),
        new FeatureDataItem(7, 'selam', 1),
        new FeatureDataItem(8, 'rüzgar', 1),
        new FeatureDataItem(9, 'feyz', 1),
    ];
</script>

<DetailFeature data={favoriteData} headerTitle="Favoriler">
    <DetailNoContent icon="tdk-icon-fav" noContentText="Henüz favori yok." />
</DetailFeature>
