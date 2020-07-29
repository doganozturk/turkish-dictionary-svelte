<script lang="ts">
    import { onMount } from 'svelte';
    import { history } from '../stores';
    import { Word, WordType } from '../models';
    import { contentService } from '../services';
    import DetailHeader from '../components/Detail/DetailHeader/DetailHeader.svelte';
    import DetailNav from '../components/Detail/DetailNav/DetailNav.svelte';
    import DetailTop from '../components/Detail/DetailTop/DetailTop.svelte';

    export let word = '';

    onMount(async () => {
        const [detailResponse, gtsResponse] = await Promise.allSettled([
            contentService.getWordDetail(word),
            contentService.getGts(word),
        ]);

        // @TODO: This needs proper error handling.

        console.log('detailResponse', detailResponse);
        console.log('gtsResponse', gtsResponse);

        history.addHistoryItem(new Word(word, WordType.WORD));
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
