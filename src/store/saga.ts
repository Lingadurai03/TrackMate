import { authSaga } from '@features/auth/model';
import { all } from 'redux-saga/effects';
export default function* rootSaga() {
  yield all([...authSaga]);
}
