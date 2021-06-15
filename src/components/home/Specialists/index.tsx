//Core
import React, { useEffect, useState, useCallback, ReactNode, Ref, DetailedHTMLProps, HTMLAttributes } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import I18n from "@/I18n";
import { specialistsI } from "@/interfaces/home";
import './style.scss';

//Components
import Btn from "@/components/Btn";
import { specialists } from '@/jsons';

//Utils
import { carouselPropSpecialists } from "@/utils/constants";
import { useOnScreen } from '@/utils/customHooks/useOnScreen';

type groupArr = ReactNode[][];
type IProperties = [ref:Ref<HTMLDivElement>, visible:boolean];

const Specialist:React.FC  = () => {

    const [groupSpecialist, setGroupSpecialist] = useState<groupArr>([]);
    const [myRef, visible]:IProperties = useOnScreen({});

    useEffect(() => {
        const groupArrSpec: groupArr = [[]];

        let countArrays = 0;

        let countElements = 0;

        for (const item of specialists) {
            //console.log("-----", countArrays, countElements);
            if (countElements < 4) {
                countElements += 1;
            } else {
                countArrays += 1;
                countElements = 1;
                groupArrSpec[countArrays] = [];
            }
            groupArrSpec[countArrays].push(
                (
                    <div className = 'specialists__item' key = { item.code }>
                        <figure className = 'specialists__figure'>
                            <div className = { visible? `specialists__img-wrap specialists__img--${item.code}` : 'specialists__img-wrap' }>
                                {/* <img src="/img/specialists/spatak_subbota.png" alt="Спартак Суббота"
                                     className="specialists__img"/>*/ }
                            </div>
                            <figcaption className = 'specialists__author'>{ item.name }</figcaption>
                        </figure>

                        <div className = 'specialists__text-wrap'>
                            <p className = 'specialists__text specialists__text--mobile'>
                                { item.shortDescription }
                            </p>
                            <p className = 'specialists__text specialists__text--desktop'>
                                { item.description }
                            </p>
                        </div>
                    </div>
                )
            );
        }

        setGroupSpecialist(groupArrSpec);

    }, [specialists, visible]);

    const renderSpecialist = useCallback(() => {

        const loop = (goup:ReactNode, ind:number) => {
            return (
                <div className = 'specialists__items' key = { `${ind}` }>
                    { goup }
                </div>
            );
        };

        return groupSpecialist.map(loop);

    }, [groupSpecialist]);

    return (
        <section className = 'specialists'>
            <div className = 'anchor' id = 'specialists' />
            <div className = 'content-wrap specialists-content-wrap' ref = { myRef as DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>["ref"] }>
                <h2 className = 'title'>{I18n.t('specialistsTitle')}</h2>
                <div>
                    <p className = 'specialists__description'>{I18n.t('specialistsDescr')}</p>
                </div>
                {/*<div className = 'specialists__items'>

                    <div className = 'specialists__item'>
                        <figure className = 'specialists__figure'>
                            <div className = 'specialists__img-wrap specialists__img--spatak_subbota'>
                                 <img src="/img/specialists/spatak_subbota.png" alt="Спартак Суббота"
                                     className="specialists__img"/>
                            </div>
                            <figcaption className = 'specialists__author'>Спартак Суббота</figcaption>
                        </figure>

                        <div className = 'specialists__text-wrap'>
                            <p className = 'specialists__text specialists__text--mobile'>
                                Науковий керівник Інституту когнітивного моделювання
                            </p>
                            <p className = 'specialists__text specialists__text--desktop'>
                                Науковий керівник Інституту когнітивного моделювання, кандидат психологічних наук,
                                лікар-психіатр, практикуючий психолог у методі когнітивно-поведінкової терапії з
                                п'ятирічним досвідом роботи.
                            </p>
                        </div>
                    </div>

                    <div className = 'specialists__item'>
                        <figure className = 'specialists__figure'>
                            <div className = 'specialists__img-wrap specialists__img--sofia_lagutina'>
                                <img src="/img/specialists/sofia_lagutina.png" alt="Софія Лагутіна"
                                     className="specialists__img"/>
                            </div>
                            <figcaption className = 'specialists__author'>Софія Лагутіна</figcaption>
                        </figure>
                        <div className = 'specialists__text-wrap'>
                            <p className = 'specialists__text specialists__text--mobile'>
                                Провідний спеціаліст Інституту когнітивного моделювання, лікар-психолог, аспірант
                            </p>
                            <p className = 'specialists__text specialists__text--desktop'>
                                Провідний спеціаліст Інституту когнітивного моделювання, лікар-психолог, аспірант
                                Національного медичного університету ім. А.А. Богомольця.
                            </p>
                        </div>
                    </div>

                    <div className = 'specialists__item'>
                        <figure className = 'specialists__figure'>
                            <div className = 'specialists__img-wrap specialists__img--lesia_sak'>
                                 <img src="/img/specialists/lesia_sak.png" alt="Леся Сак" className="specialists__img"/>
                            </div>
                            <figcaption className = 'specialists__author'>Леся Сак</figcaption>
                        </figure>
                        <div className = 'specialists__text-wrap'>
                            <p className = 'specialists__text specialists__text--mobile'>
                                Лікар - психолог, психотерапевт, асистент кафедри медичної психології
                            </p>
                            <p className = 'specialists__text specialists__text--desktop'>
                                Лікар- психолог, психотерапевт, асистент кафедри медичної психології, психосоматичної
                                медицини та психотерапії Національного медичного університету ім. О.О. Богомольця.
                            </p>
                        </div>
                    </div>

                    <div className = 'specialists__item'>
                        <figure className = 'specialists__figure'>
                            <div className = 'specialists__img-wrap specialists__img--bogdana_valigu'>
                                <img src="/img/specialists/bogdana_valigura.png" alt="Богдана Валігура"
                                     className="specialists__img"/>
                            </div>
                            <figcaption className = 'specialists__author'>Богдана Валігура</figcaption>
                        </figure>
                        <div className = 'specialists__text-wrap'>
                            <p className = 'specialists__text specialists__text--mobile'>
                                Психолог, психотерапевт з пятирічним досвідом роботи.
                            </p>
                            <p className = 'specialists__text specialists__text--desktop'>
                                Психолог, психотерапевт з пятирічним досвідом роботи. Спеціалізується на работі з
                                панічніми атаками, з депресією, тривожним розладом, соціальною тривогою та особистісними
                                конфліктам. Сертифікований коуч.
                            </p>
                        </div>
                    </div>
                </div>*/ }

                <Carousel
                    { ...carouselPropSpecialists() }>
                    { renderSpecialist() }
                </Carousel>

                <div className = 'btn_wrap specialists_wrap-btn'>
                    <Btn
                        theme = 'main'
                        title = { I18n.t('specialistsBtn') }
                        url = '/get-help'
                    />
                </div>
            </div>
        </section>
    )
        ;
};

export default Specialist;
