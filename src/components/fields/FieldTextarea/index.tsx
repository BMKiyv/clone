import React from 'react';
import { fieldTextareaI } from '@/interfaces/fields';
import './style.scss';

const FieldTextarea:React.FC<fieldTextareaI> = ({
    label, onChange, placeholder, invalid, code, bgField,
}) => {
    return (
        <div className = 'field-textarea'>
            { label && <label className = 'form__label field-textarea__label'>{label}</label> }
            <textarea
                className = { `field-textarea__field
                       ${bgField ? "field-textarea__field-light-blue" : ""}
                       ${invalid ? "field-textarea__field--invalid" : ""}
                       ` }
                name = { code }
                placeholder = { placeholder }
                onChange = { onChange }
            />
            {invalid && <span className = 'error__text'>{invalid}</span>}
        </div>
    );
};

export default FieldTextarea;
