//Core
import React, { useState } from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import I18n from '@/I18n';
import './style.scss';

//Utils
import { URL_LANG } from "@/utils/constants";

const Cookie:React.FC = () => {

    const [agreeCookie, setAgreeCookie] = useState<boolean>(Boolean(window.localStorage.agreeCookie));

    const agree = ():void => {
        window.localStorage.setItem("agreeCookie", "true");
        setAgreeCookie(true);
    };

    const onClose = ():void => {
        setAgreeCookie(true);
    };

    if (agreeCookie) {
        return null;
    }

    return (
        <div className = 'cookie'>
            <div className = 'cookie__container'>
                <div className = 'cookie__text-wrap'>
                    <span className = 'cookie__text'>{I18n.t('cookieText')}.</span>
                </div>
                <div className = 'cookie__btns'>
                    <NavLink
                        className = 'cookie__link-wrap' to = { `${URL_LANG}/privacy-policy#cookie-info` }>
                        <span className = 'cookie__link-text'>{I18n.t('cookieLink')}</span>
                    </NavLink>
                    <button className = { 'cookie__btn' } onClick = { agree }>
                        {I18n.t('cookieButton')}
                    </button>
                    <button className = { 'cookie__close' } onClick = { onClose } />
                </div>
            </div>
        </div>
    );
};

export default Cookie;
