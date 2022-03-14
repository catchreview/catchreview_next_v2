import React from 'react';

import DefaultLayout from '../../components/layout/DefaultLayout';
import BottomNavBar from '../../components/nav/BottomNavBar';


const CreateForm = ({state}) => {

    console.log('state', state);

    return (
        <>
            <DefaultLayout>
                <BottomNavBar />
            </DefaultLayout>
        </>
    )
}

export default CreateForm;