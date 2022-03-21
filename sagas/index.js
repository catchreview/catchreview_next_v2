import axios from "axios";
import { all, fork } from 'redux-saga/effects';
import userSaga from "./userSaga";

// axios.defaults.baseURL = process.env.AXIOS_HOST;
axios.defaults.baseURL = "http://localhost:8080"

export default function* rootSaga() {
    yield all([
        fork(userSaga),
    ])
}
