//Core
import React, { useState } from 'react';
import './style.scss';
import I18n from "@/I18n";

//Components
import Btn from "@/components/Btn";

const About:React.FC = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <section className = 'about'>
            <h2 className = 'title about-title'>{I18n.t('about')}</h2>
            <div className = 'anchor' id = 'about' />
            <div className = 'about-wrap'>
                <div className = 'content-wrap about__content pad'>
                    <div className = { `about_description ${isOpen ? "about_description--full" : ""}` }>
                        <p>
                            {I18n.t('homeAboutText1')}
                        </p>
                        <img alt = 'partner1' src = '/img/inf-about.svg' />
                    </div>
                </div>
                <div className = 'infographic about__infographic'>
                    <p>
                        {I18n.t('homeAboutText2')}
                    </p>
                    <p>
                        {I18n.t('homeAboutText3')}
                    </p>
                    <p>
                        {I18n.t('homeAboutText4')}
                    </p>
                    <div className = { `about_btn-more ${isOpen ? "about_btn-more--full" : ""}` }>
                        <Btn
                            theme = 'main'
                            title = { 'мені здається' }
                            url = { 'https://itseems.com.ua' }
                            onPress = { toggleOpen }
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
