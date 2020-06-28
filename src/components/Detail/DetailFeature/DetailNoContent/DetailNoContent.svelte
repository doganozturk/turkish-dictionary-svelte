<script>
    import Icon from '../../../UI/Icon/Icon.svelte';

    export let icon;
    export let noContentText;
</script>

<style>
    .detail-no-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        flex: 1;
    }

    .detail-no-content__icon {
        opacity: 50%;
    }

    .detail-no-content__text {
        margin-top: 27px;
        font-size: var(--font-size-sm);
        color: var(--text-paragraph);
    }
</style>

<div class="detail-no-content">
    <div class="detail-no-content__icon">
        <Icon name={icon} size={40} />
    </div>
    <div class="detail-no-content__text">
        <p>{noContentText}</p>
    </div>
</div>
