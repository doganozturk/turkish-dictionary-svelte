<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    import { detailDelete } from '../../../stores';
    import { WORD_TYPE } from '../../../models';

    const dispatch = createEventDispatcher();

    let navData: {
        type: WORD_TYPE;
        title: string;
        active: boolean;
    }[] = [
        {
            type: WORD_TYPE.WORD,
            title: 'Sözcük',
            active: true,
        },
        {
            type: WORD_TYPE.PROVERB,
            title: 'Atasözleri & Deyimler',
            active: false,
        },
        {
            type: WORD_TYPE.COMPOUND_WORD,
            title: 'Birleşik Kelimeler',
            active: false,
        },
    ];

    function handleNavItemClick(type: WORD_TYPE) {
        navData = navData.map((data) => {
            data.active = data.type === type;

            return data;
        });

        dispatch('filter', type);

        detailDelete.reset();
    }
</script>

<style>
    .detail-nav {
        display: flex;
        align-items: center;
        width: 100%;
        height: 38px;
        margin-top: 12px;
    }

    .nav__list {
        display: flex;
        align-items: center;
        width: 100%;
        padding-left: 16px;
        overflow-x: auto;
    }
    .nav__list::-webkit-scrollbar {
        display: none;
    }

    .list__item {
        min-width: fit-content;
    }
    .list__item:nth-child(3) .item__inner {
        padding-right: 16px;
    }
    .list__item:after {
        content: '';
        display: block;
        width: 24px;
        height: 2px;
        margin-top: 6px;
        background-color: transparent;
    }
    .list__item + .list__item {
        margin-left: 32px;
    }
    .list__item--active {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .list__item--active::after {
        background-color: var(--tdk-main);
    }
    .list__item--active .inner__title {
        color: var(--text-heading);
    }

    .inner__title {
        font-size: var(--font-size-sm);
        font-weight: bold;
        color: var(--text-paragraph-2);
    }
</style>

<nav class="detail-nav">
    <ul class="nav__list">
        {#each navData as data (data.type)}
            <li
                class="list__item"
                class:list__item--active={data.active}
                on:click={() => handleNavItemClick(data.type)}>
                <div class="item__inner">
                    <span class="inner__title">{data.title}</span>
                </div>
            </li>
        {/each}
    </ul>
</nav>
