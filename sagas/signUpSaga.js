import { all, fork, call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import {
    SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE
} from "../reducers/signup";


function signUpRequest(data) {
    
    return axios.post("/api/v1/signUp", data, { withCredentials: false });
}

function* signUp(action) {
    try {
        console.log("action", action);
        const res = yield call(signUpRequest, action.data);

        console.log("res data", res);
        
        yield put({
            type: SIGN_UP_SUCCESS,
            data: res.data,
        });

    } catch (err) {
        yield put({
            type: SIGN_UP_FAILURE,
            data: err.response.data
        });
    }
}

function* watchSignUp() {
    yield takeLatest(SIGN_UP_REQUEST, signUp)
}


export default function* signUpSaga() {
    yield all([
        fork(watchSignUp),
    ])
}
