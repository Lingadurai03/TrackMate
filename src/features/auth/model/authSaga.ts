import auth, {
  FirebaseAuthTypes,
  signInWithCredential,
} from '@react-native-firebase/auth';
import { db } from '@shared/lib';
import { UserCredential } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { call, put, takeLatest } from 'redux-saga/effects';

import { authActions } from './authSlice';

// // ---------- Google Login ----------
// function* googleLoginSaga() {
//   try {
//     const provider = new GoogleAuthProvider();
//     // // const userCred: UserCredential = yield call(
//     // //   signInWithPopup,
//     // //   auth,
//     // //   provider,
//     // // );

//     // // // Save to Firestore if new user
//     // // yield call(
//     // //   setDoc,
//     // //   doc(db, 'users', userCred.user.uid),
//     // //   {
//     // //     email: userCred.user.email,
//     // //     displayName: userCred.user.displayName,
//     // //     createdAt: new Date(),
//     // //   },
//     // //   { merge: true },
//     // // );

//     // yield put(authActions.googleLoginSuccess(userCred.user));
//   } catch (err: any) {
//     yield put(authActions.googleLoginFailure(err.message));
//   }
// }

// ---------- Phone OTP Send ----------
function* sendOtpSaga({ payload }: { payload: string }) {
  try {
    const confirmation: FirebaseAuthTypes.ConfirmationResult = yield call(
      [auth(), auth().signInWithPhoneNumber],
      payload,
    );
    // confirmation is typed as ConfirmationResult
    console.log('called');
    if (confirmation.verificationId) {
      console.log(confirmation.verificationId);
      yield put(authActions.sendOtpSuccess(confirmation.verificationId));
    } else throw new Error('OTP verification failed');
  } catch (err: any) {
    yield put(authActions.sendOtpFailure(err.message));
  }
}

// ---------- Phone OTP Verify ----------
function* verifyOtpSaga({
  payload,
}: {
  payload: { verificationId: string; code: string };
}) {
  try {
    // credential is a Firebase phone credential
    const credential: FirebaseAuthTypes.AuthCredential = yield call(
      [auth.PhoneAuthProvider, auth.PhoneAuthProvider.credential],
      payload.verificationId,
      payload.code,
    );

    // userCred is the result of signing in
    const userCred: UserCredential = yield call(() =>
      signInWithCredential(auth(), credential),
    );

    yield call(
      setDoc,
      doc(db, 'users', userCred.user.uid),
      {
        phoneNumber: userCred.user.phoneNumber,
        createdAt: new Date(),
      },
      { merge: true },
    );

    yield put(authActions.verifyOtpSuccess(userCred.user));
  } catch (err: any) {
    yield put(authActions.verifyOtpFailure(err.message));
  }
}

export const authSaga = [
  // takeLatest(authActions.googleLoginRequest, googleLoginSaga),
  takeLatest(authActions.sendOtpRequest, sendOtpSaga),
  takeLatest(authActions.verifyOtpRequest, verifyOtpSaga),
];
