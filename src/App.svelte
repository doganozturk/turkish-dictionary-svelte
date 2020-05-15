<script>
    import { Router, Route, Link } from 'svelte-routing';
    import Home from './routes/Home.svelte';
    import Detail from './routes/Detail.svelte';

    export let url = "";
</script>

<main>
    <Router {url}>
        <nav>
            <Link to="/">Home</Link>
            <Link to="detail">Detail</Link>
        </nav>
        <div>
            <Route path="detail" component={Detail} />
            <Route path="/" component={Home} />
        </div>
    </Router>
</main>
