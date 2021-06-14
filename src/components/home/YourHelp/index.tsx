import React from 'react';
import './style.scss';

import Btn from "@/components/Btn";
import yourHelp from '../../../jsons/yourHelp.json';
import { yourHelpI } from '@/interfaces';

const YourHelp:React.FC = () => {
    const renderList = (data:yourHelpI) => {
        const styled = {
            'backgroundColor':    `${data.bg}`,
            'minHeight':          '140px',
            'height':             'auto',
            //'width':              '100%',
            'minWidth':           '268px',
            'backgroundImage':    `url(${data.src})`,
            'backgroundPosition': 'center',
            'backgroundRepeat':   'no-repeat',
        };

        return (
            <div className = 'yourHelp__card-wrap' key = { data.title }>
                <div style = { styled } />
                <div className = 'yourHelp__card-text'>
                    <h3 className = 'yourHelp__card-title'>{ data.title }</h3>
                    <p className = 'yourHelp__card-p'>{ data.description }</p>
                    <Btn
                        img = { data.img }
                        theme = 'grey'
                        title = { data.btnTitle }
                    />
                </div>
            </div>
        );
    };

    return (
        <section>
            <div className = 'yourHelp__main'>
                <h2 className = 'title'>Твоя допомога</h2>
                {yourHelp.map(renderList)}
            </div>
        </section>
    );
};

export default YourHelp;
