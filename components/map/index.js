import React, { useState, useRef, useEffect } from 'react';
import { Row, Col, Affix, Drawer, Space } from 'antd';
import { MonitorOutlined, MenuFoldOutlined } from '@ant-design/icons';

import kakaoMapScript from '../../hooks/kakaoMapScript';
import { MapWrapper, SearchInput, searchInputSuffix, navInputSuffix } from './style';


const MapSection = ({}) => {
    
    useEffect(() => {
        kakaoMapScript();
    }, []);

    return (
        <>
        <MapWrapper>
            <div 
                id="map"
                className='map'
                style={{ width: '375px', height: '550px' }}
            >
            </div>
        </MapWrapper>
        </>
    )

};

export default MapSection;