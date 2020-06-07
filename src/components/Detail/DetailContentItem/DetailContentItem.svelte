<script>
    import { longpress } from '../../../actions';
    import Icon from '../../UI/Icon/Icon.svelte';

    export let data = null;
    let pressed = false;

    function handleLongpress() {
        pressed = true;
    }

    function handleClick() {
        pressed = false;
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
    .detail-content-item + .detail-content-item {
        margin-top: 12px;
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
    class:detail-content-item--pressed={pressed}
    use:longpress={1000}
    on:longpress={handleLongpress}
    on:click={handleClick}>
    <span class="detail-content-item__word">{data.word}</span>
    <span class="detail-content-item__icon-chevron">
        <Icon
            name={pressed ? 'tdk-icon-check' : 'tdk-icon-chevron-right'}
            size={20}
            color="var(--tdk-main)" />
    </span>
</li>
