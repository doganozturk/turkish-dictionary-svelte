<script lang="ts">
    // @TODO: 'DetailCompound' and 'DetailProverb' are nearly same.

    import { onMount } from 'svelte';
    import { history } from '../stores';
    import { Word, wordType } from '../models';
    import { contentService } from '../services';
    import DetailHeader from '../components/Detail/DetailHeader/DetailHeader.svelte';
    import DetailTop from '../components/Detail/DetailTop/DetailTop.svelte';
    import DetailContent from '../components/Detail/DetailContent/DetailContent.svelte';

    export let word = '';

    let language = '';
    let soundCode = '';
    let data: Word[] = [];
    let selectedType = wordType.WORD;
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

        history.addHistoryItem(new Word(word, wordType.COMPOUND_WORD));
    });

    // @TODO: 'event' type?
    function filterData(event) {
        filtered = data.filter((d) => d.type === event.detail);
        selectedType = event.detail;
    }

    function createDetailData(gtsResponse) {
        const detailData = [];

        gtsResponse?.value?.data?.[0]?.anlamlarListe?.forEach((anlam) => {
            detailData.push(new Word(word, wordType.WORD, anlam.anlam, anlam));
        });

        gtsResponse?.value?.data?.[0]?.atasozu?.forEach((atasozu) => {
            detailData.push(
                new Word(
                    atasozu.on_taki
                        ? atasozu.on_taki + ' '
                        : '' + atasozu.madde,
                    wordType.PROVERB,
                ),
            );
        });

        gtsResponse?.value?.data?.[0]?.birlesikler
            ?.split(', ')
            .forEach((birlesik) => {
                detailData.push(new Word(birlesik, wordType.COMPOUND_WORD));
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

<DetailHeader title="{word}" type="compound" />
<main class="detail">
    <DetailTop
        title="{word}"
        language="{language}"
        soundCode="{soundCode}"
        type="compound"
    />
    <DetailContent
        detailData="{filtered}"
        type="{selectedType === wordType.WORD ? 'description' : 'navigate'}"
    />
</main>
