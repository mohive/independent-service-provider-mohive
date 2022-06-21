import React from 'react';
import Banner from '../Banner/Banner';
import Owners from '../Owners/Owners';
import Services from '../Services/Services';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Services></Services>
            <Owners></Owners>
        </>
    );
};

export default Home;