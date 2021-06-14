import React, { useState } from 'react';
import { faqI } from '@/interfaces/home';
import './style.scss';

const Item:React.FC<faqI> = ({ question, answer, links }) => {

    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleBtn = () => {
        setIsOpen((prev) => !prev);
    };

    const renderAnswer= () => {
        const answerArr = answer.split('\n\n');

        return answerArr.map((item, index) => {
            return (
                <p className = 'faq-item__answer' key = { index }>
                    {item}
                </p>
            );
        });
    };

    return (
        <button
            className = 'faq-item'
            onClick = { toggleBtn }>
            <div className = 'faq-item__wrap'>
                <span className = 'faq-item__question'>{question}</span>
                <span className = { `faq-item__plus ${isOpen ? "faq-item__plus--active" : ""}` } />
            </div>
            <div className = { `faq-item__description ${isOpen ? "faq-item__description--active" : ""}` }>
                {renderAnswer()}
                { links && links[0] &&
                <a className = 'faq-item__link' href = { `mailto:${links[0]}` }>{ links[0] }</a>
                }
            </div>
        </button>
    );
};

export default Item;
