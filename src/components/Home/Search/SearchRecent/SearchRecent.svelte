<script lang="ts">
    import { search } from '../../../../stores';
    import DetailContent from '../../../Detail/DetailContent/DetailContent.svelte';
</script>

<style>
    .search-recent {
        position: relative;
        top: 128px;
        min-height: calc(100% - 128px);
    }
</style>

<div class="search-recent">
    <DetailContent
        detailData={$search.searchRecents}
        title="SON ARAMALAR"
        type="search" />
</div>
