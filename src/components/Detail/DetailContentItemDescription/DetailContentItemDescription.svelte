<script lang="ts">
    // @TODO: This data should be shown better. There are a lot of different cases.

    import type { Word } from '../../../models';

    export let data: Word = null;

    console.log(data);

    // @TODO: This should be looked at?
    const order = data?.detail?.anlam_sira || '';
    const type = data?.detail?.ozelliklerListe?.[0]?.tam_adi || '';
    const example = data?.detail?.orneklerListe?.[0]?.ornek || '';
    const author =
        data?.detail?.orneklerListe?.[0]?.yazar?.[0]?.kisa_adi ||
        data?.detail?.orneklerListe?.[0]?.yazar?.[0]?.tam_adi ||
        '';
</script>

<style>
    .detail-content-item {
        background-color: var(--white);
        border-bottom: 1px solid #eef0f2;
        padding-bottom: 20px;
    }
    .detail-content-item:not(:first-child) {
        padding-top: 20px;
    }
    .detail-content-item:last-child {
        padding-bottom: 0;
        border: none;
    }

    .detail-content-item__top .top__order {
        font-size: var(--font-size-sm);
        color: var(--text-paragraph-2);
    }
    .detail-content-item__top .top__type {
        font-size: var(--font-size-xs);
        font-style: italic;
        color: var(--tdk-main);
        text-transform: uppercase;
    }

    .detail-content-item__middle {
        margin-top: 12px;
        padding-left: 12px;
    }
    .detail-content-item__middle .middle__word {
        font-size: var(--font-size-sm);
        font-weight: bold;
        color: var(--text-heading);
    }

    .detail-content-item__bottom {
        margin-top: 12px;
        padding-left: 22px;
    }
    .detail-content-item__bottom .bottom__example {
        font-size: var(--font-size-sm);
        color: var(--text-paragraph-2);
    }
</style>

<li class="detail-content-item">
    <div class="detail-content-item__top">
        <span class="top__order">{order}</span>
        <span class="top__type">{type}</span>
    </div>
    <div class="detail-content-item__middle">
        <span class="middle__word">{data.word}</span>
    </div>
    <div class="detail-content-item__bottom">
        <span class="bottom__example">
            "{example}"
            {author ? `- ${author}` : ''}
        </span>
    </div>
</li>
