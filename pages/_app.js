import React from 'react';
import Head from 'next/head';
import 'antd/dist/antd.css';
import propTypes from 'prop-types';
import GlobalStyle from '../components/style/GlobalStyle';

const App = ({ Component }) => {
    return (
        <>
            <Head>
                <meta charSet='utf-8' />
                <title>Catch Review</title>
            </Head>
            <GlobalStyle>
                <Component />
            </GlobalStyle>
        </>
    )
}


export default App;