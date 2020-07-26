<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    import { detailDelete } from '../../../stores';

    const dispatch = createEventDispatcher();

    let navData: {
        id: number;
        title: string;
        active: boolean;
    }[] = [
        {
            id: 1,
            title: 'Sözcük',
            active: true,
        },
        {
            id: 2,
            title: 'Atasözleri & Deyimler',
            active: false,
        },
        {
            id: 3,
            title: 'Birleşik Kelimeler',
            active: false,
        },
    ];

    function handleNavItemClick(id: number) {
        navData = navData.map((data) => {
            data.active = data.id === id;

            return data;
        });

        dispatch('filter', id);

        detailDelete.reset();
    }
</script>

<style>
    .detail-nav {
        display: flex;
        align-items: center;
        width: 100%;
        height: 32px;
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
        {#each navData as data (data.id)}
            <li
                class="list__item"
                class:list__item--active={data.active}
                on:click={() => handleNavItemClick(data.id)}>
                <div class="item__inner">
                    <span class="inner__title">{data.title}</span>
                </div>
            </li>
        {/each}
    </ul>
</nav>
