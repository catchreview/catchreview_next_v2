import React from 'react';
import { Row, Col, Input, Image } from 'antd';
import styled from 'styled-components';
import { MonitorOutlined, MenuFoldOutlined } from '@ant-design/icons';

export const LayoutRow = styled(Row)`
    padding : 15px;
`;

export const SearchInputWrapper = styled(Col)`
    vertical-align : middle;
    padding-top : 5px;
`;

export const SearchInput = styled(Input)`
    border-radius : 20px;
    padding-left : 20px;
`;

export const searchInputSuffix = (
    <MonitorOutlined
      style={{
        fontSize: 16,
        color: '#1890ff',
        paddingRight : '5px'
      }}
    />
);

export const navInputSuffix = (
    <MenuFoldOutlined
      style={{
        fontSize: 16,
        color: '#1890ff',
        paddingRight : '5px'
      }}
    />
);

export const DetailHeader = styled(Col)`
      text-align : center;
      padding : 10px;
      font-weight : bold;
      font-size : 18px;
`;

export const HeaderRight = styled(Col)`
      text-align : right;
      padding : 15px;
`;