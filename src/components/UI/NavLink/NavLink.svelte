<script lang="ts">
    import Link from 'svelte-routing/src/Link.svelte';

    export let to = '/';

    function getProps({
        href,
        isPartiallyCurrent,
        isCurrent,
    }: {
        location: string;
        href: string;
        isPartiallyCurrent: boolean;
        isCurrent: boolean;
    }): { class: string } {
        const isActive =
            href === '/' ? isCurrent : isPartiallyCurrent || isCurrent;

        if (isActive) {
            return { class: 'active' };
        }

        return { class: '' };
    }
</script>

<Link to="{to}" getProps="{getProps}">
    <slot />
</Link>
