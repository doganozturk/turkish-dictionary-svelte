<script lang="ts">
    // @TODO: 'DetailCompound' and 'DetailProverb' are nearly same.

    import { onMount } from 'svelte';
    import { history } from '../stores';
    import { Word, WORD_TYPE } from '../models';
    import { contentService } from '../services';
    import DetailHeader from '../components/Detail/DetailHeader/DetailHeader.svelte';
    import DetailTop from '../components/Detail/DetailTop/DetailTop.svelte';
    import DetailContent from '../components/Detail/DetailContent/DetailContent.svelte';

    export let word = '';

    let language = '';
    let soundCode = '';
    let data: Word[] = [];
    let selectedType = WORD_TYPE.WORD;
    let filtered: Word[];

    $: {
        filtered = data.filter((d) => d.type === selectedType);
    }

    onMount(async () => {
        const [detailResponse, gtsResponse] = await Promise.allSettled([
            contentService.getWordDetail(word),
            contentService.getGts(word),
        ]);

        // @TODO: This needs proper error handling.

        console.log('detailResponse', detailResponse);
        console.log('gtsResponse', gtsResponse);

        language = gtsResponse?.value?.data?.[0]?.lisan;
        soundCode = detailResponse?.value?.data?.[0]?.seskod;
        data = createDetailData(gtsResponse);

        history.addHistoryItem(new Word(word, WORD_TYPE.WORD));
    });

    // @TODO: 'event' type?
    function filterData(event) {
        filtered = data.filter((d) => d.type === event.detail);
        selectedType = event.detail;
    }

    function createDetailData(gtsResponse) {
        const detailData = [];

        gtsResponse?.value?.data?.[0]?.anlamlarListe?.forEach((anlam) => {
            detailData.push({
                word: anlam.anlam,
                type: WORD_TYPE.WORD,
                detail: {
                    ...anlam,
                },
            });
        });

        gtsResponse?.value?.data?.[0]?.atasozu?.forEach((atasozu) => {
            detailData.push({
                word: atasozu.on_taki
                    ? atasozu.on_taki + ' '
                    : '' + atasozu.madde,
                type: WORD_TYPE.PROVERB,
            });
        });

        gtsResponse?.value?.data?.[0]?.birlesikler
            ?.split(', ')
            .forEach((birlesik) => {
                detailData.push({
                    word: birlesik,
                    type: WORD_TYPE.COMPOUND_WORD,
                });
            });

        return detailData;
    }
</script>

<style>
    .detail {
        display: flex;
        flex-direction: column;
        flex: 1;
        overflow-y: scroll;
        background-color: var(--birlesik-kelime-bg);
    }
</style>

<DetailHeader title={word} type="compound" />
<main class="detail">
    <DetailTop title={word} {language} {soundCode} type="compound" />
    <DetailContent
        detailData={filtered}
        type={selectedType === WORD_TYPE.WORD ? 'description' : 'navigate'} />
</main>
