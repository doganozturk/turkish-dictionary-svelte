<script lang="ts">
    import { detailDelete } from '../../../stores';
    import { Word, WordType } from '../../../models';
    import DetailHeader from '../DetailHeader/DetailHeader.svelte';
    import DetailNav from '../DetailNav/DetailNav.svelte';
    import DetailContent from './DetailContent/DetailContent.svelte';
    import DetailDeleteModal from './DetailDeleteModal/DetailDeleteModal.svelte';

    export let data: Word[] = [];
    export let headerTitle = '';
    export let deleteAllSelectedDataHandler = () => {};

    let selectedType = WordType.WORD;

    $: filtered = data.filter((d) => d.type === selectedType);

    // @TODO: 'event' type?
    function filterData(event) {
        filtered = data.filter((d) => d.type === event.detail);
        selectedType = event.detail;
    }

    function deleteAllSelectedData() {
        data = data
            .map((d) => {
                if ($detailDelete.deletables.includes(d.word)) {
                    deleteAllSelectedDataHandler(d.word);

                    return false;
                }

                return d;
            })
            .filter((d) => d);

        detailDelete.reset();
    }

    function selectAllData() {
        detailDelete.set(
            'deletables',
            filtered.map((d) => d.word),
        );
    }

    function deselectAllData() {
        detailDelete.reset();
    }
</script>

<style>
    .detail-feature {
        display: flex;
        flex-direction: column;
        flex: 1;
    }
</style>

<DetailHeader title={headerTitle} />
<main class="detail-feature">
    {#if !data.length}
        <slot />
    {:else}
        <DetailNav on:filter={filterData} />
        <DetailContent detailData={filtered} />
    {/if}

    {#if $detailDelete.deletables.length}
        <DetailDeleteModal
            deleteSelectedHandler={deleteAllSelectedData}
            selectAllHandler={selectAllData}
            selectedCount={$detailDelete.deletables.length}
            on:modalClose={deselectAllData} />
    {/if}
</main>
