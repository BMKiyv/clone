//Core
import React, { useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import { NavHashLink as NavLink } from 'react-router-hash-link';
import I18n from "@/I18n";
import './style.scss';

//Components
import Btn from "@/components/Btn";

//Utils
import isOpacityHeader from "@/utils/isOpacityHeader";
import { useOnScroll } from "@/utils/customHooks/useOnScroll";
import { URL, LANG, URL_LANG } from "@/utils/constants";

const Header:React.FC = () => {

    const [openMenu, setOpenMenu] = useState(false);
    const [activeLang] = useState(LANG);
    const bgLight = useOnScroll();
    const opacityHeader = isOpacityHeader();

    const location = useLocation();

    //console.log('activeLang', activeLang, LANG);
    const onCLickMenu = (isBoll:any):void => {
        if (typeof isBoll === "boolean") {
            setOpenMenu((prev) => !prev);
        } else {

            setOpenMenu(false);
        }
    };

    const isActive = (hash:string, find:string):boolean => {
        return hash === find;
    };

    const onChangeLang = (event: React.MouseEvent<HTMLButtonElement>) => {
        //console.log('TRUE');
        const target = event.target as HTMLButtonElement;

        const lg = target?.lang;

        if (LANG === lg) {
            return null;
        }
        console.log('window.location', window.location);
        window.localStorage.setItem('lg', lg);
        window.location.href = lg === 'uk' ? '/' : `/${lg}`;

    };

    if (location.pathname === '/review') {
        return (
            <header className = 'review__header'>
                <Link className = 'review__logo' to = '/'>
                    <img alt = 'logo' src = '/img/logo.svg' />
                </Link>
            </header>
        );
    }

    return (
        <header
            className = { `
        header 
        ${bgLight && opacityHeader && !openMenu ? "header--white" : ""}
        ${!opacityHeader ? "header--no-opacity" : ""}
        ${openMenu ? "header--active" : ""}
        ` }>
            <div
                className = { `
            header__container m-width
            
            ` }>
                {/*<Icon name="arrow-down" />*/ }
                <Link className = 'main-logo' to = { `${String(URL_LANG)}/` }>
                    <img alt = 'logo-white' className = 'main-logo__img' src = '/img/logo.svg' />
                    <img alt = 'logo' className = 'main-logo__img' src = '/img/logo.svg' />
                    {/*                    <span className="main-logo_text" >Logo</span>*/ }
                </Link>
                <div className = 'header_nav'>
                    <div className = 'navigation-wrap'>
                        <nav className = 'navigation'>
                            <ul className = 'navigation__ul'>
                                <li className = 'navigation__item'>
                                    <NavLink
                                        activeClassName = { "" }
                                        className = { `navigation__link ${isActive(location.hash, '#privacy') ? "navigation__link--active" : ""}` }
                                        to = { `${URL_LANG}/#privacy` }
                                        onClick = { () => onCLickMenu(null) }>
                                        <span className = 'navigation__title'>{I18n.t('privacy')}</span>
                                    </NavLink>
                                </li>
                                <li className = 'navigation__item'>
                                    <NavLink
                                        activeClassName = { "" }
                                        className = { `navigation__link ${isActive(location.hash, '#specialists') ? "navigation__link--active" : ""}` }
                                        to = { `${URL_LANG}/#specialists` }
                                        onClick = { () => onCLickMenu(null) }>
                                        <span className = 'navigation__title'>{I18n.t('specialists')}</span>
                                    </NavLink>
                                </li>
                                <li className = 'navigation__item'>
                                    <NavLink
                                        activeClassName = { "" }
                                        className = { `navigation__link ${isActive(location.hash, '#partners') ? "navigation__link--active" : ""}` }
                                        to = { `${URL_LANG}/#partners` }
                                        onClick = { () => onCLickMenu(null) }>
                                        <span className = 'navigation__title'>{I18n.t('partners')}</span>
                                    </NavLink>
                                </li>
                                <li className = 'navigation__item'>
                                    <NavLink
                                        activeClassName = { "" }
                                        className = { `navigation__link ${isActive(location.hash, '#about') ? "navigation__link--active" : ""}` }
                                        to = { `${URL_LANG}/#about` }
                                        onClick = { () => onCLickMenu(null) }>
                                        <span className = 'navigation__title'>{I18n.t('about')}</span>
                                    </NavLink>
                                </li>
                                <li className = 'navigation__item'>
                                    <NavLink
                                        activeClassName = { "" }
                                        className = { `navigation__link ${isActive(location.hash, '#how-we-work') ? "navigation__link--active" : ""}` }
                                        to = { `${URL_LANG}/#how-we-work` }
                                        onClick = { () => onCLickMenu(null) }>
                                        <span className = 'navigation__title'>{I18n.t('howWeWork')}</span>
                                    </NavLink>
                                </li>
                                <li className = 'navigation__item'>
                                    <NavLink
                                        activeClassName = { "" }
                                        className = { `navigation__link ${isActive(location.hash, '#faq') ? "navigation__link--active" : ""}` }
                                        to = { `${URL_LANG}/#faq` }
                                        onClick = { () => onCLickMenu(null) }>
                                        <span className = 'navigation__title'>{I18n.t('faq')}</span>
                                    </NavLink>
                                </li>
                                <li className = 'navigation__item'>
                                    <NavLink
                                        activeClassName = { "" }
                                        className = { `navigation__link ${isActive(location.hash, '#contacts') ? "navigation__link--active" : ""}` }
                                        to = { `${URL_LANG}/#contacts` }
                                        onClick = { () => onCLickMenu(null) }>
                                        <span className = 'navigation__title'>{I18n.t('contacts')}</span>
                                    </NavLink>
                                </li>
                                <li className = 'navigation__item navigation__item--log'>
                                    <a
                                        className = 'navigation__link' href = { `${URL}/admin/login` }
                                        target = '_blank'
                                        onClick = { () => onCLickMenu(null) }>
                                        <span className = 'navigation__title'>{I18n.t('toAdmin')}</span>
                                    </a>
                                </li>
                            </ul>

                        </nav>
                        <div className = 'navigation__btn'>
                            <Btn
                                full
                                nofollow
                                theme = 'second'
                                title = { I18n.t('toAdmin') }
                                url = { `${URL}/admin/login` }
                                onPress = { () => onCLickMenu(true) }
                            />
                        </div>

                    </div>
                    <div className = 'lg'>
                        {/* <div className = "hot-line__icon-wrap" /> */}
                        {/* <div className="hot-line__wrap">
                            <span className="hot-line__text">Гаряча лінія</span>
                            <a href="tel:+380961410086" className="hot-line__link">+380961410086</a>
                        </div>
                        <div className = 'lg__icon-wrap' /> */}
                        {/* <div className = 'lg__wrap'>
                            <button
                                className = { `lg__btn ${activeLang === 'ru' ? 'lg__btn--active' : ''}` }
                                lang = 'ru'
                                onClick = { onChangeLang }>ru</button>
                            <button
                                className = { `lg__btn ${!activeLang || activeLang === 'uk' ? 'lg__btn--active' : ''}` }
                                lang = 'uk'
                                onClick = { onChangeLang }>ua</button>
                        </div> */}
                    </div>
                </div>
                <button
                    className = 'main-menu'
                    onClick = { () => onCLickMenu(true) }>
                    <img alt = 'button'src = '/img/button.svg' />
                </button>
            </div>
        </header>
    );
};

export default Header;
