<script lang="ts">
    import { Router, Route } from 'svelte-routing';
    import { ui } from './stores';
    import Home from './views/Home.svelte';
    import Detail from './views/Detail.svelte';
    import Favorites from './views/Favorites.svelte';
    import History from './views/History.svelte';
    import DetailProverb from './views/DetailProverb.svelte';
    import DetailCompound from './views/DetailCompound.svelte';
    import Footer from './components/UI/Footer/Footer.svelte';
    import Snackbar from './components/UI/Snackbar/Snackbar.svelte';
    import Icons from './components/UI/Icon/Icons.svelte';
</script>

<style>
    .app {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        overflow-y: hidden;
    }

    .app {
        font-family: 'SF Pro Text', sans-serif;
        background-color: var(--tdk-page-bg);
    }

    :global(a) {
        color: inherit;
        text-decoration: inherit;
    }
</style>

<div class="app">
    <Icons />

    {#if $ui.snackbar.text}
        <Snackbar text={$ui.snackbar.text} icon={$ui.snackbar.icon} />
    {/if}

    <Router>
        <Route path="favoriler">
            <Favorites />
        </Route>
        <Route path="gecmis">
            <History />
        </Route>
        <Route path="detay/:word" let:params>
            <Detail word={params.word} />
        </Route>
        <Route path="detay/atasozu/:word" let:params>
            <DetailProverb word={params.word} />
        </Route>
        <Route path="detay/birlesik-kelime/:word" let:params>
            <DetailCompound word={params.word} />
        </Route>
        <Route path="/">
            <Home />
        </Route>

        <Footer />
    </Router>
</div>
