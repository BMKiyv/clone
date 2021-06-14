//Core
import React from 'react';
import { fieldSelectI, listI } from '@/interfaces/fields';
import './style.scss';
import I18n from "@/I18n";

const FieldSelect:React.FC<fieldSelectI> = ({
    children, label, listOption, onChange, invalid,
    code, defaultValue, multiple=false, subText,
}) => {

    const options = () => {
        return listOption.map((item: listI) => {
            return (
                <option key = { item.title } value = { item.val }>{ item.title }</option>
            );
        });
    };

    const defVal = () => {
        const result = defaultValue ? defaultValue : "";

        return multiple ? [result] : result;
    };

    return (
        <div className = 'field-select'>
            { label && <label className = 'form__label field-select__label'>{ label }</label> }
            {subText && <div className = 'form__attention'>
                <span>{subText}</span>
            </div>}
            <div className = { `field-select__wrap ${multiple ? "field-select__wrap--multiple" : ""}` }>
                <select
                    className = { `field-select__field
                         ${invalid ? "field-select__field--invalid" : ""}
                          ${multiple ? "field-select__field--multiple" : ""}
                         ` }
                    defaultValue = { defVal() }
                    multiple = { multiple }
                    name = { code }
                    onChange = { onChange }>
                    <option disabled key = 'disabled' value = ''>{I18n.t('fieldSelect')}</option>
                    { options() }
                </select>
                {invalid && <span className = 'error__text'>{invalid}</span>}
                <div>{children}</div>
            </div>

        </div>
    );
};

export default FieldSelect;
