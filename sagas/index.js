import axios from "axios";
import { all, fork } from 'redux-saga/effects';
import userSaga from "./userSaga";
import signUpSaga from './signUpSaga';

// axios.defaults.baseURL = process.env.AXIOS_HOST;
axios.defaults.baseURL = "http://localhost:8088"

export default function* rootSaga() {
    yield all([
        fork(userSaga),
        fork(signUpSaga),
    ])
}
