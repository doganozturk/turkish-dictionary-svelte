<script>
    import { search } from '../../../../stores';
    import DetailContent from '../../../Detail/DetailFeature/DetailContent/DetailContent.svelte';
</script>

<div class="search-recent">
    <DetailContent
        detailData={$search.searchRecents}
        title="SON ARAMALAR"
        type="search" />
</div>
