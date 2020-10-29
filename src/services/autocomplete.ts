import * as data from '../../public/data/autocomplete.json';
import type { Autocomplete } from '../models';

// @ts-ignore
const autoCompleteData = data.default;

export const autocompleteService = {
    getAutocompleteData(): Autocomplete[] {
        return autoCompleteData;
    },
};
