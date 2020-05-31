<script>
    import { onMount, onDestroy } from 'svelte';
    import { uiStore } from '../stores/ui';
    import Header from '../components/Home/Header/Header.svelte';
    import HomeItem from '../components/Home/HomeItem/HomeItem.svelte';
    import Search from '../components/UI/Search/Search.svelte';
    import Overlay from '../components/UI/Overlay/Overlay.svelte';
    import About from '../components/Home/About/About.svelte';

    let unsubscribe;
    let storeOverlay = false;
    let storeAbout = false;

    onMount(() => {
        unsubscribe = uiStore.subscribe(({ overlay, about }) => {
            console.log('HOME_VIEW');
            console.log(overlay);
            console.log(about);

            storeOverlay = overlay;
            storeAbout = about;
        });
    });

    onDestroy(() => {
        unsubscribe();
    });

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

    .home {
        margin-top: 50px;
    }
</style>

{#if storeOverlay}
    <Overlay />
{/if}
<Header />
<main class="main">
    <Search />
    <section class="home">
        {#each data as item (item.title)}
            <HomeItem title={item.title} word={item.word} desc={item.desc} />
        {/each}
    </section>
</main>
{#if storeAbout}
    <About />
{/if}
