<script lang="ts">
    import { history } from '../stores';
    import DetailFeature from '../components/Detail/DetailFeature/DetailFeature.svelte';
    import DetailNoContent from '../components/Detail/DetailNoContent/DetailNoContent.svelte';
</script>

<DetailFeature
    data={$history.history}
    headerTitle="Geçmiş"
    deleteAllSelectedDataHandler={history.removeHistoryItem}>
    <DetailNoContent
        icon="tdk-icon-history"
        noContentText="Henüz geçmiş yok." />
</DetailFeature>
