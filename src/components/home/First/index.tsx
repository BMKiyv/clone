//Core
import React from 'react';
import { firstBlockI } from '@/interfaces/home';
import './style.scss';

//Components
import Btn from '../../../components/Btn';

//Utils
import { URL } from '@/utils/constants';

const First:React.FC<firstBlockI> = ({ data }) => {
    return (
        <section className = 'first'>
            <div className = 'first_absolute'>
                <div className = { `first_img first_img--${data.bgImgClass}` } />
            </div>
            <div className = 'content-wrap first__content-wrap'>
                <h1 className = ' main-title first_title'>
                    { data.title }
                </h1>
                <div>
                    {data.descriptionDesktop ?
                        <p className = 'first_text first_text--desktop'>
                            { data.descriptionDesktop }
                        </p>
                        :
                        null
                    }
                    <p className = 'first_text'>
                        { data.description }
                    </p>
                </div>
                <div className = 'first_btns'>
                    <div className = 'first_btn-main'>
                        <Btn
                            full
                            theme = 'main'
                            title = { data.mainLink.name }
                            url = { data.mainLink.link }
                        />
                    </div>
                    <div className = 'first_btn-second'>
                        <Btn
                            theme = 'second'
                            title = { data.secondLink.name }
                            url = { data.secondLink.link.indexOf('admin/') > -1 ? URL+data.secondLink.link : data.secondLink.link }
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default First;
