<script lang="ts">
    import Icon from '../../UI/Icon/Icon.svelte';
    import NavLink from '../../UI/NavLink/NavLink.svelte';

    export let title = '';
    export let type = 'default'; // 'default', 'proverb', 'compound'
</script>

<style>
    .detail-header {
        display: flex;
        align-items: center;
        height: 68px;
        padding-left: 14px;
        padding-right: 14px;
    }
    .detail-header--proverb {
        background-color: var(--atasozleri-deyimler-bg);
    }
    .detail-header--compound {
        background-color: var(--birlesik-kelime-bg);
    }

    .detail-header__title {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .detail-header__title h2 {
        font-size: var(--font-size-sm);
        color: var(--text-heading);
        text-transform: capitalize;
        transform: translateX(-9px);
    }
</style>

<header
    class="detail-header"
    class:detail-header--proverb={type === 'proverb'}
    class:detail-header--compound={type === 'compound'}>
    <div class="detail-header__back-btn">
        <NavLink to="/">
            <Icon
                name="tdk-icon-chevron"
                size={20}
                color="var(--text-heading)" />
        </NavLink>
    </div>
    <div class="detail-header__title">
        <h2>{title}</h2>
    </div>
</header>
