<script lang="ts">
    import Button from '../../../UI/Button/Button.svelte';
    import Icon from '../../../UI/Icon/Icon.svelte';

    // @TODO: This should be handled better.
    const data: {
        name: string;
        address: string;
        phone: string;
        fax: string;
        contactButton: {
            title: string;
            link: string;
            type: string;
        };
    }[] = [
        {
            name: 'Türk Dil Kurumu Başkanlığı',
            address: 'Atatürk Bulvarı No: 217 06680 Kavaklıdere/ANKARA',
            phone: '+90 312 457 52 00',
            fax: '+90 312 457 52 00',
            contactButton: {
                type: 'email',
                title: 'E-Posta Yaz',
                link: 'bilgi@tdk.gov.tr',
            },
        },
        {
            name: 'Kızılay Kitap Satış Mağazası',
            address:
                'Cumhuriyet Mahallesi, Bayındır 1 Sokak, No: 24/6 Kızılay/ANKARA',
            phone: '+90 312 457 52 00',
            fax: null,
            contactButton: {
                type: 'link',
                title: 'E-Mağazaya Git',
                link: 'https://emagaza-tdk.ayk.gov.tr',
            },
        },
    ];
</script>

<style>
    .contact-item-container {
        margin-top: 40px;
    }

    .contact-item:not(:first-child) {
        margin-top: 24px;
        padding-top: 24px;
        border-top: 1px solid var(--tdk-secondary-btn);
    }

    .contact-item__title {
        font-size: var(--font-size-lg);
        font-weight: bold;
        color: var(--text-heading);
    }

    .contact-item__address {
        margin-top: 20px;
        font-size: var(--font-size-sm);
        line-height: 22px;
        color: var(--text-paragraph-2);
    }

    .contact-item__phone {
        margin-top: 32px;
    }
    .contact-item__fax {
        margin-top: 16px;
    }
    .contact-item__phone,
    .contact-item__fax {
        display: flex;
        align-items: center;
        font-size: var(--font-size-sm);
        color: var(--text-paragraph-2);
    }
    .contact-item__phone a,
    .contact-item__fax span {
        margin-left: 14px;
    }

    .contact-item__btn {
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

<div class="connect">
    <div class="contact-item-container">
        {#each data as item (item.name)}
            <div class="contact-item">
                <h2 class="contact-item__title">{item.name}</h2>
                <p class="contact-item__address">{item.address}</p>
                <div class="contact-item__phone">
                    <div class="contact-item__phone__icon">
                        <Icon
                            name="tdk-icon-phone"
                            size="{20}"
                            color="var(--tdk-main)"
                        />
                    </div>
                    <a href="{`tel:${item.phone}`}">{item.phone}</a>
                </div>
                {#if item.fax}
                    <div class="contact-item__fax">
                        <div class="contact-item__fax__icon">
                            <Icon
                                name="tdk-icon-fax"
                                size="{20}"
                                color="var(--tdk-main)"
                            />
                        </div>
                        <span>{item.fax}</span>
                    </div>
                {/if}
                <div class="contact-item__btn">
                    <a
                        href="{item.contactButton.type === 'email' ? `mailto:${item.contactButton.link}` : item.contactButton.link}"
                        target="_blank"
                    >
                        <Button bg="var(--tdk-secondary-btn)">
                            <span slot="text" class="btn__text">
                                {item.contactButton.title}
                            </span>
                        </Button>
                    </a>
                </div>
            </div>
        {/each}
    </div>
</div>
