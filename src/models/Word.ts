export enum WORD_TYPE {
    WORD,
    PROVERB,
    COMPOUND_WORD,
}

export class Word {
    constructor(public word: string, public type: WORD_TYPE) {}
}
