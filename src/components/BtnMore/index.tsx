import React from 'react';
import { buttonMoreI } from '@/interfaces';
import './style.scss';

const BtnMore:React.FC<buttonMoreI> = ({ onPress, title }) => {
    return (
        <button
            className = 'btn-more'
            onClick = { onPress }>
            <span className = 'btn-more_text'>{ title }</span>
        </button>
    );
};

export default BtnMore;
