<script>
    import { onMount } from 'svelte';
    import { history } from '../stores';
    import DetailHeader from '../components/Detail/DetailHeader/DetailHeader.svelte';
    import DetailNav from '../components/Detail/DetailNav/DetailNav.svelte';
    import DetailTop from '../components/Detail/DetailTop/DetailTop.svelte';

    export let data = [];
    export let word = '';

    onMount(() => {
        history.addHistoryItem({
            id: 7,
            word: 'cemaat',
            type: 1, // Sözcük
        });
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
