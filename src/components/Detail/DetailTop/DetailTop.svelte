<script lang="ts">
    import { onDestroy } from 'svelte';
    import { ui, favorite } from '../../../stores';
    import { Word, wordType } from '../../../models';
    import Icon from '../../UI/Icon/Icon.svelte';
    import Button from '../../UI/Button/Button.svelte';

    export let title = '';
    export let language = '';
    export let soundCode = '';
    export let type = 'default'; // 'default', 'proverb', 'compound'

    let audio: HTMLAudioElement;
    let isFavorited: boolean;
    let isAudioPlaying: boolean;

    const typeMapping = {
        default: wordType.WORD,
        proverb: wordType.PROVERB,
        compound: wordType.COMPOUND_WORD,
    };

    const handleAudioEnd = () => {
        audio.currentTime = 0;

        isAudioPlaying = false;
    };

    $: {
        isFavorited = $favorite.favorite.some((item) => item.word === title);
    }

    onDestroy(() => {
        audio?.removeEventListener('ended', handleAudioEnd);
    });

    function soundButtonClickHandler() {
        if (!soundCode) {
            return;
        }

        if (!audio) {
            audio = new Audio(`https://sozluk.gov.tr/ses/${soundCode}.wav`);

            audio.addEventListener('ended', handleAudioEnd);
        }

        audio.play();

        isAudioPlaying = true;

        ui.showSnackbar({
            text: 'Şu an sesli dinliyorsunuz',
            icon: 'tdk-icon-voice-solid',
            animationDuration: 1000,
        });
    }

    function favoriteButtonClickHandler() {
        if (isFavorited) {
            favorite.removeFavoriteItem(title);
            ui.showSnackbar({
                text: 'Favorilerinizden çıkarıldı',
                icon: 'tdk-icon-fav',
            });

            return;
        }

        favorite.addFavoriteItem(new Word(title, typeMapping[type]));
        ui.showSnackbar({
            text: 'Favorilerinize eklendi',
            icon: 'tdk-icon-fav-solid',
        });
    }
</script>

<style>
    .detail-top {
        min-height: 140px;
        margin-top: 25px;
        padding: 0 24px;
    }

    .detail-top h1 {
        font-size: var(--font-size-xl);
        font-weight: bold;
        color: var(--text-heading);
        text-transform: capitalize;
    }
    .detail-top h1.title--proverb {
        color: var(--atasozleri-deyimler-main-text);
    }
    .detail-top h1.title--compound {
        color: var(--birlesik-kelime-text);
    }

    .detail-top__language,
    .detail-top__feature {
        display: block;
        height: 14px;
        margin-top: 12px;
        font-size: var(--font-size-sm);
        color: var(--text-paragraph-2);
    }

    .detail-top__language {
        font-style: italic;
    }

    .detail-top__actions {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 24px;
    }

    .action {
        width: 48px;
        height: 48px;
        border-radius: 32px;
        overflow: hidden;
        box-shadow: 0 1px 4px rgba(0, 0, 0, 0.16);
    }
    .action--favorite {
        margin-right: auto;
        margin-left: 12px;
    }
    .action--signs {
        width: 156px;
    }

    .action__text {
        margin-left: 10px;
        font-size: var(--font-size-sm);
        font-weight: bold;
        color: var(--text-paragraph-2);
    }
</style>

<section class="detail-top">
    <h1
        class:title--proverb="{type === 'proverb'}"
        class:title--compound="{type === 'compound'}"
    >
        {title}
    </h1>

    {#if language}
        <span class="detail-top__language">{language}</span>
    {:else if type === 'proverb'}
        <span class="detail-top__feature">{'Atasözleri ve Deyimler'}</span>
    {:else if type === 'compound'}
        <span class="detail-top__feature">{'Birleşik Kelime'}</span>
    {/if}

    <div class="detail-top__actions">
        <div class="action action--pronunciation">
            <Button
                bg="#fdfdfd"
                on:click="{soundButtonClickHandler}"
                disabled="{!soundCode}"
            >
                <Icon
                    name="{isAudioPlaying ? 'tdk-icon-voice-solid' : 'tdk-icon-voice'}"
                    color="{isAudioPlaying ? 'var(--tdk-main)' : 'var(--text-paragraph-2)'}"
                    size="{20}"
                />
            </Button>
        </div>
        <div class="action action--favorite">
            <Button bg="#fdfdfd" on:click="{favoriteButtonClickHandler}">
                <Icon
                    name="{isFavorited ? 'tdk-icon-fav-solid' : 'tdk-icon-fav'}"
                    color="{isFavorited ? 'var(--tdk-main)' : 'var(--text-paragraph-2)'}"
                    size="{20}"
                />
            </Button>
        </div>
        <div class="action action--signs">
            <Button bg="#fdfdfd">
                <Icon name="tdk-icon-hand" size="{20}" />
                <span slot="text" class="action__text">Türk İşaret Dili</span>
            </Button>
        </div>
    </div>
</section>
