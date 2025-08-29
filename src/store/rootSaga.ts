import { authSaga } from '@features/auth/model/authSaga';
import { all } from 'redux-saga/effects';

export function* rootSaga() {
  yield all([authSaga()]);
}
