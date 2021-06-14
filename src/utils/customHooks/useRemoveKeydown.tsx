import React, { useEffect } from 'react';

export const useRemoveKeydown = ():void => {
    useEffect(() => {

        window.addEventListener('keydown', handleKey);

        return () => window.removeEventListener('keydown', handleKey);

    }, []);

    const handleKey = (e: { keyCode: number; returnValue: boolean; }) => {
        if (e.keyCode===9) {
            e.returnValue = false;
        }
    };

};
