import React from 'react';
import { Col } from 'antd';
import { LayoutRow } from './style';


const DefaultLayout = ({ children }) => {
    return (
        <>
            <LayoutRow>
                <Col xs={24}>Hello</Col>
            </LayoutRow>
            {children}
        </>
    )
}

export default DefaultLayout;