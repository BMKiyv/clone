//Core
import React from 'react';
import { useLocation } from "react-router-dom";
import './style.scss';
import I18n from '@/I18n';
import { Link } from "react-router-dom";

//Utils
import { URL_LANG } from "@/utils/constants";

/*import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTelegramPlane, faInstagram, faYoutube, faViber } from '@fortawesome/free-brands-svg-icons'*/

const Footer:React.FC = () => {
    const location = useLocation();

    return (
        <footer>
            <div className = ' footer'>
                <div className = 'footer__wrap'>
                    { location.pathname === '/review' ?
                        <Link className = 'review__logo' to = '/'>
                            <img alt = 'logo-white' src = '/img/logo-white.svg' />
                        </Link>

                        :
                        <>
                            <div className = 'footer_contacts' id = 'contacts'>
                                <ul className = 'contacts_list'>
                                    <li>

                                        <div>
                                            <a className = 'contacts_link contacts_phone' href = 'https://tellme.com.ua'>
                                                <img alt = 'logo' src = '/img/logo.svg' />
                                            </a>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <img
                                                alt = 'telegram' height = '11' src = '/img/social/mail.svg'
                                                width = '14'
                                            />
                                        </div>
                                        <div>
                                            <div className = 'contacts_label'>
                                                <span className = 'contacts-title'>Email:</span>
                                            </div>
                                            <a
                                                className = ' contacts_link contacts_email'
                                                href = 'mailto:tellmecomua@gmail.com'>
                                                <span>tellmecomua@gmail.com</span>
                                            </a>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <img
                                                alt = 'telegram' height = '17' src = '/img/social/gps.svg'
                                                width = '12'
                                            />
                                        </div>
                                        <div>
                                            <div className = 'contacts_label'>
                                                <span className = 'contacts-title'>{I18n.t('address')}:</span>
                                            </div>
                                            <a
                                                className = ' contacts_link contacts_map'
                                                href = 'https://goo.gl/maps/FSsw12fsAKpoLKWw9'
                                                rel = 'noopener noreferrer' target = '_blank'>
                                                <span>{I18n.t('addressLink')}</span>
                                            </a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className = 'footer_info'>
                                <div />
                                <div className = 'footer_social'>
                                    <div className = 'social_block'>
                                        <a
                                            className = 'social_icon social_icon--fasebook' href = 'https://www.facebook.com/cognitivecomua/'
                                            rel = 'noreferrer'
                                            target = '_blank'
                                            title = 'facebook'>
                                            <img
                                                alt = 'facebook'
                                                src = '/img/social/facebook.svg'
                                            />
                                        </a>
                                        <a
                                            className = 'social_icon' href = 'https://t.me/psy_support'
                                            rel = 'noreferrer'
                                            target = '_blank'
                                            title = 'telegram'>
                                            <img
                                                alt = 'telegram'
                                                src = '/img/social/telegram.svg'
                                            />
                                        </a>
                                        <a
                                            className = 'social_icon' href = 'https://www.instagram.com/institute_of_cm/'
                                            rel = 'noreferrer'
                                            target = '_blank'
                                            title = 'instagram'>
                                            <img
                                                alt = 'instagram'
                                                src = '/img/social/instagram.svg'
                                            />
                                        </a>
                                        <a
                                            className = 'social_icon' href = 'https://cutt.ly/bysGuLe' rel = 'noreferrer' target = '_blank'
                                            title = 'twitter'>
                                            <img
                                                alt = 'twitter'
                                                src = '/img/social/twitter.svg'
                                            />
                                        </a>
                                    </div>
                                </div>
                                <div className = 'footer_links'>
                                    <a className = 'footer_link' href = 'https://tellme.com.ua/use-of-site' rel = 'noreferrer' target = '_blank'>
                                        {I18n.t('footerRules')}
                                    </a>
                                    <a className = 'footer_link' href = 'https://tellme.com.ua/privacy-policy' rel = 'noreferrer' target = '_blank'>
                                        {I18n.t('footerPrivacy1')}
                                        {I18n.t('footerPrivacy2')}
                                    </a>
                                </div>

                            </div>
                        </>
                    }
                </div>
                {/* <div className = 'contacts_dev'>
                    <div className = 'contacts_dev-piece'><p className = 'contacts_link'>{I18n.t('creator')}</p></div>
                    <a className = 'contacts_dev-piece' href = 'https://dforce.com.ua' target = '_blank'>
                        <img alt = 'dforce' src = '/img/dforce.svg ' />
                    </a>
                    <a className = 'contacts_dev-piece-link contacts_dev-piece' href = 'https://dforce.com.ua' target = '_blank'>dforce.com.ua</a>
                </div> */}
            </div>
        </footer>
    );
};

export default Footer;
