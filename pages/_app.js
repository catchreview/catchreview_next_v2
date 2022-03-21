import React from 'react';
import Head from 'next/head';
import 'antd/dist/antd.css';
import '../components/assets/css/map.css';
import propTypes from 'prop-types';
import GlobalStyle from '../components/style/GlobalStyle';
import storeWrapper from '../store/configureStore';
import { PersistGate } from 'redux-persist/integration/react';
import { useStore } from 'react-redux'

const App = ({ Component }) => {

    const store = useStore((state) => state);

    return (
        <>
            <PersistGate persistor={store.__persistor} loading={<div>LOADING...</div>}>
                <Head>
                    <meta charSet='utf-8' />
                    <title>Catch Review</title>
                    <script type="text/javascript" dangerouslySetInnerHTML={{ __html: process.env.rawJsFromFile }}></script>
                    <script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=076624d2972460e5bd173fdab6f916bb&libraries=services,clusterer,drawing"></script>
                </Head>
                <GlobalStyle>
                    <Component />
                </GlobalStyle>
            </PersistGate>
        </>
    )
}


export default storeWrapper.withRedux(App);