import React from 'react';
import I18n from "@/I18n";

import './style.scss';

const IsNotAdult:React.FC<React.HTMLAttributes<string>> = () => {
    return (
        <div className = 'isNotAdult'>
            <div className = 'isNotAdult-container'>
                <div className = 'isNotAdult-content'>
                    <p className = 'isNotAdult-text-first'>{I18n.t('ifNotAdult')}</p>
                    <div className = 'isNotAdult-text'>
                        <img alt = 'phone' className = 'isNotAdult-svg' height = '14' src = '/img/social/phone.svg' width = '14' />
                        <a href = 'tel:+380800500225'>
                            <span className = 'isNotAdult-ref'>0 800 500 225</span>
                        </a>
                        <span className = 'isNotAdult-or'>{I18n.t('or')}</span>
                        <a href = 'tel:116111'>
                            <span className = 'isNotAdult-ref'>116 111</span>
                        </a>
                    </div>
                    <div className = 'isNotAdult-text'>
                        <img alt = 'calendar' className = 'isNotAdult-svg' height = '14' src = '/img/social/calendar.svg' width = '14' />
                        <p className = 'isNotAdult-text'>{I18n.t('forCalling')}</p>
                    </div>
                    <div className = 'isNotAdult-text'>
                        <img alt = 'clocks' className = 'isNotAdult-svg' height = '14' src = '/img/social/clocks.svg' width = '14' />
                        <span>12:00 - 20:00</span>
                    </div>
                </div>
                <a
                    alt = 'la-strada'
                    className = 'isNotAdult-wrap'
                    href = 'https://la-strada.org.ua/'>
                    <img alt = 'la-strada' className = 'isNotAdult-img' src = '/img/La_Strada_logo.svg' />
                </a>
            </div>
        </div>
    );
};

export default IsNotAdult;
