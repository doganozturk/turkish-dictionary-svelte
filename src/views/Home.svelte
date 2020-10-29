<script lang="ts">
    import { onMount } from 'svelte';
    import { search, ui } from '../stores';
    import { contentService } from '../services';
    import { Word, wordType } from '../models';
    import Header from '../components/Home/Header/Header.svelte';
    import HomeItem from '../components/Home/HomeItem/HomeItem.svelte';
    import Search from '../components/Home/Search/Search.svelte';
    import Overlay from '../components/UI/Overlay/Overlay.svelte';
    import About from '../components/Home/About/About.svelte';

    let homeContent: Word[] = [];

    onMount(async () => {
        homeContent = await getInitialData();
    });

    async function getInitialData(): Promise<Word[]> {
        const { data, error } = await contentService.getContent();

        if (error) {
            return [];
        }

        return [
            new Word(data.kelime[0].madde, wordType.WORD, data.kelime[0].anlam),
            new Word(
                data.atasoz[0].madde,
                wordType.PROVERB,
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
        overflow-y: hidden;
    }
    .main--search-active {
        margin-top: 0;
        padding-left: 0;
        padding-right: 0;
        overflow-y: scroll;
    }

    .home {
        height: calc(100% - 122px);
        margin-top: 50px;
        overflow-y: scroll;
    }
</style>

{#if $ui.overlay}
    <Overlay />
{/if}

{#if !$search.searchMode}
    <Header />
{/if}

<main class="main" class:main--search-active="{$search.searchMode}">
    <Search />

    {#if !$search.searchMode}
        <section class="home">
            {#each homeContent as item (item.word)}
                <HomeItem word="{item}" />
            {/each}
        </section>
    {/if}
</main>

{#if $ui.about}
    <About />
{/if}
