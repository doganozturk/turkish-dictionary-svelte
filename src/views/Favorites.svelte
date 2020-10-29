<script lang="ts">
    import { favorite } from '../stores';
    import DetailFeature from '../components/Detail/DetailFeature/DetailFeature.svelte';
    import DetailNoContent from '../components/Detail/DetailNoContent/DetailNoContent.svelte';
</script>

<DetailFeature
    data="{$favorite.favorite}"
    headerTitle="Favoriler"
    deleteAllSelectedDataHandler="{favorite.removeFavoriteItem}"
>
    <DetailNoContent icon="tdk-icon-fav" noContentText="Henüz favori yok." />
</DetailFeature>
