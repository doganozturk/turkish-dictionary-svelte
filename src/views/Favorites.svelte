<script>
    import DetailHeader from '../components/Detail/DetailHeader/DetailHeader.svelte';
    import DetailNoContent from '../components/Detail/DetailNoContent/DetailNoContent.svelte';

    const favoriteData = [];
</script>

<style>
    .favorites {
        display: flex;
        justify-content: center;
        flex: 1;
    }
</style>

<DetailHeader title="Favoriler" />
<main class="favorites">
    {#if !favoriteData.length}
        <DetailNoContent
            icon="tdk-icon-fav"
            noContentText="Henüz favori yok." />
    {/if}
</main>
