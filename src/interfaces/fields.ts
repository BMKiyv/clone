import React from "react";

export interface fieldI {
    label?: string,
    invalid?: string | null,
    //onChange: (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLFormElement>) => void,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
}

export interface listI {
    val: string,
    title: string,
}

export interface fieldTextI extends fieldI {
    placeholder?: string,
    code: string,
    type?: string,
}

export interface fieldTextareaI extends Omit<fieldI, 'onChange'> {
    placeholder: string,
    code: string,
    onChange: (e:React.ChangeEvent<HTMLTextAreaElement>)=>void
    bgField?: string,
}

export interface fieldSelectI extends Omit<fieldI, 'onChange'> {
    listOption: listI[],
    code: string,
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void,
    defaultValue?: string,
    multiple?: boolean,
    subText?: string,
}

export interface fieldRadioI extends fieldI {
    list: listI[],
    code: string,
    direction?: string,
    noDefCheck?: boolean,
    indexDefault?: number,
}

export interface fieldPhoneI extends Omit<fieldI, 'onChange'> {
    placeholder: string,
    value: string,
    onChange: (tel: string) => void,
    type?: string,
    code?: string,
    locale?: { [key: string]: string; },
}

export interface fieldListBtnI extends fieldI {
    listBtn: (listI & { id: string })[],
    code: string,
    custom?: string,
}

export interface fieldCheckboxI extends fieldI {
    code: string,
    text?: string,
    link?: string,
    linkText?: string,
}