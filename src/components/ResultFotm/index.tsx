//Core
import React from 'react';
import './style.scss';
import I18n from "@/I18n";
import { resultFormI } from '@/interfaces';

//Components
import Btn from "@/components/Btn";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

const ResultForm:React.FC<resultFormI> = ({
    success, objResult, devMode,
}) => {
    const isSuccess = success === 1;

    const renderInfo = () => {

        const title = isSuccess ? objResult.title : I18n.t('resFotmOnErr');
        const description = isSuccess ? objResult.description: I18n.t('resFotmOnErrDesc');

        return (<div className = 'result-form__wrap'>
            <div
                className = { `result-form__icon-wrap ${isSuccess ? "result-form__icon-wrap--true" : "result-form__icon-wrap--false"}` }>
                <div className = 'result-form__icon'>
                    <FontAwesomeIcon color = '#fff' icon = { isSuccess ? faCheck :faTimes } size = '2x' />
                </div>
            </div>
            <h1 className = 'title result-form__title'>{ title }</h1>
            <div className = 'result-form__description-wrap'>
                <p className = 'result-form__description'>
                    { description }
                </p>
                <p className = 'result-form__description'>
                    { isSuccess ? I18n.t('successToBot') : I18n.t('resFotmOnErrNote')}
                    { isSuccess? <a className = 'templatesModal__bot' href = 'https://t.me/personal_friend_bot' rel = 'noreferrer' target = '_blank' >{I18n.t('anchorBot')}</a>:'' }
                </p>
                { isSuccess ? '':<a className = 'result-form__link' href = 'mailto:tellmecomua@gmail.com'>tellmecomua@gmail.com</a>}
            </div>
        </div>);
    };

    return (
        <div className = 'result-form'>
            { renderInfo() }
            {devMode && isSuccess ?
                <div className = 'devMode devMode--mobile'>
                    <div className = 'devMode__container'>
                        <span className = 'devMode__text'>
                            {devMode.text}
                        </span>
                    </div>
                </div>
                : null
            }
            <div className = 'result-form__btn-wrap'>
                <Btn
                    full
                    theme = 'main'
                    title = { I18n.t('buttonMain') }
                    url = '/'
                />
            </div>
            {devMode && isSuccess ?
                <div className = 'devMode devMode--desktop'>
                    <div className = 'devMode__container'>
                        <img alt = 'Сайт працює в тестовому режимі' className = 'devMode__img' src = '/img/edit-tools-dark.svg' />
                        <span className = 'devMode__text'>
                            {devMode.text}
                        </span>
                    </div>
                </div>
                : null
            }

        </div>
    );
};

export default ResultForm;
