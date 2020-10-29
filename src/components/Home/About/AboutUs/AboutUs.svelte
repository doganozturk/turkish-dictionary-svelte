<script lang="ts">
    import Icon from '../../../UI/Icon/Icon.svelte';
</script>

<style>
    .about-us__logo {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 56px;
    }

    .about-us__content {
        margin-top: 32px;
        padding-left: 30px;
        padding-right: 30px;
        text-align: center;
        font-size: var(--font-size-sm);
        line-height: 22px;
        color: var(--text-heading);
    }
</style>

<div class="about-us">
    <div class="about-us__logo">
        <Icon
            name="tdk-icon-logo"
            width="{70}"
            height="{32}"
            color="var(--tdk-main)"
        />
    </div>
    <div class="about-us__content">
        <p>
            <strong>Türk Dil Kurumu</strong>
            ’nun 1945’ten beri yayımlanan Türkçe Sözlük’ünün 2011 yılında
            yapılan 11. baskısının gözden geçirilip güncellenerek taşınabilir
            cihazlar için hazırlanan sürümüdür.
        </p>
    </div>
</div>
