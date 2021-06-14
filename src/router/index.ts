import { lazy } from 'react';
import { LANG } from '@/utils/constants';

const routes = [
    {
        path:       ['/', '/ru'],
        exact:      true,
        components: lazy(
            () => import('../pages/Home')
        ),

        /*
                components: lazy(
            () => {
                return new Promise( resolve => {
                    setTimeout( () => resolve( import("../pages/Home") ), 100300 );
                } );
            }
        )
        */
    },
    {
        path:       ['/get-help', '/ru/get-help'],
        components: lazy(
            () => import('../pages/GetHelp')
        ),
    },
    {
        path:       ['/give-help', '/ru/give-help'],
        components: lazy(
            () => import('../pages/GiveHelp')
        ),
    },
    {
        path:       ['/review', '/ru/review'],
        components: lazy(
            () => import('../pages/Review')
        ),
    },
    {
        path:       ['/privacy-policy', '/ru/privacy-policy'],
        components: lazy(
            () => {
                switch (LANG) {
                    case 'ru':
                        return import('../pages/ru/PrivacyPolicy');
                    default:
                        return import('../pages/PrivacyPolicy');
                }
            }
        ),
    },
    {
        path:       ['/specialist-policy', '/ru/specialist-policy'],
        components: lazy(
            () => import('../pages/SpecialistPolicy')
        ),
    },
    {
        path:       ['/use-of-site', '/ru/use-of-site'],
        components: lazy(
            () => {
                switch (LANG) {
                    case 'ru':
                        return import('../pages/ru/UseOfSite');
                    default:
                        return import('../pages/UseOfSite');
                }
            }
        ),
    },
    {
        path:       ['/for-psychologists', '/ru/for-psychologists'],
        components: lazy(
            () => import('../pages/ForPsychologists')
        ),
    }
];

export default routes;
