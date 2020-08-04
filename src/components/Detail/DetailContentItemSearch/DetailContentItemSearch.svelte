<script lang="ts">
    import { search } from '../../../stores';
    import { Word } from '../../../models';

    export let data: Word = null;

    function handleClick(word: string) {
        search.set('searchTerm', word);
        search.fetchResults();
    }
</script>

<style>
    .detail-content-item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        min-height: 54px;
        padding: 16px;
        background-color: var(--white);
        border-radius: 6px;
    }

    .detail-content-item + .detail-content-item {
        margin-top: 12px;
    }

    .detail-content-item__word {
        max-width: 230px;
        font-size: var(--font-size-md);
        font-weight: bold;
        line-height: 26px;
    }
</style>

<li class="detail-content-item" on:click={() => handleClick(data.word)}>
    <span class="detail-content-item__word">{data.word}</span>
</li>
