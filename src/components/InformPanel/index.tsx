import React from 'react';
import { InformPanelI } from '@/interfaces';
import './style.scss';

const InformPanel:React.FC<InformPanelI> = ({
    title, showIcon, mobileMode, showCTRL,
}) => {

    return (
        <div className = { `informPanel ${mobileMode ? "informPanel--multiple" : ""}` }>
            {showIcon&& <div className = 'informPanel-inform'><span style = { { color: 'white' } }><i><b>i</b></i></span></div>}
            {showCTRL?<p>{title}<span className = 'informPanel-ctrl'>ctrl</span></p>: <p>{title}</p>}
        </div>
    );
};

export default InformPanel;
