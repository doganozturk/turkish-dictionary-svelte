<script>
    import { ui, search } from '../stores';
    import Header from '../components/Home/Header/Header.svelte';
    import HomeItem from '../components/Home/HomeItem/HomeItem.svelte';
    import Search from '../components/Home/Search/Search.svelte';
    import Overlay from '../components/UI/Overlay/Overlay.svelte';
    import About from '../components/Home/About/About.svelte';

    const data = [
        {
            title: 'Bir Kelime',
            word: 'maraz',
            desc: 'hastalık.',
        },
        {
            title: 'Bir Deyim - Atasözü',
            word: 'siyem siyem ağlamak',
            desc: 'hafif hafif, ince ince, durmadan gözyaşı dökmek.',
        },
    ];
</script>

<style>
    .main {
        flex: 1;
        margin-top: -28px;
        padding-left: 16px;
        padding-right: 16px;
        background-color: var(--tdk-page-bg);
    }
    .main--search-active {
        margin-top: 0;
        padding-top: 16px;
        padding-left: 0;
        padding-right: 0;
    }

    .home {
        margin-top: 50px;
    }
</style>

{#if $ui.overlay}
    <Overlay />
{/if}

{#if !$search.searchMode}
    <Header />
{/if}

<main class="main" class:main--search-active={$search.searchMode}>
    <Search />

    {#if !$search.searchMode}
        <section class="home">
            {#each data as item (item.title)}
                <HomeItem
                    title={item.title}
                    word={item.word}
                    desc={item.desc} />
            {/each}
        </section>
    {/if}
</main>

{#if $ui.about}
    <About />
{/if}
