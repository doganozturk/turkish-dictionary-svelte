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
