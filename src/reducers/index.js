export const types = {
    // LOAD_TRANSLATIONS: 'LOAD_TRANSLATIONS',
    SET_TRANSLATIONS: 'SET_TRANSLATIONS'
}

export const actions = 
{
    // loadTranslations: () => ({ type: types.LOAD_TRANSLATIONS }),
    setTranslations: translations => ({ type: types.SET_TRANSLATIONS, translations })
}

const initialState = {
    texts: {}
};

export const reducer = (state = initialState, action) => 
{
    switch (action.type) {
        case types.SET_TRANSLATIONS:
            return {
                ...state,
                texts: action.translations
            }
        default:
            return state;
    }
};

export default reducer;