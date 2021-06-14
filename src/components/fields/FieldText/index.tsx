import React from 'react';
import { fieldTextI } from '@/interfaces/fields';
import './style.scss';

const FieldText:React.FC<fieldTextI> = ({
    label, onChange, placeholder, invalid, code, type = "text",
}) => {
    return (
        <div className = 'field-text'>
            {
                label && <label className = 'form__label field-text__label'>{label}<span>*</span></label>
            }
            <input
                className = { `field-text__field ${invalid ? "field-text__field--invalid" : ""}` } name = { code }
                //placeholder = { placeholder }
                type = { type } onChange = { onChange }
            />
            {invalid && <span className = 'error__text'>{invalid}</span>}
        </div>
    );
};

export default FieldText;
