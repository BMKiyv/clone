import React from 'react';
import { fieldRadioI } from '@/interfaces/fields';
import './style.scss';

const FieldRadios:React.FC<fieldRadioI> = ({
    label, list, onChange, code, direction = 'row',
    noDefCheck = false, indexDefault = 0,
}) => {

    const radios = () => {
        return list.map((item, ind: number) => {
            const isCheckedDefault = noDefCheck ? false : indexDefault === ind;

            return (
                <label className = 'field-radios__radio' key = { item.val }>
                    <input
                        className = 'field-radios__radio-input' defaultChecked = { isCheckedDefault } name = { code } type = 'radio'
                        value = { item.val } onChange = { onChange }
                    />
                    <span className = 'field-radios__radio-check' />
                    <span className = 'field-radios__radio-text'>{ item.title }</span>
                </label>
            );
        });
    };

    return (
        <div className = 'field-radios'>
            { label && <label className = 'form__label field-tumbler__label'>{ label }</label> }
            <div className = { `field-radios__wrap ${direction === 'column' ? "field-radios__wrap-column" : "field-radios__wrap-row"} ` }>
                { radios() }
            </div>

        </div>
    );
};

export default FieldRadios;
