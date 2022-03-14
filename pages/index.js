import React from 'react';
import MapLayout from '../components/layout/MapLayout';

import MapComponent from '../components/map';
import BottomNavBar from '../components/nav/BottomNavBar';


const Home = () => {
    return (
        <>
            <MapLayout>
                <MapComponent />
                <BottomNavBar />
            </MapLayout>
        </>
    )
}

export default Home;