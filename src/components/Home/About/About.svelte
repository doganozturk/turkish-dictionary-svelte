<script>
    import AboutUs from '../AboutUs/AboutUs.svelte';
    import Connect from '../Connect/Connect.svelte';
    import Feedback from '../Feedback/Feedback.svelte';
    import Button from '../../UI/Button/Button.svelte';
    import Icon from '../../UI/Icon/Icon.svelte';

    let navigationVisible = true;
    let currentView = null;
    let currentTitle = '';

    const items = [
        {
            component: AboutUs,
            title: 'Hakkında',
        },
        {
            component: Connect,
            title: 'İletişim',
        },
        {
            component: Feedback,
            title: 'Katkı ve Öneriler',
        },
    ];

    function handleNavClick(component, title) {
        navigationVisible = false;
        currentView = component;
        currentTitle = title;
    }

    function handleNavBack() {
        navigationVisible = true;
        currentView = null;
        currentTitle = '';
    }
</script>

<style>
    .about {
        position: fixed;
        bottom: 0;
        width: 100%;
        min-height: 410px;
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

    .nav__header {
        display: flex;
        align-items: center;
    }

    .nav__back-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        overflow: hidden;
    }

    .nav__title {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: var(--font-size-sm);
        color: var(--text-heading);
    }
    .nav__title span {
        transform: translateX(-20px);
    }
</style>

<div class="about">
    {#if navigationVisible}
        <div class="about__header">
            <div class="header__logo">
                <Icon
                    name="tdk-icon-logo"
                    width={86}
                    height={50}
                    color="var(--white)" />
            </div>
            <span class="header__title">Türk Dil Kurumu Başkanlığı</span>
            <span class="header__version">v.1.0</span>
        </div>
    {/if}
    <div class="about__nav">
        {#if navigationVisible}
            {#each items as item (item.title)}
                <div class="nav__button">
                    <Button
                        bg="var(--tdk-secondary-btn)"
                        on:click={() => handleNavClick(item.component, item.title)}>
                        <span slot="text" class="button__text">
                            {item.title}
                        </span>
                    </Button>
                </div>
            {/each}
        {:else}
            <div class="nav__header">
                <div class="nav__back-btn">
                    <Button
                        bg="var(--tdk-secondary-btn)"
                        on:click={handleNavBack}>
                        <Icon
                            name="tdk-icon-chevron"
                            size={20}
                            color="var(--text-paragraph)" />
                    </Button>
                </div>
                <div class="nav__title">
                    <span>{currentTitle}</span>
                </div>
            </div>
            <svelte:component this={currentView} />
        {/if}
    </div>
</div>
