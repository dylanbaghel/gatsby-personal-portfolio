import React from 'react';
import '../assets/css/all.min.css';
import './main.css';

import layoutStyles from './layout.module.css';

import Header from './Header';
import Footer from './Footer';

const Layout = (props) => {
    return (
        <React.Fragment>
            <div className={layoutStyles.wrapper}>
                <main className={layoutStyles.content}>
                    <Header solid={props.solid} />
                    {props.children}
                </main>
                <Footer />
            </div>
        </React.Fragment>
    );
};

export default Layout;