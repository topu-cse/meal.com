
import React from 'react';
import Banner from '../Banner/Banner';
import Provide from '../Provide/Provide';
import Services from '../Provide/Services';
import Menu from '../../../components/Menu/Menu';
import TeamMember from '../../../components/TeamMember/TeamMember';


const Home = () => {
    return (
        <div>
            <Banner/>
            <Provide/>
            <Services/>
            <Menu/>
            <TeamMember/>
        </div>
    );
};

export default Home;