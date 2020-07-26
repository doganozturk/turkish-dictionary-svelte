<script lang="ts">
    import { onMount } from 'svelte';
    import { history } from '../stores';
    import { FeatureDataItem } from '../models';
    import DetailHeader from '../components/Detail/DetailHeader/DetailHeader.svelte';
    import DetailNav from '../components/Detail/DetailNav/DetailNav.svelte';
    import DetailTop from '../components/Detail/DetailTop/DetailTop.svelte';

    export let data: FeatureDataItem[] = [];
    export let word = '';

    onMount(() => {
        history.addHistoryItem(new FeatureDataItem(7, 'cemaat', 1));
    });
</script>

<style>
    .detail {
        display: flex;
        flex-direction: column;
        flex: 1;
    }
</style>

<DetailHeader title={word} />
<main class="detail">
    <DetailNav />
    <DetailTop title={word} />
</main>
