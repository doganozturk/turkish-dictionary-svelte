<script lang="ts">
    import { onMount } from 'svelte';
    import { ui, search } from '../stores';
    import { contentService } from '../services';
    import { HomeContent } from '../models';
    import Header from '../components/Home/Header/Header.svelte';
    import HomeItem from '../components/Home/HomeItem/HomeItem.svelte';
    import Search from '../components/Home/Search/Search.svelte';
    import Overlay from '../components/UI/Overlay/Overlay.svelte';
    import About from '../components/Home/About/About.svelte';

    let homeContent = [];

    onMount(async () => {
        homeContent = await getInitialData();
    });

    async function getInitialData(): HomeContent[] {
        // @TODO: Burada 'data' nın typing'i dandik.
        const { data, error } = await contentService.getContent();

        if (error) {
            return [];
        }

        return [
            new HomeContent(
                'Bir Kelime',
                data.kelime[0].madde,
                data.kelime[0].anlam,
            ),
            new HomeContent(
                'Bir Deyim-Atasözü',
                data.atasoz[0].madde,
                data.atasoz[0].anlam,
            ),
        ];
    }
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
        padding-left: 0;
        padding-right: 0;
        overflow-y: scroll;
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
            {#each homeContent as item (item.title)}
                <HomeItem
                    title={item.title}
                    word={item.word}
                    desc={item.description} />
            {/each}
        </section>
    {/if}
</main>

{#if $ui.about}
    <About />
{/if}
