<script>
    import DetailHeader from '../components/Detail/DetailHeader/DetailHeader.svelte';
    import DetailNav from '../components/Detail/DetailNav/DetailNav.svelte';

    export let data = [];
    export let word = '';
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
</main>
