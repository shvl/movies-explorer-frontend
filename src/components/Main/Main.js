import React from 'react';
import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';

import './Main.css';
import ScrollableAnchor from 'react-scrollable-anchor';

function Main() {

    return (
        <main>
            <Promo />

            <ScrollableAnchor id={'section1'}>
            <AboutProject />
            </ScrollableAnchor>
            
            <ScrollableAnchor id={'section2'}>
            <Techs />
            </ScrollableAnchor>

            <ScrollableAnchor id={'section3'}>
            <AboutMe />
            </ScrollableAnchor>

           
        </main>
    );
}

export default Main;