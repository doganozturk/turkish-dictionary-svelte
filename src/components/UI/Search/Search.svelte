<script>
    import Icon from '../Icon/Icon.svelte';
</script>

<style>
    .search {
        position: relative;
        width: 100%;
        height: 52px;
    }

    .search input {
        width: 100%;
        height: 100%;
        padding: 10px 10px 10px 50px;
        color: var(--text-paragraph);
        font-size: var(--font-size-sm);
        background: var(--white);
        border: 1px solid transparent;
        border-radius: 8px;
        box-shadow: 0 4px 24px rgba(0, 0, 0, 0.1);
    }

    .search-icon {
        position: absolute;
        top: 15px;
        left: 15px;
    }
</style>

<div class="search">
    <div class="search-icon">
        <Icon name="tdk-icon-search" />
    </div>
    <input type="text" placeholder="Türkçe Sözlük'te Ara" />
</div>
