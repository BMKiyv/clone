import React from 'react';
import { fieldPhoneI } from '@/interfaces/fields';
import './style.scss';
import PhoneInput from "react-phone-number-input";

const FieldPhone:React.FC<fieldPhoneI> = ({ label, value, onChange, placeholder, invalid, locale }) => {

    return (
        <div className = 'field-phone'>
            { label && <label className = 'form__label field-phone__label'>{label}</label> }
            <PhoneInput
                international
                className = { `field-phone__field ${invalid ? "field-phone__field--invalid" : ""}` }
                defaultCountry = 'UA'
                labels = { locale }
                placeholder = { placeholder }
                value = { value }
                onChange = { onChange }
            />
            {invalid && <span className = 'error__text'>{invalid}</span>}
        </div>
    );
};
export default FieldPhone;
