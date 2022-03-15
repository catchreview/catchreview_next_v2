import React from 'react';
import { Row, Col } from 'antd';
import { LeftOutlined } from '@ant-design/icons';

import { HeaderTitle } from './style';

import { padding5, padding15, font20, mainTextColor } from '../style/CommonStyle'

const DefaultLayout = ({ children }) => {
    return (
        <>
            <Row style={padding5}>
                <Col xs={6} md={6} style={padding15}>
                    <LeftOutlined style={font20} />
                </Col>
                <HeaderTitle xs={12} md={12}>
                    <span style={mainTextColor}>마크 등록</span>
                </HeaderTitle>
                <Col xs={6} md={6}></Col>
            </Row>
            {children}
        </>
    )
}

export default DefaultLayout;