import React from 'react';
import { generalTemplate } from '@/interfaces/modals';
import './style.scss';
import { Link } from "react-router-dom";

const GeneralModal:React.FC<generalTemplate> = ({
    title, children, onClose, onButtonPress, link,
}) => {

    return (
        <div className = 'generalModal__container' >
            {
                onClose?
                    <div className = 'generalModal__close-wrap' >
                        <button className = 'generalModal__close' onClick = { onClose } />
                    </div>
                    : null
            }
            <h3 className = 'generalModal__title'>{title}</h3>
            <div className = 'generalModal__content'>{children}</div>
            {
                onButtonPress || link ?
                    <div className = 'generalModal__btn-wrap'>
                        {link && <Link className = 'generalModal__btn' to = { link }>ОК</Link>}
                        {
                            onButtonPress && <button className = 'generalModal__btn' onClick = { onButtonPress }>OK</button>
                        }
                    </div>
                    : null
            }
        </div>
    );

};

export default GeneralModal;
