export enum WordType {
    WORD,
    PROVERB,
    COMPOUND_WORD,
}

export class Word {
    constructor(public word: string, public type: WordType) {}
}
