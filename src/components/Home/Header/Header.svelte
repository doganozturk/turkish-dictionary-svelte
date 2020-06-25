<script>
    import { ui } from '../../../stores';
    import Button from '../../UI/Button/Button.svelte';
    import Icon from '../../UI/Icon/Icon.svelte';

    function onAboutButtonClick() {
        ui.activate('overlay');
        ui.activate('about');
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
</style>

<header class="header">
    <div class="header__btn">
        <Button on:click={onAboutButtonClick}>
            <Icon name="tdk-icon-dots" color="white" />
        </Button>
    </div>
    <Icon name="tdk-icon-logo" width={86} height={40} color="var(--white)" />
</header>
