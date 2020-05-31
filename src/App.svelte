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
        width: 100%;
        height: 100%;
    }

    .app {
        font-family: 'SF Pro Text', sans-serif;
        background-color: var(--tdk-page-bg);
    }
</style>

<Icons />

<div class="app">
    <Router>
        <Route path="favorites" component={Favorites} />
        <Route path="history" component={History} />
        <Route path="detail" component={Detail} />
        <Route path="/" component={Home} />

        <Footer />
    </Router>
</div>
