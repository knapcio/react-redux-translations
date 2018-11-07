import { call, put, takeLatest } from 'redux-saga/effects';
import { actions, types } from '../reducers';

function* loadTranslations(url = '') 
{
    const translationUrl = BASE_URL + '/public/translations/en.json';
    const response = yield call(fetch, translationUrl);
    const json = yield call([response, 'json']);
}

export function* watchLoadTranslations () {
    yield takeLatest(types.LOAD_TRANSLATIONS, loadTranslations);
}

const translationSagas = [watchLoadTranslations, loadTranslations];

export default translationSagas;