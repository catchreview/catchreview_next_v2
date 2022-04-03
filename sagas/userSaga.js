import { all, fork, call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import {
    LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS
} from "../reducers/auth";
import { AUTH_SAVE } from "../reducers/user";


function logInRequest(data) {
    return axios.post("/api/v1/auth", data, { withCredentials: true });
}

function getMe(data) {
    return axios.get("/api/v1/member/me");
}

function* login(action) {
    try {

        const res = yield call(logInRequest, action.data);
        yield put({
            type: LOGIN_SUCCESS
        });

        axios.defaults.headers.common.Authorization = `Bearer ${res.data.data.accessToken}`;

        const meRes = yield call(getMe);

        yield put({
            type: AUTH_SAVE,
            data: meRes.data.data
        })

    } catch (err) {
        yield put({
            type: LOGIN_FAILURE,
            data: err.response.data
        });
    }
}

function* watchLogin() {
    yield takeLatest(LOGIN_REQUEST, login)
}


export default function* userSaga() {
    yield all([
        fork(watchLogin),
    ])
}
