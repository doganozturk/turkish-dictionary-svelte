<script lang="ts">
    // @TODO: Navlink/div interchange should be handled better

    import { detailDelete } from '../../../stores';
    import { longpress } from '../../../actions';
    import type { Word } from '../../../models';
    import Icon from '../../UI/Icon/Icon.svelte';
    import NavLink from '../../UI/NavLink/NavLink.svelte';

    export let data: Word;

    let pressed: boolean;

    $: {
        pressed = $detailDelete.deletables.some(
            (word: string) => word === data.word,
        );
    }

    function handleLongpress() {
        if (pressed) {
            return;
        }

        detailDelete.addDeletable(data.word);
    }

    function handleClick() {
        if (!$detailDelete.deletables.length) {
            return;
        }

        if (!pressed) {
            detailDelete.addDeletable(data.word);

            return;
        }

        if (pressed) {
            detailDelete.removeDeletable(data.word);
        }
    }
</script>

<style>
    .detail-content-item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        min-height: 54px;
        padding: 16px;
        background-color: var(--white);
        border-radius: 6px;
    }
    .detail-content-item--pressed {
        border: 1px solid #f3a5b1;
        box-shadow: 0 2px 4px rgba(207, 28, 55, 0.16);
    }
    .detail-content-item:not(:first-child) {
        margin-top: 12px;
    }
    :global(.detail-content-item a),
    .detail-content-item div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        height: 100%;
    }

    .detail-content-item__word {
        max-width: 230px;
        font-size: var(--font-size-md);
        font-weight: bold;
        line-height: 26px;
    }
</style>

<li
    class="detail-content-item"
    class:detail-content-item--pressed="{pressed}"
    use:longpress
    on:longpress="{handleLongpress}"
    on:click="{handleClick}"
>
    {#if !$detailDelete.deletables.length}
        <NavLink to="{data.getDetailUrl()}">
            <span class="detail-content-item__word">{data.word}</span>
            <span class="detail-content-item__icon-chevron">
                <Icon
                    name="{pressed ? 'tdk-icon-check' : 'tdk-icon-chevron-right'}"
                    size="{20}"
                    color="var(--tdk-main)"
                />
            </span>
        </NavLink>
    {:else}
        <div>
            <span class="detail-content-item__word">{data.word}</span>
            <span class="detail-content-item__icon-chevron">
                <Icon
                    name="{pressed ? 'tdk-icon-check' : 'tdk-icon-chevron-right'}"
                    size="{20}"
                    color="var(--tdk-main)"
                />
            </span>
        </div>
    {/if}
</li>
