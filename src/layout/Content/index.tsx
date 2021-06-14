//Core
import React, { Suspense } from 'react';
import { Switch, Route } from "react-router-dom";
import routes from '../../router';
import I18n from "@/I18n";
import './style.scss';

//Utils
import isOpacityHeader from "@/utils/isOpacityHeader";

const Content:React.FC = () => {

    return (
        <main className = 'container'>
            <div className = { `container__child ${!isOpacityHeader() ? "container__child--second m-width" : null}` }>
                <Suspense
                    fallback = { <div
                        className = { location.pathname === '/get-help'||
                                                    location.pathname === '/ru/get-help'||
                                                    location.pathname === '/give-help'||
                                                    location.pathname === '/ru/give-help'?
                            'help': 'loading' }>{I18n.t('contentLoading')}</div> }>
                    <Switch>
                        {
                            routes.map((route:any, index) => {
                                //const _routes:string = route.routes;

                                return (<Route
                                    exact = { route.exact }
                                    key = { index }
                                    path = { route.path }
                                    render = { (props) => (
                                        <route.components { ...props } />
                                    ) }
                                />);

                            })
                        }
                    </Switch>
                </Suspense>
            </div>
        </main>
    );
};

export default Content;
