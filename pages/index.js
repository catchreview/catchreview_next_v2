import React from 'react';
import AppLayout from '../components/layout/AppLayout';


import MapComponent from '../components/map';
import BottomNavBar from '../components/nav/BottomNavBar';


const Home = () => {
    return (
        <>
            <AppLayout>
                <MapComponent />
                <BottomNavBar />
            </AppLayout>
        </>
    )
}

export default Home;