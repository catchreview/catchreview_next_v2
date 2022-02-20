import React from 'react';
import {Row, Col, Input, Image, Button, Affix} from 'antd';
import styled from 'styled-components';
import { MonitorOutlined } from '@ant-design/icons';

export const BottomBarWrapper = styled(Row)`
    width : 100%;
    height : 70px;
    background-color : white;
`;

export const BottomNavWrapper = styled(Col)`
    flex-direction : column;
    vertial-align : middle;
    text-align : center;
    padding : 15px;
    font-size : 12px;
`;

export const colorBlack = {
    color: 'black'
};

export const iconFontSize = {
    fontSize: '20px'
};
