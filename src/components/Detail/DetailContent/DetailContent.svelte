<script lang="ts">
    import { SvelteComponent, onMount } from 'svelte';
    import { Word } from '../../../models';
    import DetailContentItemDeletable from '../DetailContentItemDeletable/DetailContentItemDeletable.svelte';
    import DetailContentItemSearch from '../DetailContentItemSearch/DetailContentItemSearch.svelte';
    import DetailContentItemNavigate from '../DetailContentItemNavigate/DetailContentItemNavigate.svelte';
    import DetailContentItemDescription from '../DetailContentItemDescription/DetailContentItemDescription.svelte';

    // @TODO: Buraya enum olabilir.
    export let type = 'deletable'; // 'deletable', 'search', 'navigate', 'description'
    export let detailData: Word[] = [];
    export let title = '';

    const componentMapping: {
        deletable: SvelteComponent;
        search: SvelteComponent;
        navigate: SvelteComponent;
        description: SvelteComponent;
    } = {
        deletable: DetailContentItemDeletable,
        search: DetailContentItemSearch,
        navigate: DetailContentItemNavigate,
        description: DetailContentItemDescription,
    };
</script>

<style>
    .detail-content {
        padding: 24px 16px;
    }

    .detail-content__title {
        font-size: var(--font-size-xs);
        color: var(--text-paragraph-2);
    }

    .detail-content__title + .detail-content__list {
        margin-top: 12px;
    }

    .detail-content__list {
        height: calc(100% + 112px);
    }
    .detail-content__list--description {
        height: 100%;
        padding: 20px 15px;
        background-color: var(--white);
        border-radius: 8px;
    }
</style>

<div class="detail-content">
    {#if title}
        <h1 class="detail-content__title">{title}</h1>
    {/if}
    <ul
        class="detail-content__list"
        class:detail-content__list--description={type === 'description'}>
        {#each type === 'description' ? detailData : [...detailData].reverse() as data (`${data.word}_${data.type}`)}
            <svelte:component this={componentMapping[type]} {data} />
        {/each}
    </ul>
</div>
