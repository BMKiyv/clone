import React, { useState, useMemo } from 'react';
import './style.scss';

import Btn from '../../../Btn';
import { HelpCenterI, HelpCenterContactsDataI } from '@/interfaces';

export const HelpCenter:React.FC<HelpCenterI>  = ({
    ind,
    title,
    description,
    contacts,
    img,
    bg,
    bgPosition,
    link,
}) => {

    const [isShowData, setIsShowData] = useState(false);

    const toggleInfo = () => {
        setIsShowData((prev) => !prev);
    };

    const renderContacts = useMemo(() => {

        if (contacts?.length === 0) {
            return null;
        }

        const listContacts = (dataContacts:HelpCenterContactsDataI[]) => {
            return dataContacts?.map((data) => {
                return (
                    <a className = 'help-data__contact' href = { `${data.type}:${data.value}` } key = { data.value }>
                        <span className = 'help-data__contact-icon' >
                            {data.type === 'tel' &&
                                <i className = 'icon icon-phone help-data__icon' />
                            }
                        </span>
                        <span className = 'help-data__contact-data'>{data.value}</span>
                    </a>
                );
            });
        };

        return contacts?.map((contact, index) => {
            return (
                <div className = 'help-data__contacts' key = { index }>

                    <div className = 'help-data__list'>
                        {contact?.data && listContacts(contact.data)}
                    </div>
                    <div className = 'help-data__description-wrap'>
                        <p className = 'help-data__description'>
                            {contact.description}
                        </p>
                    </div>
                </div>
            );
        });
    }, [contacts]);

    const renderContent = () => {
        return (
            <>
                <figure
                    className = { `help-center__img-wrap ${bgPosition && img ? `help-center__img-${bgPosition}` : ''}` }
                    style = { { backgroundColor: bg ? bg : '' } }>
                    {
                        img ?
                            <img alt = { title } className = 'help-center__img' src = { img } />
                            :
                            <i className = 'icon icon-no-photo help-center__img-no' />
                    }
                </figure>
                <div className = 'help-center__body'>
                    <h3 className = 'help-center__title'>{title}</h3>
                    <div className = 'help-center__description'>
                        <p>
                            {description}
                        </p>
                    </div>
                    {!isShowData ?
                        <div className = { `help-center__show-info ${link ? 'help-center__show-link' : ''}` }>
                            {contacts && contacts?.length > 0 ?
                                <Btn
                                    full
                                    //small
                                    //iconName = 'arrow-bottom'
                                    theme = 'blue'
                                    title = 'Подивитися контакти'
                                    onPress = { toggleInfo }
                                />
                                :
                                <Btn
                                    full
                                    //small
                                    //iconName = 'arrow-bottom'
                                    theme = 'blue'
                                    title = 'Перейти до сайту'
                                />
                            }
                        </div>
                        :
                        <div className = 'help-center__contacts'>
                            {
                                renderContacts
                            }
                        </div>
                    }
                </div>
            </>
        );

    };

    return (
        <>
            {link ?
                <a className = 'help-center' href = { link } target = { '_blank' }>
                    {renderContent()}
                </a>
                :
                <div className = 'help-center'>
                    {renderContent()}
                </div>
            }
        </>
    );
};
