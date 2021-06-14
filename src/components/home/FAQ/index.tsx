//Core
import React, { useState, useEffect } from 'react';
import './style.scss';
import I18n from "@/I18n";

//Components
import BtnMore from "@/components/BtnMore";
import { faq } from '@/jsons';
import { faqI } from '@/interfaces/home';
import Item from './Item';

const limitList = 5;

const FAQ:React.FC = () => {

    const list = faq;
    const [newList, setNewList] = useState([] as faqI[]);

    const renderItem = newList.map((item:faqI) => {
        return (
            <Item
                answer = { item.answer }
                key = { item.question }
                links = { item.links }
                question = { item.question }
            />
        );
    });

    useEffect(() => {
        lengthItem(limitList);
    }, []);

    const lengthItem = (count:number) => {
        const _newlist:faqI[] = [];

        for (let i = 0; i < count; i++) {
            _newlist.push(list[i]);
        }

        setNewList(_newlist);
    };

    /*    const renderItem = () => {
            return newList.map( ( item ) => {
                return ( <Item
                    key={ item.question }
                    question={ item.question }
                    answer={ item.answer }
                /> )
            } )
        };*/

    const toggleList = () => {
        if (newList.length === limitList) {
            setNewList(list);
        } else {
            lengthItem(4);
        }
    };

    return (
        <section className = 'faq'>
            <div className = 'anchor' id = 'faq' />
            <div className = 'content-wrap'>
                <h2 className = 'title'>FAQ</h2>
                <div className = 'faq_list'>
                    { renderItem }
                </div>
                {
                    list.length > limitList &&
                    <div className = 'faq_btn-more'>
                        <BtnMore
                            title = { newList.length === limitList ? I18n.t('buttonMore') : I18n.t('buttonLess') }
                            onPress = { toggleList }
                        />
                    </div>
                }
            </div>
        </section>
    );
};

export default FAQ;
