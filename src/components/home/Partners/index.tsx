//Core
import React from 'react';
import './style.scss';
import I18n from "@/I18n";
import { partnersI } from "@/interfaces";

//Components
import { partners } from '@/jsons';

const Partners:React.FC = () => {

    const renderPartners = () => {

        const loop = (item:partnersI) => {
            return (
                <div className = 'partner__item-wrap' key = { item.title }>
                    <a className = 'partner__item' href = { item.link } target = '_blank'>
                        <figure className = 'partner__img-wrap'>
                            <img alt = { item.title } className = { `partner__img ` } src = { item.url } />
                        </figure>
                        <div className = 'partner__description-wrap'>
                            <p className = 'partner__description'>
                                { item.description }
                            </p>
                        </div>
                    </a>
                </div>
            );
        };

        return partners.map(loop);

    };

    return (
        <section className = 'partner'>
            <div className = 'anchor' id = 'partners' />
            <div className = 'content-wrap'>
                <h2 className = 'title'>{I18n.t('partnersTitle')}</h2>
                <div className = 'partner__wrap'>
                    { renderPartners() }
                </div>
            </div>

        </section>
    );
};

export default Partners;
