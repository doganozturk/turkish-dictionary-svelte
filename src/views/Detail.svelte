<script lang="ts">
    import { onMount } from 'svelte';
    import { history } from '../stores';
    import { FeatureData } from '../models';
    import DetailHeader from '../components/Detail/DetailHeader/DetailHeader.svelte';
    import DetailNav from '../components/Detail/DetailNav/DetailNav.svelte';
    import DetailTop from '../components/Detail/DetailTop/DetailTop.svelte';

    export let data: FeatureData[] = [];
    export let word = '';

    onMount(() => {
        history.addHistoryItem(new FeatureData(7, 'cemaat', 1));
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
