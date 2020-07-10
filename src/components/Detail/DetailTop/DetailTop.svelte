<script>
    import Icon from '../../UI/Icon/Icon.svelte';
    import Button from '../../UI/Button/Button.svelte';

    export let title = '';
</script>

<style>
    .detail-top {
        min-height: 160px;
        margin-top: 40px;
        padding: 0 24px;
    }

    .detail-top h1 {
        font-size: var(--font-size-xl);
        font-weight: bold;
        color: var(--text-heading);
        text-transform: uppercase;
    }

    .detail-top p {
        margin-top: 12px;
        font-size: var(--font-size-sm);
        font-style: italic;
        color: var(--text-paragraph-2);
    }

    .detail-top__actions {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 24px;
    }

    .action {
        width: 48px;
        height: 48px;
        border-radius: 32px;
        overflow: hidden;
        box-shadow: 0 1px 4px rgba(0, 0, 0, 0.16);
    }
    .action--favorite {
        margin-right: auto;
        margin-left: 12px;
    }
    .action--signs {
        width: 156px;
    }

    .action__text {
        margin-left: 10px;
        font-size: var(--font-size-sm);
        font-weight: bold;
        color: var(--text-paragraph-2);
    }
</style>

<section class="detail-top">
    <h1>{title}</h1>
    <p>Arapça ḳalem</p>
    <div class="detail-top__actions">
        <div class="action action--pronunciation">
            <Button bg="#fdfdfd">
                <Icon name="tdk-icon-voice" size={20} />
            </Button>
        </div>
        <div class="action action--favorite">
            <Button bg="#fdfdfd">
                <Icon name="tdk-icon-fav" size={20} />
            </Button>
        </div>
        <div class="action action--signs">
            <Button bg="#fdfdfd">
                <Icon name="tdk-icon-hand" size={20} />
                <span slot="text" class="action__text">Türk İşaret Dili</span>
            </Button>
        </div>
    </div>
</section>
