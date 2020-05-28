<script>
    import Button from '../../UI/Button/Button.svelte';
</script>

<style>
    .about {
        position: fixed;
        bottom: 0;
        width: 100%;
        height: 410px;
        background-color: var(--white);
        border-top-left-radius: 18px;
        border-top-right-radius: 18px;
        box-shadow: 0 -4px 24px rgba(0, 0, 0, 0.08);
        z-index: 3;
    }

    .about__header {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 186px;
        background-image: url('../assets/images/background.png');
        background-repeat: no-repeat;
        background-size: cover;
    }

    .header__logo {
        width: 86px;
        height: 40px;
        margin-top: 58px;
    }

    .header__title {
        margin-top: 24px;
        font-size: var(--font-size-sm);
        font-weight: bold;
        color: var(--white);
    }

    .header__version {
        margin-top: 12px;
        font-size: var(--font-size-xs);
        color: #f3a5b1;
    }

    .about__nav {
        padding: 24px 24px;
    }

    .nav__button {
        height: 48px;
        border-radius: 8px;
        overflow: hidden;
    }
    .nav__button + .nav__button {
        margin-top: 16px;
    }
    .button__text {
        font-size: var(--font-size-sm);
        font-weight: bold;
        color: var(--text-heading);
    }
</style>

<div class="about">
    <div class="about__header">
        <img
            class="header__logo"
            src="assets/images/tdk_logo-white.svg"
            alt="tdk logo" />
        <span class="header__title">Türk Dil Kurumu Başkanlığı</span>
        <span class="header__version">v.1.0</span>
    </div>
    <div class="about__nav">
        <div class="nav__button">
            <Button bg="var(--tdk-secondary-btn)">
                <span slot="text" class="button__text">Hakkında</span>
            </Button>
        </div>
        <div class="nav__button">
            <Button bg="var(--tdk-secondary-btn)">
                <span slot="text" class="button__text">İletişim</span>
            </Button>
        </div>
        <div class="nav__button">
            <Button bg="var(--tdk-secondary-btn)">
                <span slot="text" class="button__text">Katkı ve Öneriler</span>
            </Button>
        </div>
    </div>
</div>
