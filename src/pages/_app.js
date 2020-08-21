import React from 'react';
import App from 'next/app';
import moment from 'moment';
import { DefaultSeo } from 'next-seo';

import '@src/styles/index.css';

import ApiCaller from '@src/lib/ApiCaller';

global.apiCaller = new ApiCaller({
  baseURL: process.env.API_URL || 'http://localhost:3000',
});

moment.locale('en');

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <React.Fragment>
        <DefaultSeo title="NextJS Bootstrap" />
        <Component {...pageProps} />
      </React.Fragment>
    );
  }
}

export default MyApp;
