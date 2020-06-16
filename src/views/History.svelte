<script>
    import { onMount, onDestroy } from 'svelte';
    import { detailDeleteStore } from '../stores/detail-delete';
    import DetailHeader from '../components/Detail/DetailHeader/DetailHeader.svelte';
    import DetailNoContent from '../components/Detail/DetailNoContent/DetailNoContent.svelte';
    import DetailNav from '../components/Detail/DetailNav/DetailNav.svelte';
    import DetailContent from '../components/Detail/DetailContent/DetailContent.svelte';
    import DetailDeleteModal from '../components/Detail/DetailDeleteModal/DetailDeleteModal.svelte';

    let unsubscribe;
    let historyIds = [];
    let selectedType = 1;

    onMount(() => {
        unsubscribe = detailDeleteStore.subscribe((ids) => {
            console.log('HISTORY_VIEW');
            console.log(ids);

            historyIds = ids;
        });
    });

    onDestroy(() => {
        unsubscribe();
    });

    let historyData = [
        {
            id: 1,
            word: 'kalem',
            type: 1, // Sözcük
        },
        {
            id: 2,
            word: 'gül',
            type: 1,
        },
        {
            id: 3,
            word: 'kalemiyle yaşamak (veya geçinmek)',
            type: 2, // Atasözleri & Deyimler
        },
        {
            id: 4,
            word: 'kalemine dolamak',
            type: 2,
        },
        {
            id: 5,
            word: 'kalem savaşçısı',
            type: 3, // Birleşik Kelimeler
        },
        {
            id: 6,
            word: 'kalem erbabı',
            type: 3,
        },
    ];

    $: filtered = historyData.filter((data) => data.type === selectedType);

    function filterHistoryData(event) {
        filtered = historyData.filter((data) => data.type === event.detail);
        selectedType = event.detail;
    }

    function deleteAllSelectedHistoryData() {
        console.log('DELETE_ALL_SELECTED_HISTORY_DATA');
        console.log(historyIds);

        historyData = historyData
            .map((data) => {
                if (historyIds.includes(data.id)) {
                    return false;
                }

                return data;
            })
            .filter((data) => data);

        detailDeleteStore.update(() => []);
    }

    function selectAllHistoryData() {
        historyIds = filtered.map((item) => item.id);

        detailDeleteStore.update(() => [...historyIds]);
    }

    function deselectAllHistoryData() {
        historyIds = [];

        detailDeleteStore.update(() => []);
    }
</script>

<style>
    .history {
        display: flex;
        flex-direction: column;
        flex: 1;
    }
</style>

<DetailHeader title="Geçmiş" />
<main class="history">
    {#if !historyData.length}
        <DetailNoContent
            icon="tdk-icon-history"
            noContentText="Henüz geçmiş yok." />
    {:else}
        <DetailNav on:filter={filterHistoryData} />
        <DetailContent detailData={filtered} />
    {/if}

    {#if historyIds.length}
        <DetailDeleteModal
            deleteSelectedHandler={deleteAllSelectedHistoryData}
            selectAllHandler={selectAllHistoryData}
            selectedCount={historyIds.length}
            on:modalClose={deselectAllHistoryData} />
    {/if}
</main>
