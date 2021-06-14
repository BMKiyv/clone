//Core
import React from 'react';
import './style.scss';
//import I18n from "@/I18n";

//Components
import First from '../../components/home/First';
import HowWeWork from '../../components/home/HowWeWork';
//import Btn from '../../components/Btn';
import { whatYouGet, firstPsyholog } from '../../jsons';

const ForPsychologists:React.FC = () => {

    return (
        <div className = 'psychologists'>
            <First data = { firstPsyholog } />
            <HowWeWork data = { whatYouGet } />
            {/* <div className = 'content-wrap psychologists__wrap'>
                <Btn
                    full
                    theme = 'main'
                    title = { I18n.t('forPsychologistsBtn') }
                    url = '/give-help'
                />
                <div className = 'psychologists__text-wrap'>
                    <span className = 'psychologists__text'>
                        {I18n.t('forPsychologistsMotivation')}
                    </span>
                </div>
            </div> */}
        </div>
    );
};

export default ForPsychologists;
