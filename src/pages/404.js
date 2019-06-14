import React from 'react';
import { Link } from 'gatsby';

import n404Styles from './404.module.css';

import Layout from '../components/Layout';
import Head from '../components/Head';

export default () => {
    return (
        <Layout solid={true}>
            <Head title="404" />
            <div className={n404Styles.wrap}>
                <h1>Page Not Found</h1>
                <Link className="btn btn--primary" to="/">Head Home</Link>
            </div>
        </Layout>
    );
}