import React, { useRef, useEffect } from 'react';

const options = {
    center: new window.kakao.maps.LatLng(33.450701, 126.570667),
    level : 3,
}

function MapHook() {
    const container = useRef(null);

    useEffect(() => {
        new window.kakao.maps.Map(container.current, options);
        return () => {};
    }, []);

    return (
        <div 
            className='map'
            style={{ width: '500px', height: '500px' }}
            ref={container}
        >
        </div>
    )
}

export default MapHook;