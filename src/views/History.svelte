<script>
    import { history } from '../stores';
    import DetailFeature from '../components/Detail/DetailFeature/DetailFeature.svelte';
    import DetailNoContent from '../components/Detail/DetailFeature/DetailNoContent/DetailNoContent.svelte';
</script>

<DetailFeature data={$history.history} headerTitle="Geçmiş">
    <DetailNoContent
        icon="tdk-icon-history"
        noContentText="Henüz geçmiş yok." />
</DetailFeature>
