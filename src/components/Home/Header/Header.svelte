<script>
    import { onMount, onDestroy } from 'svelte';
    import { uiStore } from '../../../stores/ui';
    import Button from '../../UI/Button/Button.svelte';
    import Icon from '../../UI/Icon/Icon.svelte';

    let unsubscribe;

    onMount(() => {
        unsubscribe = uiStore.subscribe((value) => {
            console.log('HEADER_COMPONENT');
            console.log(value);
        });
    });

    onDestroy(() => {
        unsubscribe();
    });

    function onAboutButtonClick() {
        uiStore.update(() => ({
            overlay: true,
            about: true,
        }));
    }
</script>

<style>
    .header {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 174px;
        background-image: url('../assets/images/background.png');
        background-repeat: no-repeat;
        background-position-y: -14px;
        background-size: cover;
    }

    .header__btn {
        position: absolute;
        top: 30px;
        right: 16px;
    }

    .header__logo {
        width: 86px;
        height: 40px;
    }
</style>

<header class="header">
    <div class="header__btn">
        <Button on:click={onAboutButtonClick}>
            <Icon name="tdk-icon-dots" color="white" />
        </Button>
    </div>
    <img
        class="header__logo"
        src="assets/images/tdk_logo-white.svg"
        alt="tdk logo" />
</header>
