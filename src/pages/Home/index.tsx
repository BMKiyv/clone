//Core
import React from 'react';
import './style.scss';
//import I18n from '@/I18n';

//Components
import First from '../../components/home/First';
import Privacy from '../../components/home/Privacy';
import Partners from '../../components/home/Partners';
import HowWeWork from '../../components/home/HowWeWork';
import FAQ from '../../components/home/FAQ';
import About from '../../components/home/About';
import { firstHome, howWeWork } from '../../jsons';
import Specialists from '../../components/home/Specialists';
import StopAbuse from '../../components/home/stopAbuse';
import YourHelp from '@/components/home/YourHelp';

const Home:React.FC = () => {
    return (
        <div className = 'home' >
            {/*            <div className = 'test'>
                <div className = 'test__container'>
                    <img alt = 'Сайт працює в тестовому режимі' className = 'test__img' src = '/img/edit-tools.svg' />
                    <span className = 'test__text'>
                        Сайт працює в тестовому режимі
                    </span>
                </div>
            </div>*/
            }
            <First data = { firstHome } />
            <Privacy />
            <Specialists />
            <StopAbuse />
            <YourHelp />
            <About />
            <Partners />
            <HowWeWork addBlock data = { howWeWork } />
            <FAQ />
        </div>
    );
};

export default Home;
