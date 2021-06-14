//Core
import React from 'react';
import './style.scss';
import I18n from "@/I18n";
import { whatYouGetI, dataListYouGetI } from '@/interfaces';

//Components
//import Btn from "@/components/Btn";

interface HowWeWorkI {
    data: whatYouGetI,
    addBlock?: boolean
}

const HowWeWork:React.FC<HowWeWorkI> = ({ data }) => {

    const renderList = () => {

        const loopMap = (item:dataListYouGetI) => {
            const arrText = item.name.split('*/');

            return (
                <div className = 'how-we-work__item' key = { item.name }>
                    <div className = 'how-we-work__img-wrap'>
                        <img alt = { item.name } className = 'how-we-work__img' src = { item.urlSvg } />
                    </div>
                    <h3 className = 'how-we-work__text'>{ arrText[0] } <br /> {arrText[1]}</h3>
                </div>
            );
        };

        return data.list.map(loopMap);
    };

    return (
        <section className = 'how-we-work'>
            <div className = 'anchor' id = 'how-we-work' />
            <div className = 'content-wrap'>
                <h2 className = 'title'>{ data.title }</h2>
                <div className = 'how-we-work__list-wrap'>
                    <div className = 'how-we-work__line' />
                    <div className = 'how-we-work__list'>
                        { renderList() }
                    </div>
                </div>
                {/* {addBlock &&
                <div className = 'btn_wrap how-we-work__wrap-btn'>
                    <Btn
                        theme = 'main'
                        title = { I18n.t('homeHowWeWorkBtn') }
                        url = '/get-help'
                    />
                </div>
                } */}
            </div>

        </section>
    );
};

export default HowWeWork;
