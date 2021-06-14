import React from 'react';
import './style.scss';
import I18n from '@/I18n';

const Privacy:React.FC = () => {
    return (
        <section className = 'privacy'>
            <div className = 'privacy-wrap'>
                <div className = 'anchor' id = 'privacy' />
                <div className = 'privacy-content'>
                    <div className = 'content-wrap'>
                        <h2 className = 'title'>{I18n.t('homePrivacyTitle')}</h2>
                        <div>
                            <p>
                                {I18n.t('homePrivacyText')}
                            </p>
                        </div>
                    </div>
                    <div className = 'infographic privacy__infographic'>
                        <img alt = 'partner1' src = '/img/inf-privacy.svg' />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Privacy;
