import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import TaskReducer from './task/task.reducer';

const persistConfig = {
	key: 'root',
	storage,
};

const rootReducer = combineReducers({
	Task: TaskReducer,
});

export default persistReducer(persistConfig, rootReducer);
