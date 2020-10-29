export enum wordType {
    WORD,
    PROVERB,
    COMPOUND_WORD,
}

export class Word {
    constructor(public word: string, public type: wordType) {}
}
