<script>
    import Button from '../Button/Button.svelte';
    import Icon from '../Icon/Icon.svelte';
</script>

<footer>
    <div class="footer-btn">
        <Button>
            <Icon name="tdk-icon-history" />
        </Button>
    </div>
    <div class="footer-btn footer-btn--search">
        <Button redBg>
            <Icon name="tdk-icon-search" size={28} color="white" />
        </Button>
    </div>
    <div class="footer-btn">
        <Button>
            <Icon name="tdk-icon-fav" />
        </Button>
    </div>
</footer>

<style>
    footer {
        position: fixed;
        bottom: 0;
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        width: 100%;
        height: 68px;
        padding-left: 28px;
        padding-right: 28px;
        background-color: var(--white);
        box-shadow: 0 -4px 24px rgba(0, 0, 0, 0.04);
    }

    .footer-btn {
        width: 56px;
        height: 56px;
    }
    .footer-btn--search {
        width: 86px;
        height: 86px;
        margin-top: -15px;
        border: 15px solid var(--white);
        border-radius: 50%;
    }
</style>
