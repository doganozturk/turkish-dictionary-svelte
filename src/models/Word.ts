export enum wordType {
    WORD,
    PROVERB,
    COMPOUND_WORD,
}

export class Word {
    constructor(
        public word: string,
        public type?: wordType,
        public description?: string,
        public detail?: any,
    ) {}

    public getDetailUrl(): string {
        const { word, type } = this;

        switch (type) {
            case wordType.COMPOUND_WORD:
                return `/detay/birlesik-kelime/${word}`;
            case wordType.PROVERB:
                return `/detay/atasozu/${word}`;
            case wordType.WORD:
            default:
                return `/detay/${word}`;
        }
    }
}
