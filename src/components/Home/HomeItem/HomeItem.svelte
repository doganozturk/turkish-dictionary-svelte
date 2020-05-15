<script>
    export let title = '';
    export let word = '';
    export let desc = '';
</script>

<div class="home-item">
    <h2>{title}</h2>
    <div class="home-item__content">
        <div class="content__inner">
            <h3 class="inner__title">{word}</h3>
            <p class="inner__desc">{desc}</p>
        </div>
    </div>
</div>

<style>
    .home-item:not(:first-child) {
        margin-top: 50px;
    }

    .home-item h2 {
        padding-left: 10px;
        font-size: var(--font-size-xs);
        color: var(--text-paragraph-2);
    }

    .home-item__content {
        width: 100%;
        height: 72px;
        margin-top: 10px;
        padding: 13px;
        background-color: var(--white);
        border-radius: 6px;
    }

    .content__inner {
        padding-left: 15px;
        border-left: 3px solid var(--tdk-secondary-btn);
    }

    .inner__title {
        font-size: var(--font-size-lg);
        font-weight: bold;
        color: var(--text-heading);
    }

    .inner__desc {
        margin-top: 10px;
        font-size: var(--font-size-xs);
        color: var(--text-paragraph);
    }
</style>
