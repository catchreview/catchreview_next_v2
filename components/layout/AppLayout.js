import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Input, Image } from 'antd';
import { LayoutRow, SearchInputWrapper, SearchInput, searchInputSuffix } from './style';



const AppLayout = ({ children }) => {
    return (
        <>
            <LayoutRow>
                <Col xs={6} md={12}>
                    <Image 
                        width={55}
                        src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
                    />
                </Col>
                <SearchInputWrapper xs={17} md={12}>
                    <SearchInput 
                        size="large"
                        suffix={searchInputSuffix}
                        placeholder='검색어를 입력해주세요.'
                    />
                </SearchInputWrapper>
                <Col xs={1} />
            </LayoutRow>
            {children}
        </>
    )
};

AppLayout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default AppLayout;