//Core
import React, { useEffect, useState, useCallback, ReactNode, Ref, DetailedHTMLProps, HTMLAttributes } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import I18n from "@/I18n";
import { specialistsI } from "@/interfaces/home";
import './style.scss';

//Components
//import Btn from "@/components/Btn";
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

        let width = window.innerWidth;

        for (const item of specialists) {
            //console.log("-----", countArrays, countElements, width);
            if (countElements < 3 && width > 1023) {
                countElements += 1;
            } else if (countElements === 1 && width < 1024) {
                countElements += 1;
                countArrays += 1;
                groupArrSpec[countArrays] = [];
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
                <Carousel
                    { ...carouselPropSpecialists() }>
                    { renderSpecialist() }
                </Carousel>
            </div>
        </section>
    )
    ;
};

export default Specialist;
