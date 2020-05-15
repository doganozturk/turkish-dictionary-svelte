<script>
    import { Router, Route, Link } from 'svelte-routing';
    import Home from './views/Home.svelte';
    import Detail from './views/Detail.svelte';
    import Footer from './components/UI/Footer/Footer.svelte';
    import Icons from './components/UI/Icon/Icons.svelte';

    export let url = '';
</script>

<Icons />

<div class="app">
    <Router {url}>

        <Route path="detail" component={Detail} />
        <Route path="/" component={Home} />

    </Router>

    <Footer />
</div>

<style>
    :root {
        /* COLORS */
        --birlesik-kelime-text: #2E494C;
        --birlesik-kelime-text-search: #73A5AA;
        --birlesik-kelime-bg: #E5E5E5;
        --atasozleri-deyimler-text-search: #BB8E62;
        --atasozleri-deyimler-bg: #F9F5F1;
        --atasozleri-deyimler-main-text: #4F3822;
        --tdk-main: #E11E3C;
        --tdk-page-bg: #F8F8F8;
        --tdk-secondary-btn: #E8EAED;
        --text-heading: #0A151F;
        --text-paragraph: #48515B;
        --text-paragraph-2: #758291;
        --white: #FFFFFF;
        --black: #000000;

        /* TYPOGRAPHY */
        --font-size-xxl: 32px;
        --font-size-xl: 24px;
        --font-size-lg: 18px;
        --font-size-md: 16px;
        --font-size-sm: 14px;
        --font-size-xs: 12px;
    }

    :global(*) {
        box-sizing: border-box;
    }

    :global(html),
    :global(body),
    .app {
        width: 100%;
        height: 100%;
    }

    .app {
        font-family: 'SF Pro Text', sans-serif;
        background-color: var(--tdk-page-bg);
    }
</style>
