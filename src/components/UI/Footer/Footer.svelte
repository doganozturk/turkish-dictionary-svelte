<script>
    import NavLink from '../NavLink/NavLink.svelte';
    import Button from '../Button/Button.svelte';
    import Icon from '../Icon/Icon.svelte';
</script>

<footer class="footer">
    <div class="footer__btn">
        <NavLink to="history">
            <Button>
                <Icon name="tdk-icon-history" />
            </Button>
        </NavLink>
    </div>
    <div class="footer__btn footer__btn--search">
        <NavLink to="/">
            <Button redBg>
                <Icon name="tdk-icon-search" size={28} color="white" />
            </Button>
        </NavLink>
    </div>
    <div class="footer__btn">
        <NavLink to="favorites">
            <Button>
                <Icon name="tdk-icon-fav" />
            </Button>
        </NavLink>
    </div>
</footer>

<style>
    .footer {
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

    .footer__btn {
        width: 56px;
        height: 56px;
    }
    .footer__btn.footer__btn--search {
        width: 86px;
        height: 86px;
        margin-top: -15px;
        border: 15px solid var(--white);
        border-radius: 50%;
    }
</style>
