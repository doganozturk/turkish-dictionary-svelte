<script lang="ts">
    import NavLink from '../../UI/NavLink/NavLink.svelte';
    import { wordType, Word } from '../../../models';

    export let word: Word;

    const typeTitleMapping = {
        [wordType.WORD]: 'Bir Kelime',
        [wordType.PROVERB]: 'Bir Deyim-Atasözü',
    };
</script>

<style>
    .home-item:not(:first-child) {
        margin-top: 50px;
    }

    .home-item h2 {
        padding-left: 10px;
        font-size: var(--font-size-xs);
        color: var(--text-paragraph-2);
    }

    .home-item__content {
        width: 100%;
        min-height: 72px;
        margin-top: 10px;
        padding: 13px;
        background-color: var(--white);
        border-radius: 6px;
    }

    .content__inner {
        padding-left: 15px;
        border-left: 3px solid var(--tdk-secondary-btn);
    }

    .inner__title {
        font-size: var(--font-size-lg);
        font-weight: bold;
        color: var(--text-heading);
    }

    .inner__desc {
        margin-top: 10px;
        font-size: var(--font-size-xs);
        line-height: 1.3;
        color: var(--text-paragraph);
    }
</style>

<div class="home-item">
    <NavLink to="{word.getDetailUrl()}">
        <h2>{typeTitleMapping[word.type]}</h2>
        <div class="home-item__content">
            <div class="content__inner">
                <h3 class="inner__title">{word.word}</h3>
                <p class="inner__desc">{word.description}</p>
            </div>
        </div>
    </NavLink>
</div>
