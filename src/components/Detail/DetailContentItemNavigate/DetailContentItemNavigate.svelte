<script lang="ts">
    import type { Word } from '../../../models';
    import Icon from '../../UI/Icon/Icon.svelte';
    import NavLink from '../../UI/NavLink/NavLink.svelte';

    export let data: Word;
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

    .detail-content-item:not(:first-child) {
        margin-top: 12px;
    }

    :global(.detail-content-item a) {
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

<li class="detail-content-item">
    <NavLink to="{data.getDetailUrl()}">
        <span class="detail-content-item__word">{data.word}</span>
        <span class="detail-content-item__icon-chevron">
            <Icon
                name="tdk-icon-chevron-right"
                size="{20}"
                color="var(--tdk-main)"
            />
        </span>
    </NavLink>
</li>
