import { useState, useEffect } from 'react';

export const useOnScroll = ():boolean => {

    const [bgLight, setBgLight] = useState(false);
    //const count = 0;

    const handleScroll = ():void => {
        // console.log(window.scrollY);

        /*           if ( window.scrollY > 2 && !count) {
               count = 1;
               setBgLight( true );
           }
           if(window.scrollY < 2 && count){
               count = 0;
               setBgLight( false );
           }*/

        if (window.scrollY > 5) {
            setBgLight(true);
        } else {
            setBgLight(false);
        }

    };

    useEffect(() => {

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);

    });

    return bgLight;

};
