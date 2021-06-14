import React from 'react';
import './style.scss';

import Btn from "@/components/Btn";

const StopAbuse:React.FC = () => {
    return (
        <section>
            <div className = 'abuse'>
                <div className = 'abuse-wrap'>
                    <div className = 'abuse-text'>
                        <h2 className = 'title'>Stop Abuse Ukraine</h2>
                        <p>Stop Abuse Ukraine — це вайбер-спільнота, де можна знайти детальну інформацію, що стосується домашнього насильства. Куди йти по допомогу, якого виду ця допомога буває, як потрапити до кризової кімнати, де отримати безкоштовну психологічну консультацію, на що постраждалі мають право, як розпізнати психологічне насильство – на ці та інші запитання можна отримати відповіді, підписавшись на вайбер-канал.</p>
                        <br />
                        <p>Крім того, у спільноті публікуються надихаючі історії відомих людей, які вирвалися із замкненого кола насильства та побудували нове життя.</p>
                        <div className = 'abuse-btn'>
                            <Btn
                                theme = { 'blue' }
                                title = { 'Підписатись на канал' }
                                url = { 'https://tellme.com.ua' }
                            />
                        </div>

                    </div>
                    <div className = 'abuse-img' />
                </div>
            </div>
        </section>
    );
};

export default StopAbuse;
