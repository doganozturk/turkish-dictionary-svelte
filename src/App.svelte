<script>
    import { Router, Route } from 'svelte-routing';
    import Home from './views/Home.svelte';
    import Detail from './views/Detail.svelte';
    import Favorites from './views/Favorites.svelte';
    import History from './views/History.svelte';
    import Footer from './components/UI/Footer/Footer.svelte';
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

    <Router>
        <Route path="favoriler">
            <Favorites />
        </Route>
        <Route path="gecmis">
            <History />
        </Route>
        <Route path="detay/:word">
            <Detail />
        </Route>
        <Route path="/">
            <Home />
        </Route>

        <Footer />
    </Router>
</div>
