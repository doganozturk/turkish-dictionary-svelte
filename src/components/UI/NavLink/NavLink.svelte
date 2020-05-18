<script>
    import { Link } from 'svelte-routing';

    export let to = '/';

    function getProps({ location, href, isPartiallyCurrent, isCurrent }) {
        const isActive =
            href === '/' ? isCurrent : isPartiallyCurrent || isCurrent;

        if (isActive) {
            return { class: 'active' };
        }

        return {};
    }
</script>

<Link {to} {getProps}>
    <slot />
</Link>

<!--<style>
    :global(a.active svg) {
        color: var(&#45;&#45;tdk-main) !important;
    }
</style>-->
