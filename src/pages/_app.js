import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import moment from 'moment';

import ApiCaller from '../lib/ApiCaller';

global.apiCaller = new ApiCaller({
    baseURL: process.env.API_URL || 'http://localhost:3000',
});

moment.locale('en');

class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props;

        return (
            <React.Fragment>
                <Head>
                    <link
                        rel="stylesheet"
                        href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
                        integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
                        crossOrigin="anonymous"
                    />
                    <link
                        rel="stylesheet"
                        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css"
                    />
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/js/all.min.js"></script>
                </Head>
                <Component {...pageProps} />
            </React.Fragment>
        );
    }
}

export default MyApp;
