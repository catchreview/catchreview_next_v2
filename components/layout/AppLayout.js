import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Drawer, Button, Space, Radio } from 'antd';
import { MonitorOutlined, MenuFoldOutlined } from '@ant-design/icons';

import { LayoutRow, SearchInputWrapper, SearchInput, searchInputSuffix, navInputSuffix } from './style';



const AppLayout = ({ children }) => {

    const [ visible, setVisible ] = useState(false);
    
    const showDrawer = () => {
        setVisible(true);
    };

    const drawOnClose = () => {
        setVisible(false);
    };


    return (
        <>
            <LayoutRow>
                <SearchInputWrapper xs={22} md={12}>
                    <SearchInput 
                        size="large"
                        prefix={
                            <MenuFoldOutlined
                                onClick={showDrawer}
                                style={{
                                    fontSize: 16,
                                    color: '#1890ff',
                                    paddingRight : '5px'
                                }}
                            />
                        }
                        suffix={searchInputSuffix}
                        placeholder='검색어를 입력해주세요.'
                    />
                </SearchInputWrapper>
                <Col xs={1} />
            </LayoutRow>
            <Drawer
                width={250}
                placement={'left'}
                onClose={drawOnClose}
                visible={visible}
                extra={
                <Space></Space>
                }
            >
                <p>Promotion</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Drawer>
            {children}
        </>
    )
};

AppLayout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default AppLayout;