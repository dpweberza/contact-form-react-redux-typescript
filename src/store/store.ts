import { createStore } from 'redux';
import { persistStore, autoRehydrate } from 'redux-persist';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducers from './reducers';

const store = createStore(reducers, composeWithDevTools(autoRehydrate()));

persistStore(store, {whitelist: ['contactform']});

export default store;