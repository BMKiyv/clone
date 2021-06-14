import React from 'react';
import { fieldCheckboxI } from '@/interfaces/fields';
import './style.scss';

const FieldCheckbox:React.FC<fieldCheckboxI> = (
    { text, onChange, code, invalid, link, linkText }
) => {

    return (
        <div className = 'field-checkbox'>
            <label className = 'field-checkbox__label-wrap'>
                <div className = { `field-checkbox__label ${invalid ? "field-checkbox__label--invalid" : ""}` }>
                    <input
                        className = 'field-checkbox__input'
                        name = { code }
                        type = 'checkbox'
                        onChange = { onChange }
                    />
                    <span className = 'field-checkbox__check' />
                </div>
                <div className = 'field-checkbox__description'>
                    {text && <span className = { `field-checkbox__text ${invalid ? "field-checkbox__text--invalid" : ""}` }>
                        {text}
                    </span>}
                    {linkText && link && <a className = { `field-checkbox__link` } href = { link } target = '_blank'>
                        {linkText}
                    </a>}
                </div>
            </label>

        </div>
    );
};

export default FieldCheckbox;
