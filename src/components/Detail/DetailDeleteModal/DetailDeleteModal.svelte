<script lang="ts">
    // @TODO: I should implement this delete for recent searches, too!

    import { createEventDispatcher } from 'svelte';
    import Button from '../../UI/Button/Button.svelte';
    import Icon from '../../UI/Icon/Icon.svelte';

    // @TODO: Bunların typing'i var.
    export let deleteSelectedHandler;
    export let selectAllHandler;
    export let selectedCount: number | null;

    const dispatch = createEventDispatcher();
</script>

<style>
    .detail-delete-modal {
        position: fixed;
        bottom: 0;
        width: 100%;
        height: 162px;
        padding: 16px;
        background-color: var(--white);
        z-index: 2;
        box-shadow: 0 -4px 24px rgba(0, 0, 0, 0.04);
    }

    .detail-delete-modal__btns {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .detail-delete-modal__cancel {
        margin-top: 12px;
    }

    .btns__btn {
        width: 100%;
        height: 48px;
        border-radius: 8px;
        overflow: hidden;
    }
    .btns__btn--red {
        box-shadow: 0 4px 12px rgba(225, 30, 60, 0.32);
    }
    .btns__btn + .btns__btn {
        margin-left: 20px;
    }

    .btn__text {
        font-size: var(--font-size-sm);
        font-weight: bold;
        line-height: 18px;
    }
    .btn__text--white {
        color: var(--white);
    }
    .btn__text--gray {
        color: var(--text-paragraph);
    }
    .btn__text--gray-alt {
        color: var(--text-paragraph-2);
    }
</style>

<div class="detail-delete-modal">
    <div class="detail-delete-modal__btns">
        <div class="btns__btn btns__btn--red">
            <Button on:click={deleteSelectedHandler} bg="var(--tdk-main)">
                <span slot="text" class="btn__text btn__text--white">
                    Sil ({selectedCount})
                </span>
                <Icon name="tdk-icon-thrash" color="white" />
            </Button>
        </div>
        <div class="btns__btn">
            <Button on:click={selectAllHandler} bg="var(--tdk-secondary-btn)">
                <span slot="text" class="btn__text btn__text--gray">
                    Tümünü Seç
                </span>
            </Button>
        </div>
    </div>
    <div class="detail-delete-modal__cancel">
        <div class="btns__btn">
            <Button on:click={() => dispatch('modalClose')}>
                <span slot="text" class="btn__text btn__text--gray-alt">
                    Vazgeç
                </span>
            </Button>
        </div>
    </div>
</div>
