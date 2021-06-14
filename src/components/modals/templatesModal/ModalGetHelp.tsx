import React from 'react';
import './style.scss';
import I18n from "@/I18n";

const ModalGetHelp:React.FC = () => {

    return (

        <p className = 'templatesModal__content-text'>
            {I18n.t('modalBefore')}
            <br /><br className = 'templatesModal__br' />
            {I18n.t('modalAfter')}
            <br /><br className = 'templatesModal__br' />
            {I18n.t('modalAfterBr2')}
            <br /><br className = 'templatesModal__br' />
            {I18n.t('modalAfterBr')}
        </p>

    );
};

export default ModalGetHelp;
