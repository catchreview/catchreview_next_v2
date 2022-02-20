import React, { useState, useRef, useEffect } from 'react';
import { Row, Col} from 'antd';
import { MapWrapper } from './style';

const MapSection = ({}) => {

    const options = {
        center: new window.kakao.maps.LatLng(33.450701, 126.570667),
        level : 3,
    }

    const container = useRef(null);

    useEffect(() => {
        new window.kakao.maps.Map(container.current, options);
        return () => {};
    }, []);

    return (
        <>
        <MapWrapper>
            <div 
                className='map'
                style={{ width: '380px', height: '550px' }}
                ref={container}
            >
            </div>
        </MapWrapper>
        </>
    )

};

export default MapSection;