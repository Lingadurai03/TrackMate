import { AUTH_KEY } from '@features/auth/constant';
import { authReducer } from '@features/auth/model';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './saga';

const sagaMiddleware = createSagaMiddleware();

const reducers = combineReducers({
  [AUTH_KEY]: authReducer,
});

const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [],
      },
    }).concat(sagaMiddleware),
});
sagaMiddleware.run(rootSaga);

export default store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
