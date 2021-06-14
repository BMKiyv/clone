//Core
import React from 'react';
import { Link } from "react-router-dom";
import { buttonI } from '@/interfaces';
import './style.scss';

//Utils
import { URL_LANG } from '@/utils/constants';

const Btn:React.FC<buttonI> = ({
    url,
    theme,
    title,
    img,
    onPress = () => {
        console.log('empty');
    },
    full,
    nofollow = false,
}) => {

    const renderBtn = () => {
        const _rel = nofollow ? 'nofollow' : "";
        const bot = (theme==='bot' || theme==='botmore' )? true: false;

        if (url) {
            if (url.indexOf("http") !== -1) {
                return (
                    <a
                        className = { `${bot?'btn-botbtn':'btn'} btn-${theme} ${full ? "btn-full" : ""}` } href = { url } rel = { _rel } target = '_blank'
                        onClick = { onPress }>
                        {img && <img className = 'btn-img' src = { img } alt = { theme } />}
                        <span className = 'btn_text'>{ title }</span>
                    </a>
                );
            }

            return (
                <Link
                    className = { `btn btn-${theme} ${full ? "btn-full" : ""}` } to = { URL_LANG+url } onClick = { onPress }>
                    <span className = 'btn_text'>{ title }</span>
                    {img && <img className = 'btn-img' src = { img } alt = { theme } />}
                </Link>
            );

        }

        return (<div
            className = { `btn btn-${theme} ${full ? "btn-full" : ""}` } onClick = { onPress }>
            <span className = 'btn_text'>{ title }</span>
            {img && <img className = 'btn-img' src = { img } alt = { theme } />}
        </div>);
    };

    return (<>
        { renderBtn() }
    </>
    );
};

export default Btn;
