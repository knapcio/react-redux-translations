let translations = {};

export const setTranslations = function(newTranslations)
{
    translations = newTranslations;
}

export const translate = textId => {
    return translations[textId] || textId;
}