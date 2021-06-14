import React from 'react';
import './style.scss';

type SlideDotsT = {
    slides:number,
    activeSlides:number
}

const SlideDots:React.FC<SlideDotsT> = ({
    slides, activeSlides,
}) => {

    const renderDot = ():React.ReactNodeArray => {

        const result:React.ReactNodeArray = [];

        for (let i = 0; i < slides; i++) {
            result.push(
                <span
                    className = { `slide-dots__item ${i < activeSlides ? 'slide-dots__item--active' : ''}` }
                    key = { i }
                />
            );
        }

        return result;
    };

    return (
        <div className = 'slide-dots'>
            { renderDot() }
        </div>
    );
};

export default SlideDots;
