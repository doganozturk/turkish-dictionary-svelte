<script>
    import { onMount, onDestroy } from 'svelte';
    import { detailDeleteStore } from '../../../stores/detail-delete';
    import DetailHeader from '../../../components/Detail/DetailHeader/DetailHeader.svelte';
    import DetailNav from '../../../components/Detail/DetailNav/DetailNav.svelte';
    import DetailContent from '../../../components/Detail/DetailContent/DetailContent.svelte';
    import DetailDeleteModal from '../../../components/Detail/DetailDeleteModal/DetailDeleteModal.svelte';

    export let data = [];
    export let headerTitle = '';

    let unsubscribe;
    let dataIds = [];
    let selectedType = 1;

    onMount(() => {
        unsubscribe = detailDeleteStore.subscribe((ids) => {
            console.log('DETAIL_VIEW');
            console.log(ids);

            dataIds = ids;
        });
    });

    onDestroy(() => {
        unsubscribe();
    });

    $: filtered = data.filter((d) => d.type === selectedType);

    function filterData(event) {
        filtered = data.filter((d) => d.type === event.detail);
        selectedType = event.detail;
    }

    function deleteAllSelectedData() {
        console.log('DELETE_ALL_SELECTED_DATA');
        console.log(dataIds);

        data = data
            .map((d) => {
                if (dataIds.includes(d.id)) {
                    return false;
                }

                return d;
            })
            .filter((d) => d);

        detailDeleteStore.update(() => []);
    }

    function selectAllData() {
        dataIds = filtered.map((d) => d.id);

        detailDeleteStore.update(() => [...dataIds]);
    }

    function deselectAllData() {
        dataIds = [];

        detailDeleteStore.update(() => []);
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

    {#if dataIds.length}
        <DetailDeleteModal
            deleteSelectedHandler={deleteAllSelectedData}
            selectAllHandler={selectAllData}
            selectedCount={dataIds.length}
            on:modalClose={deselectAllData} />
    {/if}
</main>
