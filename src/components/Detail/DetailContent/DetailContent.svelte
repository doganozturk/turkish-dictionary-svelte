<script lang="ts">
    import type { SvelteComponent } from 'svelte';
    import type { Word, Search } from '../../../models';
    import DetailContentItemDeletable from '../DetailContentItemDeletable/DetailContentItemDeletable.svelte';
    import DetailContentItemSearch from '../DetailContentItemSearch/DetailContentItemSearch.svelte';
    import DetailContentItemNavigate from '../DetailContentItemNavigate/DetailContentItemNavigate.svelte';
    import DetailContentItemDescription from '../DetailContentItemDescription/DetailContentItemDescription.svelte';

    // @TODO: Buraya enum olabilir.
    export let type = 'deletable'; // 'deletable', 'search', 'navigate', 'description'
    export let detailData: Word[] | Search[] = [];
    export let title = '';

    const componentMapping: {
        deletable: typeof SvelteComponent;
        search: typeof SvelteComponent;
        navigate: typeof SvelteComponent;
        description: typeof SvelteComponent;
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

    .detail-content__title:not(:first-child) {
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
        class:detail-content__list--description="{type === 'description'}"
    >
        {#each type === 'description' ? detailData : [...detailData].reverse() as data, index (`${data.word}_${index}`)}
            <svelte:component this="{componentMapping[type]}" data="{data}" />
        {/each}
    </ul>
</div>
