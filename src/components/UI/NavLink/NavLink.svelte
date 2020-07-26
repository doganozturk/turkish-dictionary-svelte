<script lang="ts">
    import { Link } from 'svelte-routing';

    export let to = '/';

    // @TODO: Bunun typing'ine bakalım.
    function getProps({ href, isPartiallyCurrent, isCurrent }) {
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
