let translations = {};

export default {
    setTranslations : function(newTranslations)
    {
        translations = newTranslations;
    },

    translate : textId => {
        return translations[textId] || textId;
    }
}