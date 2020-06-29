<script>
    import NavLink from '../NavLink/NavLink.svelte';
    import Button from '../Button/Button.svelte';
    import Icon from '../Icon/Icon.svelte';
</script>

<style>
    .footer {
        width: 100%;
        height: 68px;
        padding-left: 28px;
        padding-right: 28px;
        background-color: var(--white);
        box-shadow: 0 -4px 24px rgba(0, 0, 0, 0.04);
        z-index: 1;
    }

    .footer__nav {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
    }

    .nav__btn {
        width: 56px;
        height: 56px;
        border-radius: 50%;
        overflow: hidden;
    }
    .nav__btn.nav__btn--search {
        width: 86px;
        height: 86px;
        margin-top: -15px;
        border: 15px solid var(--white);
        border-radius: 50%;
    }

    :global(.nav__btn:not(.nav__btn--search) a.active) {
        position: relative;
    }
    :global(.nav__btn:not(.nav__btn--search) a.active svg) {
        color: var(--tdk-main) !important;
    }
    :global(.nav__btn:not(.nav__btn--search) a.active:after) {
        content: '';
        position: absolute;
        top: 42px;
        left: 26px;
        display: block;
        width: 4px;
        height: 4px;
        background-color: var(--tdk-main);
        border-radius: 50%;
    }
</style>

<footer class="footer">
    <nav class="footer__nav">
        <div class="nav__btn">
            <NavLink to="gecmis">
                <Button>
                    <Icon name="tdk-icon-history" />
                </Button>
            </NavLink>
        </div>
        <div class="nav__btn nav__btn--search">
            <NavLink to="/">
                <Button bg="var(--tdk-main)">
                    <Icon name="tdk-icon-search" size={28} color="white" />
                </Button>
            </NavLink>
        </div>
        <div class="nav__btn">
            <NavLink to="favoriler">
                <Button>
                    <Icon name="tdk-icon-fav" />
                </Button>
            </NavLink>
        </div>
    </nav>
</footer>
