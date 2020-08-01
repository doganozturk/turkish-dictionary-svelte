<script lang="ts">
    // @TODO: bilgi@tdk.gov.tr should be constant.

    import Button from '../../../UI/Button/Button.svelte';
    import Icon from '../../../UI/Icon/Icon.svelte';
</script>

<style>
    .feedback-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 182px;
        padding-bottom: 182px;
    }

    .feedback-container__text {
        margin-top: 30px;
        text-align: center;
        font-size: var(--font-size-sm);
        color: var(--text-paragraph-2);
    }

    .feedback-container__btn {
        width: 152px;
        height: 48px;
        margin-top: 24px;
        border-radius: 8px;
        overflow: hidden;
    }
    .btn__text {
        font-size: var(--font-size-sm);
        font-weight: bold;
        color: var(--text-heading);
    }
</style>

<div class="feedback">
    <div class="feedback-container">
        <div class="feedback-container__icon">
            <Icon name="tdk-icon-message" size={40} color="var(--tdk-main)" />
        </div>
        <div class="feedback-container__text">
            <p>Katkı ve önerileriniz için bize e-posta gönderebilirsiniz.</p>
        </div>
        <div class="feedback-container__btn">
            <a href="mailto:bilgi@tdk.gov.tr" target="_blank">
                <Button bg="var(--tdk-secondary-btn)">
                    <span slot="text" class="btn__text">E-Posta Yaz</span>
                </Button>
            </a>
        </div>
    </div>
</div>
