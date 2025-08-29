import { UserCredential } from 'firebase/auth';
import { call, put, takeLatest } from 'redux-saga/effects';

import { forgotPassword, login, register } from '../service';
import { authActions } from './authSlice';

// Login Saga
function* loginSaga(
  action: ReturnType<typeof authActions.loginRequest>,
): Generator {
  console.log('action');
  try {
    const userCred: UserCredential = yield call(
      login,
      action.payload.email,
      action.payload.password,
    );
    yield put(authActions.loginSuccess(userCred.user));
  } catch (err: any) {
    yield put(authActions.loginFailure(err.message));
  }
}

// Register Saga
function* registerSaga(
  action: ReturnType<typeof authActions.registerRequest>,
): Generator {
  try {
    const userCred: UserCredential = yield call(
      register,
      action.payload.email,
      action.payload.password,
    );
    yield put(authActions.registerSuccess(userCred.user));
  } catch (err: any) {
    yield put(authActions.registerFailure(err.message));
  }
}

// Forgot Password Saga
function* forgotPasswordSaga(
  action: ReturnType<typeof authActions.forgotPasswordRequest>,
): Generator {
  try {
    yield call(forgotPassword, action.payload.email);
    yield put(authActions.forgotPasswordSuccess());
  } catch (err: any) {
    yield put(authActions.forgotPasswordFailure(err.message));
  }
}

export function* authSaga(): Generator {
  yield takeLatest(authActions.loginRequest.type, loginSaga);
  yield takeLatest(authActions.registerRequest.type, registerSaga);
  yield takeLatest(authActions.forgotPasswordRequest.type, forgotPasswordSaga);
}
