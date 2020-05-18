<script>
    import Button from '../../UI/Button/Button.svelte';
    import Icon from '../../UI/Icon/Icon.svelte';
</script>

<header class="header">
    <div class="header__btn">
        <Button>
            <Icon name="tdk-icon-dots" color="white" />
        </Button>
    </div>
    <img class="header__bg" src="assets/images/tdk_logo-white.svg" alt="tdk logo">
</header>

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

    .header__bg {
        width: 86px;
        height: 40px;
    }
</style>
