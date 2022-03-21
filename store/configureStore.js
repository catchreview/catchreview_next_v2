import {createWrapper} from "next-redux-wrapper";
import {applyMiddleware, compose, createStore} from 'redux';
import {composeWithDevTools} from "redux-devtools-extension";
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas';
import storage from 'redux-persist/lib/storage';
import {persistReducer, persistStore} from "redux-persist";
import rootReducer from "../reducers";


const loggerMiddleware = ({ dispatch, getState }) => (next) => (action) => {
    return next(action);
}

const persistConfig = {
    key : 'root',
    storage,
    whitelist: ["user"],
}

const configureStore = () => {
    const sagaMiddleware = createSagaMiddleware();
    const middlewares = [sagaMiddleware, loggerMiddleware];
    const enhancer = process.env.NODE_ENV === 'production'
        ? compose(applyMiddleware(...middlewares))
        : composeWithDevTools(applyMiddleware(...middlewares))

    const persistedReducer = persistReducer(persistConfig, rootReducer);
    const store = createStore(persistedReducer, enhancer);

    store.sagaTask = sagaMiddleware.run(rootSaga);
    store.__persistor = persistStore(store);

    return store;
}

const wrapper = createWrapper(configureStore, {
    debug: process.env.NODE_ENV === 'development',
});

export default wrapper;
