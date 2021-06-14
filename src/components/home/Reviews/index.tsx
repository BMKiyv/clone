//Core
import React, { ReactNode, useCallback } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import I18n from "@/I18n";
import { firstReviewsI } from "@/interfaces/home";
import './style.scss';

//Components
import firstReviews from "@/jsons/firstReviews.json";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//Utils
import { carouselPropSpecialists } from "@/utils/constants";

type CallbackType = (...args: string[]) => ReactNode

const Reviews:React.FC = () => {

    const rendeRates = useCallback((rating: number, ind) => {
        const result: ReactNode[] = [];

        for (let i = 0; i < 5; i++) {
            result.push(
                <span className = 'review__rate' key = { `rate-${ind}${i}` } >
                    <FontAwesomeIcon color = { i < rating ? '#FDD302' : '#EBF0FD' } icon = { faStar } size = '1x' />
                </span>
            );
        }

        return result;
    }, []);

    const renderRevie = useCallback(() => {

        const mapFunc = (item:firstReviewsI, index:number) => {
            return (
                <div className = 'review' key = { `reviews-${index}` }>
                    <div className = 'review__container'>
                        <div className = 'review__header-wrap'>
                            <div className = 'review__header'>
                                <div className = { `review__icon-wrap review__icon-wrap--${item.gender}` } />
                                <span className = 'review__title'>{I18n.t('reviewName')}</span>
                            </div>
                            <div className = 'review__rates'>
                                {rendeRates(item.rating, index)}
                            </div>
                        </div>
                        <div className = 'review__description'>
                            {item.description}
                        </div>
                    </div>
                </div>
            );
        };

        return firstReviews.map(mapFunc);

    }, [firstReviews]);

    return (
        <section className = 'reviews'>
            <div className = 'anchor' id = 'reviews' />
            <div className = 'content-wrap reviews-content-wrap'>
                <h2 className = 'title'>{I18n.t('reviewsTitle')}</h2>

                <Carousel
                    { ...carouselPropSpecialists() }>
                    { renderRevie() }
                </Carousel>

            </div>

        </section>
    )
    ;
};

export default Reviews;
