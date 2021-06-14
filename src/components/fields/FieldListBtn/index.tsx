import React from 'react';
import { fieldListBtnI } from '@/interfaces/fields';
import './style.scss';

const FieldListBtn:React.FC<fieldListBtnI> = (
    { label, listBtn, onChange, code, custom }
) => {

    const renderListBtn = () => {
        return listBtn.map((item, ind) => {
            return (
                <div className = 'lists-btn__item-wrap' key = { item.id }>
                    <input
                        className = 'lists-btn__input' defaultChecked = { !ind } id = { item.id }
                        name = { code }
                        type = 'radio'
                        value = { item.val }
                        onChange = { onChange }
                    />
                    <label className = 'lists-btn__item' htmlFor = { item.id }>
                        <span className = { `lists-btn__text lists-btn__text--${custom}` }>{ item.title }</span>
                    </label>
                </div>
            );
        });
    };

    return (
        <div className = 'lists-btn'>
            { label && <label className = 'form__label lists-btn__label'>{label}</label> }
            <div className = 'lists-btn__wrap'>
                { renderListBtn() }
            </div>

        </div>
    );
};

export default FieldListBtn;
