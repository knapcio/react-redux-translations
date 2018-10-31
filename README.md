# react-redux-translations
Extremely simple react redux translation wrapper. Works well with redux saga.

# Installation

```
yarn add knapcio/react-redux-translations
```

# Usage

1. Add reducer. the name must be 'translations'
```javascript
const reducers = combineReducers({
  //... other reducers
  translations: translationReducer
})
```
2. Prepare translation file. Example path: /public/translations/en.json

```javascript
{
  "hello_world": "Hey mate!"
}
```

3. Load translations from file to state using i.e. redux saga

```javascript
import { call, put } from 'redux-saga/effects';

import {  actions as translationActions } from 'react-redux-translations';

function* translationSaga() 
{
    let lang = navigator.language.split('-')[0];

    if(!["en", "pl"].includes(lang)) lang = "en";
 
    const translationUrl = BASE_URL + '/public/translations/' + lang + '.json';
    const translationFile = yield call(fetch, translationUrl);
    const translation = yield call([translationFile, 'json']);
   
    yield put(translationActions.setTranslations(translation));
}

export default translationSaga;
```
3. Use the component
```javascript
import { Translate } from 'react-redux-translations';

<Translate textId="hello_world"/>
```
