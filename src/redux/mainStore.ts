import { applyMiddleware, createStore } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';

import rootReducer from './reducer';

const middlewares: any = [];

if (process.env.NODE_ENV === 'development') {
	middlewares.push(logger);
}

export const mainStore = createStore(rootReducer, applyMiddleware(...middlewares));
export const persistor = persistStore(mainStore);

export default { mainStore, persistor };
