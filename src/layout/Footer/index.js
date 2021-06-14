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

const Footer = () => {
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
                                <h2 className = 'title'>{I18n.t('contacts')}</h2>
                                <ul className = 'contacts_list'>
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
                                                alt = 'telegram' height = '14' src = '/img/social/telephone.svg'
                                                width = '14'
                                            />
                                        </div>
                                        <div>
                                            <div className = 'contacts_label'>
                                                <span className = 'contacts-title'>Телефон:</span>
                                            </div>
                                            <a className = 'contacts_link contacts_phone' href = 'tel:+380683087474'>
                                                <span>+38 (068) 308 74 74</span>
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
                                    <span className = 'social_text'>{I18n.t('social')}:</span>
                                    <div className = 'social_block'>
                                        <a
                                            className = 'social_icon social_icon--fasebook' href = 'https://www.facebook.com/cognitivecomua/' target = '_blank'
                                            title = 'facebook'>
                                            <img
                                                alt = 'facebook'
                                                src = '/img/social/facebook.svg'
                                            />
                                        </a>
                                        <a
                                            className = 'social_icon' href = 'https://t.me/psy_support' target = '_blank'
                                            title = 'telegram'>
                                            <img
                                                alt = 'telegram'
                                                src = '/img/social/telegram.svg'
                                            />
                                        </a>
                                        <a
                                            className = 'social_icon' href = 'https://www.instagram.com/institute_of_cm/'
                                            target = '_blank'
                                            title = 'instagram'>
                                            <img
                                                alt = 'instagram'
                                                src = '/img/social/instagram.svg'
                                            />
                                        </a>
                                        <a
                                            className = 'social_icon' href = 'https://cutt.ly/bysGuLe' target = '_blank'
                                            title = 'youtube'>
                                            <img
                                                alt = 'youtube'
                                                src = '/img/social/youtube.svg'
                                            />
                                        </a>
                                        <a
                                            className = 'social_icon' href = 'https://cutt.ly/JtT9umd' target = '_blank'
                                            title = 'viber'>
                                            <img alt = 'viber' src = '/img/social/viber.svg' />
                                        </a>
                                    </div>
                                </div>
                                <div className = 'footer_links'>
                                    <Link className = 'footer_link' to = { `${URL_LANG}/privacy-policy` }>
                                        {I18n.t('footerPrivacy1')}<br />
                                        {I18n.t('footerPrivacy2')}
                                    </Link>
                                    <Link className = 'footer_link' to = { `${URL_LANG}/use-of-site` }>
                                        {I18n.t('footerRules')}
                                    </Link>
                                </div>

                            </div>
                            {/* <div className = 'contacts_dev'>
                                <div className = 'contacts_dev-piece'><p className = 'contacts_link'>{I18n.t('creator')}</p></div>
                                <a className = 'contacts_dev-piece' href = 'https://dforce.com.ua'  target = '_blank'>
                                    <img alt = 'dforce' src = '/img/dforce.svg ' />
                                </a>
                                <a className = 'contacts_dev-piece-link contacts_dev-piece' href = 'https://dforce.com.ua'  target = '_blank'>dforce.com.ua</a>
                            </div> */}
                        </>
                    }
                </div>
                <div className = 'contacts_dev'>
                    <div className = 'contacts_dev-piece'><p className = 'contacts_link'>{I18n.t('creator')}</p></div>
                    <a className = 'contacts_dev-piece' href = 'https://dforce.com.ua'  target = '_blank'>
                        <img alt = 'dforce' src = '/img/dforce.svg ' />
                    </a>
                    <a className = 'contacts_dev-piece-link contacts_dev-piece' href = 'https://dforce.com.ua'  target = '_blank'>dforce.com.ua</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
