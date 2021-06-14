import React from 'react';
import './style.scss';
import I18n from "@/I18n";

const OverLoad:React.FC = () => {
    return (

        <p className = 'templatesModal__content-text'>{I18n.t('overLoadMessage')}
            <br /><br className = 'templatesModal__br' />
            {I18n.t('popUpMessagePhone2')}
            {/* <br /><br className = 'templatesModal__br' />
            {I18n.t('aboutBot')}
            <a className = 'templatesModal__bot' href = 'https://t.me/personal_friend_bot' rel = 'noreferrer' target = '_blank' >{I18n.t('anchorBot')}</a> */}
        </p>

    );
};

export default OverLoad;
