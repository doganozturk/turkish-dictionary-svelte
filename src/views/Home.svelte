<script>
    import Header from '../components/Home/Header/Header.svelte';
    import HomeItem from '../components/Home/HomeItem/HomeItem.svelte';
    import Search from '../components/UI/Search/Search.svelte';

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
        }
    ];
</script>

<Header />
<main class="main">
    <Search />
    <section class="home">
        {#each data as item (item.title)}
            <HomeItem
                title={item.title}
                word={item.word}
                desc={item.desc}
            />
        {/each}
    </section>
</main>

<style>
    .main {
        height: calc(100% - 174px);
        margin-top: -26px;
        padding-left: 16px;
        padding-right: 16px;
        background-color: var(--tdk-page-bg);
    }

    .home {
        margin-top: 50px;
    }
</style>
