import React from 'react';
import { globalModal } from '@/interfaces/modals';
import './style.scss';

const Modal:React.FC<globalModal> = ({ isModal, children }) => {

    if (!isModal) {
        return null;
    }

    return (
        <div className = 'modalW'>
            {children}
        </div>
    );

};

export default Modal;
