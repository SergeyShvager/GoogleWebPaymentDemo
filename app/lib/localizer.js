// @flow

import config from '../config/language';

export function getTranslation(data: Object = {}): Object|string {
    const language = getLanguage();

    return data[language];
}

export function getLanguage(): string {
    let language = localStorage.getItem(config.localStorageLanguageKey);

    if (!language) {
       language = config.defaultLanguage;
    }

    return language;
}

export function setLanguage(lang: string): boolean {
    const currentLanguage = getLanguage();

    if (isLangSupported(lang)) {
        localStorage.setItem(config.localStorageLanguageKey, lang);

        return true;
    }

    localStorage.setItem(config.localStorageLanguageKey, currentLanguage);

    return false;
}

export function isLangSupported(lang: string) {
    return config.supportedLanguages.indexOf(lang) > -1;
}
