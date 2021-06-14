import React from 'react';
import { Router } from 'react-router-dom';
// @ts-ignore
import ScrollToTop from 'react-router-scroll-top';
import { createBrowserHistory } from "history";

const customHistory = createBrowserHistory();

import Header from './layout/Header';
import Content from './layout/Content';
import Footer from './layout/Footer';
import Cookie from './layout/Cookie';

const App:React.FC = () => {
    return (
        <Router history = { customHistory }>
            <ScrollToTop>
                <Cookie />
                <Header />
                <Content />
                <Footer />
            </ScrollToTop>
        </Router>
    );
};

export default App;
